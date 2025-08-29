import { useMemo } from "react";
import { motion } from "framer-motion";
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
} from "recharts";

/**
 * PUBLIC_INTERFACE
 * Dashboard with progress tracking, mood trends, and recommendations.
 */
export default function DashboardPage() {
  const data = useMemo(
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

  return (
    <main id="main" className="mx-auto max-w-7xl p-4 md:p-6 space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-poppins text-3xl">Welcome back</h1>
        <p className="text-white/70">Your weekly overview at a glance.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/10" />
          <div className="relative">
            <h3 className="font-semibold mb-2">Mood trend</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
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
                  <Area
                    type="monotone"
                    dataKey="mood"
                    stroke="#5b8bfa"
                    fillOpacity={1}
                    fill="url(#mood)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold">Progress</h3>
            <p className="text-white/70 mt-1">
              You're on a 6-day reflection streak. Keep going!
            </p>
          </div>
          <Button className="mt-4">View goals</Button>
        </Card>

        <Card className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold">Recommendations</h3>
            <ul className="mt-2 space-y-1 text-white/80 list-disc list-inside">
              <li>5-minute breathing exercise</li>
              <li>Journaling prompt: “I feel most calm when...”</li>
            </ul>
          </div>
          <Button className="mt-4" variant="ghost">
            Explore activities
          </Button>
        </Card>
      </div>
    </div>
  );
}
