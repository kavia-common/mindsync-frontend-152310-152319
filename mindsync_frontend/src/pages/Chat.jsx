import { useEffect, useRef, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuth } from "../lib/auth";
import { motion } from "framer-motion";
import { Smile, Mic, Camera, Send } from "lucide-react";

// PUBLIC_INTERFACE
export default function ChatPage() {
  /** Animated chat UI with AI intro, sentiment hint, timestamps, and rich input controls. */
  const { role, user } = useAuth();
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, author: "AI Coach", content: "Hi! I'm here to listen. How are you feeling today?", me: false, ts: new Date() },
  ]);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  const send = () => {
    if (!msg.trim()) return;
    const now = new Date();
    setMessages((m) => [...m, { id: now.getTime(), author: role || "User", content: msg.trim(), me: true, ts: now }]);
    setMsg("");
    setTimeout(() => {
      const replyAt = new Date();
      setMessages((m) => [
        ...m,
        {
          id: replyAt.getTime(),
          author: "AI Coach",
          content: "Thank you for sharing 💙",
          me: false,
          ts: replyAt,
        },
      ]);
    }, 700);
  };

  const formatTime = (d) =>
    d?.toLocaleTimeString?.([], { hour: "2-digit", minute: "2-digit" }) || "";

  return (
    <main id="main" className="mx-auto max-w-4xl p-4 md:p-6 space-y-4 pt-24">
      <h1 className="font-poppins text-3xl">Secure Chat</h1>
      {/* Sentiment hint */}
      <div className="glass neo p-3 text-sm text-white/80">
        Sentiment: <span className="text-emerald-300">Positive</span> • This is a private space. Be yourself.
      </div>

      <Card className="h-[60vh] flex flex-col">
        <div ref={ref} className="flex-1 overflow-y-auto space-y-3 p-3">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`max-w-[78%] px-4 py-2 rounded-2xl ${
                m.me ? "ml-auto bg-primary text-white" : "bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="text-xs opacity-70">
                  {m.me ? user?.displayName || "You" : m.author}
                </div>
                <div className="text-[10px] opacity-50">{formatTime(m.ts)}</div>
              </div>
              <div>{m.content}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-2 border-t border-white/10">
          <Button variant="ghost" aria-label="Emoji">
            <Smile className="w-5 h-5" />
          </Button>
          <Button variant="ghost" aria-label="Voice">
            <Mic className="w-5 h-5" />
          </Button>
          <Button variant="ghost" aria-label="Camera">
            <Camera className="w-5 h-5" />
          </Button>
          <Input
            aria-label="Message input"
            placeholder="Type a message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <Button onClick={send} aria-label="Send message">
            <Send className="w-4 h-4 mr-1" /> Send
          </Button>
        </div>
      </Card>
    </main>
  );
}
