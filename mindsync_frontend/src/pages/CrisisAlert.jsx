import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

// PUBLIC_INTERFACE
export default function CrisisAlertPage() {
  /** Real-time notification demo and emergency pop-up UI. */
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("Moderate");

  return (
    <div className="mx-auto max-w-4xl p-4 md:p-6 space-y-4">
      <h1 className="font-poppins text-3xl">Crisis Alerts</h1>
      <Card className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute inline-flex h-6 w-6 rounded-full bg-rose-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-6 w-6 bg-rose-500"></span>
          </div>
          <div>
            <p className="font-medium">Emergency Button</p>
            <p className="text-white/70 text-sm">Get immediate support. Severity: {severity}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            aria-label="Select severity"
            className="rounded-xl bg-white/5 border border-white/15 px-3 py-2"
            onChange={(e) => setSeverity(e.target.value)}
            value={severity}
          >
            <option>Mild</option>
            <option>Moderate</option>
            <option>Severe</option>
            <option>Critical</option>
          </select>
          <Button onClick={() => setOpen(true)} className="shadow-glow">Trigger alert</Button>
        </div>
      </Card>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              className="glass neo max-w-md w-full p-6"
            >
              <h2 className="font-poppins text-xl">Emergency in progress</h2>
              <p className="text-white/70 mt-1">A support specialist has been notified. Keep this window open.</p>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
                <Button onClick={() => setOpen(false)}>Okay</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
