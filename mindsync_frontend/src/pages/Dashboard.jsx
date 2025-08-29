import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { CheckCircle2, TrendingUp, Activity, Zap } from "lucide-react";

/**
 * PUBLIC_INTERFACE
 * Dashboard with alert banner, greeting, emotion tracker, animated stats, affirmation,
 * timeline, checklist, tips carousel, and soundscapes panel (mock data).
 */
export default function DashboardPage() {
  const moodData = useMemo(
    () => [
      { day: "Mon", mood: 62 },
      { day: "Tue", mood: 58 },
      { day: "Wed", mood: 65 },
      { day: "Thu", mood: 70 },
      { day: "Fri", mood: 75 },
      { day: "Sat", mood: 68 },
      { day: "Sun", mood: 72 },
    ],
    []
  );

  const emotionPie = useMemo(
    () => [
      { name: "Calm", value: 45, color: "#10b981" },
      { name: "Happy", value: 25, color: "#f59e0b" },
      { name: "Neutral", value: 20, color: "#5b8bfa" },
      { name: "Anxious", value: 10, color: "#ef4444" },
    ],
    []
  );

  const tips = [
    "Try 4-7-8 breathing for 2 minutes.",
    "Take a mindful 5-minute walk outdoors.",
    "Write down three small wins from today.",
    "Drink a glass of water and stretch for 60 seconds.",
  ];

  const [tipIndex, setTipIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTipIndex((i) => (i + 1) % tips.length), 3800);
    return () => clearInterval(id);
  }, []);

  const checklist = [
    { id: 1, label: "2-min breathing exercise", done: true },
    { id: 2, label: "Mood journal entry", done: false },
    { id: 3, label: "Send a gratitude message", done: false },
  ];
  const [tasks, setTasks] = useState(checklist);

  return (
    <main id="main" className="mx-auto max-w-7xl p-4 md:p-6 space-y-6 pt-24">
      {/* Alert banner */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass neo border-l-4 border-l-primary px-4 py-3 flex items-center gap-3"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="text-primary" />
        <div className="text-sm">
          Daily check-in available. Track your emotions to keep your streak.
        </div>
      </motion.div>

      {/* Greeting + emotion tracker + affirmation */}
      <div className="grid lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/10 animate-pulse-soft" />
          <div className="relative">
            <h1 className="font-poppins text-2xl">Welcome back</h1>
            <p className="text-white/70">Here’s how you’re doing this week.</p>
            <div className="h-40 mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={moodData}>
                  <defs>
                    <linearGradient id="mood" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5b8bfa" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#5b8bfa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip />
                  <Area type="monotone" dataKey="mood" stroke="#5b8bfa" fillOpacity={1} fill="url(#mood)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Emoji emotion tracker with glow */}
        <Card className="flex flex-col items-center justify-center text-center">
          <div
            className="text-5xl select-none"
            aria-label="Current emotion"
            title="Current emotion"
          >
            😊
          </div>
          <p className="mt-2 text-white/80">Feeling good</p>
          <div className="mt-3 w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-primary animate-[widthGrow_2s_ease-in-out] rounded-full" style={{ width: "72%" }} />
          </div>
        </Card>

        {/* Daily affirmation */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(255,255,255,0.06))] bg-[length:200%_100%] animate-shine" />
          <div className="relative">
            <h3 className="font-semibold">Daily affirmation</h3>
            <p className="mt-2 text-white/90">“I am resilient, capable, and I deserve calm.”</p>
            <Button variant="ghost" className="mt-3">New affirmation</Button>
          </div>
        </Card>
      </div>

      {/* Stats cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Streak", value: "6 days", icon: <Activity className="w-4 h-4" />, trend: "+1" },
          { label: "Avg Mood", value: "69", icon: <TrendingUp className="w-4 h-4" />, trend: "+4" },
          { label: "Sessions", value: "12", icon: <Zap className="w-4 h-4" />, trend: "0" },
          { label: "Insights", value: "5", icon: <TrendingUp className="w-4 h-4" />, trend: "+2" },
        ].map((s) => (
          <motion.div key={s.label} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Card className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">{s.label}</p>
                <p className="text-2xl font-semibold mt-1">{s.value}</p>
              </div>
              <div className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{s.trend}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Timeline + checklist */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <h3 className="font-semibold mb-2">Recent timeline</h3>
          <ul className="space-y-3">
            {[
              { time: "10:20", text: "Completed breathing exercise" },
              { time: "09:50", text: "Logged mood: Calm" },
              { time: "09:00", text: "Read insight: Triggers and grounding" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-glow" aria-hidden="true" />
                <div>
                  <div className="text-xs text-white/60">{item.time}</div>
                  <div>{item.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="font-semibold mb-2">Recommended actions</h3>
          <ul className="space-y-2">
            {tasks.map((t) => (
              <li key={t.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-white/20 bg-white/10"
                  checked={t.done}
                  onChange={() => setTasks((prev) => prev.map(p => p.id === t.id ? { ...p, done: !p.done } : p))}
                  aria-label={t.label}
                />
                <span className={t.done ? "line-through text-white/50" : ""}>{t.label}</span>
              </li>
            ))}
          </ul>
          <Button variant="ghost" className="mt-3">View all</Button>
        </Card>
      </div>

      {/* Extras: tips carousel + soundscape */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="md:col-span-2 relative overflow-hidden">
          <h3 className="font-semibold">AI tips</h3>
          <div className="min-h-[60px] mt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={tipIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-white/90"
              >
                {tips[tipIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-2 flex gap-1">
            {tips.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 flex-1 rounded-full ${i === tipIndex ? "bg-primary" : "bg-white/10"}`}
                aria-label={`Go to tip ${i + 1}`}
                onClick={() => setTipIndex(i)}
              />
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold">Soundscapes</h3>
          <audio controls className="w-full mt-2">
            <source src="" type="audio/mp3" />
          </audio>
          <p className="text-xs text-white/60 mt-2">Ambient player (demo controls)</p>
        </Card>
      </div>
    </main>
  );
}
