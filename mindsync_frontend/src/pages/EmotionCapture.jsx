import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const positiveWords = ["calm", "hope", "grateful", "happy", "relaxed", "love"];
const negativeWords = ["anxious", "sad", "angry", "tired", "overwhelmed", "lonely"];

// PUBLIC_INTERFACE
export default function EmotionCapturePage() {
  /** Text input with live sentiment highlight and calming UI. */
  const [text, setText] = useState("");

  const highlighted = useMemo(() => {
    if (!text) return text;
    const tokens = text.split(/\b/);
    return tokens.map((t, i) => {
      const lower = t.toLowerCase();
      if (positiveWords.includes(lower)) {
        return <span key={i} className="text-emerald-300 font-medium">{t}</span>;
      }
      if (negativeWords.includes(lower)) {
        return <span key={i} className="text-rose-300 font-medium">{t}</span>;
      }
      return <span key={i}>{t}</span>;
    });
  }, [text]);

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-6 space-y-4">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-3xl">
        Emotion Capture
      </motion.h1>
      <Card>
        <label className="block text-sm mb-1">How are you feeling today?</label>
        <Input
          aria-label="Emotion input"
          placeholder="Type your thoughts..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-4 p-4 rounded-xl bg-white/5 min-h-[72px]" aria-live="polite">
          {highlighted}
        </div>
        <div className="mt-4">
          <Button>Save entry</Button>
        </div>
      </Card>
    </div>
  );
}
