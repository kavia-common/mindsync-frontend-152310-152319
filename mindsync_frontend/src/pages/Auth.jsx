import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { useAuth } from "../lib/auth";

// PUBLIC_INTERFACE
export default function AuthPage() {
  /** Animated login/register with role selection and WCAG compliant forms. */
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "User" });
  const [error, setError] = useState("");

  const switchMode = () => setMode(mode === "login" ? "register" : "login");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (mode === "login") {
        await login(form.email, form.password);
      } else {
        await register(form.name, form.email, form.password, form.role);
      }
      navigate("/dashboard", { replace: true });
    } catch (err) {
        // Normalize generic error in demo mode
        const message = typeof err?.message === "string" ? err.message : "Authentication error";
        setError(message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] grid place-items-center px-4">
      <a href="#main" className="skip-link">Skip to content</a>
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <Card className="p-6 md:p-8 glass neo">
            <h1 id="main" className="font-poppins text-2xl mb-2">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-white/70 mb-6">
              {mode === "login" ? "Sign in to continue your journey." : "Join MindSync for insights and support."}
            </p>
            <form onSubmit={onSubmit} className="space-y-4" aria-describedby={error ? "auth-error" : undefined}>
              {mode === "register" && (
                <div>
                  <label className="block text-sm mb-1">Full name</label>
                  <Input
                    required
                    name="name"
                    placeholder="Taylor Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              )}
              <div>
                <label className="block text-sm mb-1">Email</label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Password</label>
                <Input
                  required
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
              {mode === "register" && (
                <div>
                  <label className="block text-sm mb-1">Role</label>
                  <select
                    aria-label="Select role"
                    className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2 text-white outline-none focus:ring-2 ring-primary/60"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  >
                    <option value="User">User</option>
                    <option value="Therapist">Therapist</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              )}
              {error && (
                <div id="auth-error" role="alert" className="text-red-300 text-sm">
                  {error}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Button type="submit" className="flex-1">
                  {mode === "login" ? "Sign in" : "Create account"}
                </Button>
                <Button type="button" variant="ghost" onClick={switchMode} className="flex-1">
                  {mode === "login" ? "Register" : "Back to Login"}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
