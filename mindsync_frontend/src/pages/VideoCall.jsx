import { useEffect, useRef, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
export default function VideoCallPage() {
  /** WebRTC UI scaffold with local preview; remote is placeholder box. */
  const localRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let stream;
    if (active) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((s) => {
        stream = s;
        if (localRef.current) localRef.current.srcObject = s;
      });
    }
    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, [active]);

  return (
    <main id="main" className="mx-auto max-w-5xl p-4 md:p-6 space-y-4">
      <h1 className="font-poppins text-3xl">Video Session</h1>
      <Card>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <video ref={localRef} className="w-full rounded-xl" autoPlay playsInline muted />
            {active && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur text-sm"
              >
                Emotion overlay: Calm
              </motion.div>
            )}
          </div>
          <div className="rounded-xl bg-white/5 h-60 grid place-items-center">
            <span className="text-white/60">Remote video (placeholder)</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Button onClick={() => setActive(true)} disabled={active}>Start</Button>
          <Button onClick={() => setActive(false)} variant="ghost" disabled={!active}>End</Button>
        </div>
      </Card>
    </div>
  );
}
