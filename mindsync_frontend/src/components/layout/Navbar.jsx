import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "../../lib/auth";
import { Moon, Sun, MessageCircle, LineChart, Settings, ShieldCheck } from "lucide-react";

// PUBLIC_INTERFACE
export function Navbar({ theme, onToggleTheme }) {
  /** Top navigation bar with theme toggle and role-aware links. */
  const { user, role, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 ring-primary/60 rounded-lg px-1">
          <div className="w-8 h-8 rounded-xl bg-primary/80 shadow-glow"></div>
          <span className="font-poppins font-semibold text-lg">MindSync</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <Button as="a" variant="ghost" className="!bg-transparent" href="/dashboard">
            <LineChart className="w-4 h-4 mr-2" /> Dashboard
          </Button>
          <Button as="a" variant="ghost" className="!bg-transparent" href="/chat">
            <MessageCircle className="w-4 h-4 mr-2" /> Chat
          </Button>
          <Button as="a" variant="ghost" className="!bg-transparent" href="/settings">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </Button>
          {role === "Admin" && (
            <Button as="a" variant="ghost" className="!bg-transparent" href="/admin">
              <ShieldCheck className="w-4 h-4 mr-2" /> Admin
            </Button>
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
            <Button onClick={logout} className="ml-1">Logout</Button>
          ) : (
            <Button as="a" href="/auth" className="ml-1">Login</Button>
          )}
        </div>
      </div>
    </nav>
  );
}
