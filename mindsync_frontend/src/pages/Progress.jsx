import { useMemo } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { BadgeCheck, AlertTriangle, Award } from "lucide-react";

// PUBLIC_INTERFACE
export default function ProgressPage() {
  /** Progress analytics with risk assessment, charts, milestones, and insights (mock). */
  const trendData = useMemo(
    () => [
      { day: "Mon", mood: 62, sleep: 6.8, stress: 38 },
      { day: "Tue", mood: 58, sleep: 6.2, stress: 46 },
      { day: "Wed", mood: 65, sleep: 7.1, stress: 35 },
      { day: "Thu", mood: 70, sleep: 7.4, stress: 30 },
      { day: "Fri", mood: 75, sleep: 7.0, stress: 28 },
      { day: "Sat", mood: 68, sleep: 7.6, stress: 36 },
      { day: "Sun", mood: 72, sleep: 7.2, stress: 32 },
    ],
    []
  );

  const emotions = useMemo(
    () => [
      { name: "Calm", value: 40, color: "#10b981" },
      { name: "Happy", value: 28, color: "#f59e0b" },
      { name: "Neutral", value: 18, color: "#5b8bfa" },
      { name: "Anxious", value: 9, color: "#ef4444" },
      { name: "Sad", value: 5, color: "#6366f1" },
    ],
    []
  );

  const riskLevel = "Low";
  const riskColor = riskLevel === "High" ? "bg-danger/20 text-danger" : riskLevel === "Moderate" ? "bg-warning/20 text-warning" : "bg-emerald-500/20 text-emerald-300";

  return (
    <main id="main" className="mx-auto max-w-7xl p-4 md:p-6 space-y-6 pt-24">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-poppins text-3xl">Progress & Insights</h1>
        <p className="text-white/70">Weekly trends, milestones and recommendations.</p>
      </motion.div>

      {/* Risk assessment */}
      <Card className="flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm">Risk assessment</p>
          <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
            <AlertTriangle className="w-4 h-4" />
            <span className={`text-sm px-2 py-0.5 rounded-full ${riskColor}`}>{riskLevel} risk</span>
          </div>
          <p className="text-white/60 text-sm mt-2">Keep up the healthy habits to maintain low risk.</p>
        </div>
        <div className="hidden md:block">
          <Award className="w-10 h-10 text-primary animate-float" />
        </div>
      </Card>

      {/* Analytics cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <p className="text-sm text-white/70">Mood average</p>
          <p className="text-3xl font-semibold mt-1">69</p>
          <p className="text-xs mt-2 text-emerald-300">+4 vs last week</p>
        </Card>
        <Card>
          <p className="text-sm text-white/70">Sleep (hrs)</p>
          <p className="text-3xl font-semibold mt-1">7.2</p>
          <p className="text-xs mt-2 text-emerald-300">+0.3 vs last week</p>
        </Card>
        <Card>
          <p className="text-sm text-white/70">Stress index</p>
          <p className="text-3xl font-semibold mt-1">34</p>
          <p className="text-xs mt-2 text-emerald-300">-3 vs last week</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <h3 className="font-semibold mb-2">Mood trend</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip />
                <Line type="monotone" dataKey="mood" stroke="#5b8bfa" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Emotion breakdown</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={emotions} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {emotions.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Milestones & achievements */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold mb-2">Milestones</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-emerald-400" /> 7-day reflection streak</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-emerald-400" /> 10 chat sessions completed</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-emerald-400" /> 5 insights unlocked</li>
          </ul>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2">Weekly summary</h3>
          <p className="text-white/70 text-sm">
            Overall mood improved with more consistent sleep. Stress dips mid-week after routines.
          </p>
          <div className="mt-3">
            <div className="text-xs mb-1">Goals</div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "64%" }} />
            </div>
          </div>
        </Card>
      </div>

      {/* Insights */}
      <Card>
        <h3 className="font-semibold mb-2">Insights</h3>
        <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
          <li>Evening walks correlate with improved next-day mood.</li>
          <li>Short journaling before bed increases sleep quality.</li>
          <li>Morning breathing exercises reduce stress spikes.</li>
        </ul>
      </Card>
    </main>
  );
}
