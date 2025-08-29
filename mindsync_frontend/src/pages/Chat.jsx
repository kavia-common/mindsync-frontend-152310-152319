import { useEffect, useRef, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuth } from "../lib/auth";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
export default function ChatPage() {
  /** Animated chat UI scaffold with role tag. */
  const { role, user } = useAuth();
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, author: "Therapist", content: "Hi! How are you feeling today?", me: false },
  ]);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  const send = () => {
    if (!msg.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), author: role || "User", content: msg.trim(), me: true }]);
    setMsg("");
    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, author: "Therapist", content: "Thank you for sharing.", me: false }]);
    }, 600);
  };

  return (
    <main id="main" className="mx-auto max-w-4xl p-4 md:p-6 space-y-4">
      <h1 className="font-poppins text-3xl">Secure Chat</h1>
      <Card className="h-[60vh] flex flex-col">
        <div ref={ref} className="flex-1 overflow-y-auto space-y-2 p-2">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`max-w-[70%] px-4 py-2 rounded-2xl ${m.me ? "ml-auto bg-primary text-white" : "bg-white/10"}`}
            >
              <div className="text-xs opacity-70 mb-1">{m.me ? (user?.displayName || "You") : m.author}</div>
              <div>{m.content}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-2 border-t border-white/10">
          <Input
            placeholder="Type a message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <Button onClick={send}>Send</Button>
        </div>
      </Card>
    </main>
  );
}
