import { useEffect, useRef, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

// PUBLIC_INTERFACE
export default function VoiceAnalyzerPage() {
  /** Microphone recording with simple animated waveform preview. */
  const [recording, setRecording] = useState(false);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);
  const canvasRef = useRef(null);
  const sourceRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (mediaRef.current) mediaRef.current.getTracks().forEach((t) => t.stop());
      if (sourceRef.current) sourceRef.current.disconnect();
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      analyser.getByteTimeDomainData(dataArray);
      ctx.fillStyle = "rgba(15,23,42,0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(91,139,250,0.9)";
      ctx.beginPath();

      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      rafRef.current = requestAnimationFrame(render);
    };
    render();
  };

  const start = async () => {
    if (recording) return;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRef.current = stream;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtxRef.current = audioCtx;
    const source = audioCtx.createMediaStreamSource(stream);
    sourceRef.current = source;
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    analyserRef.current = analyser;
    source.connect(analyser);
    setRecording(true);
    draw();
  };

  const stop = () => {
    setRecording(false);
    cancelAnimationFrame(rafRef.current);
    if (mediaRef.current) mediaRef.current.getTracks().forEach((t) => t.stop());
    if (sourceRef.current) sourceRef.current.disconnect();
    if (audioCtxRef.current) audioCtxRef.current.close();
  };

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-6 space-y-4">
      <h1 className="font-poppins text-3xl">Voice Analyzer</h1>
      <Card>
        <div className="flex items-center gap-2">
          <Button onClick={start} disabled={recording}>Start</Button>
          <Button onClick={stop} variant="ghost" disabled={!recording}>Stop</Button>
        </div>
        <div className="mt-4 rounded-xl bg-black/20 overflow-hidden">
          <canvas ref={canvasRef} width={800} height={200} className="w-full h-48" />
        </div>
      </Card>
    </div>
  );
}
