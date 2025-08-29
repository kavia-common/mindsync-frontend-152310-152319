import { useEffect, useRef, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

// PUBLIC_INTERFACE
export default function FaceRecognitionPage() {
  /** Camera preview with animated overlay (demo without actual ML). */
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);
  const [emotion, setEmotion] = useState("Neutral");

  useEffect(() => {
    let interval;
    let stream;
    const start = async () => {
      if (!navigator?.mediaDevices?.getUserMedia) return;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch {
        // Ignore failures in demo
      }
    };
    if (active) {
      start();
      // demo changing emotion
      const emotions = ["Calm", "Happy", "Neutral", "Anxious", "Focused"];
      interval = setInterval(() => {
        setEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
      }, 1500);
    }
    return () => {
      clearInterval(interval);
      if (stream) {
        stream.getTracks().forEach((t) => t.stop());
      } else if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, [active]);

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-6 space-y-4">
      <h1 className="font-poppins text-3xl">Face Recognition</h1>
      <Card>
        <div className="flex items-center gap-2">
          <Button onClick={() => setActive(true)} disabled={active}>Start camera</Button>
          <Button onClick={() => setActive(false)} variant="ghost" disabled={!active}>Stop</Button>
        </div>
        <div className="relative mt-4 rounded-xl overflow-hidden">
          <video ref={videoRef} className="w-full max-h-[360px] object-cover rounded-xl" autoPlay playsInline muted />
          {active && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur text-sm">
              Emotion: <span className="font-medium text-primary">{emotion}</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
