import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "../../lib/auth";
import { Moon, Sun, MessageCircle, LineChart, Settings, ShieldCheck } from "lucide-react";

// PUBLIC_INTERFACE
export function Navbar({ theme, onToggleTheme }) {
  /** Top navigation bar with theme toggle and role-aware links. */
  const { user, role, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10" aria-label="Primary">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 ring-primary/60 rounded-lg px-1">
          <div className="w-8 h-8 rounded-xl bg-primary/80 shadow-glow" aria-hidden="true"></div>
          <span className="font-poppins font-semibold text-lg">MindSync</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/dashboard" className="btn-ghost !bg-transparent">
            <LineChart className="w-4 h-4 mr-2" /> Dashboard
          </NavLink>
          <NavLink to="/chat" className="btn-ghost !bg-transparent">
            <MessageCircle className="w-4 h-4 mr-2" /> Chat
          </NavLink>
          <NavLink to="/settings" className="btn-ghost !bg-transparent">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </NavLink>
          {role === "Admin" && (
            <NavLink to="/admin" className="btn-ghost !bg-transparent">
              <ShieldCheck className="w-4 h-4 mr-2" /> Admin
            </NavLink>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            onClick={onToggleTheme}
            className="rounded-full"
            title="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-white/10 border border-white/10">{role}</span>
              <Button onClick={logout} className="ml-1">Logout</Button>
            </div>
          ) : (
            <NavLink to="/auth" className="btn ml-1">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
