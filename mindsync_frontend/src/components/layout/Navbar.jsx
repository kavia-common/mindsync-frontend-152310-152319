import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "../../lib/auth";
import { Moon, Sun, MessageCircle, LineChart, Settings, ShieldCheck, Menu, X } from "lucide-react";

// PUBLIC_INTERFACE
export function Navbar({ theme, onToggleTheme }) {
  /** Fixed, glassmorphic top navbar with responsive hamburger, active highlighting, avatar, and theme toggle. */
  const { user, role, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <>
      <NavLink to="/dashboard" className="btn-ghost" onClick={() => setOpen(false)}>
        <LineChart className="w-4 h-4 mr-2" /> Dashboard
      </NavLink>
      <NavLink to="/chat" className="btn-ghost" onClick={() => setOpen(false)}>
        <MessageCircle className="w-4 h-4 mr-2" /> Chat
      </NavLink>
      <NavLink to="/settings" className="btn-ghost" onClick={() => setOpen(false)}>
        <Settings className="w-4 h-4 mr-2" /> Settings
      </NavLink>
      {role === "Admin" && (
        <NavLink to="/admin" className="btn-ghost" onClick={() => setOpen(false)}>
          <ShieldCheck className="w-4 h-4 mr-2" /> Admin
        </NavLink>
      )}
    </>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-gradient-glass backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 ring-primary/60 rounded-lg px-1">
          <div className="w-8 h-8 rounded-xl bg-primary/80 shadow-glow" aria-hidden="true"></div>
          <span className="font-poppins font-semibold text-lg">MindSync</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <NavLinks />
        </div>

        {/* Right actions */}
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
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-white/10 border border-white/10">{role}</span>
              <div className="w-8 h-8 rounded-full bg-white/20 grid place-items-center border border-white/10" aria-label="User avatar">
                {(user.displayName || "U").slice(0,1).toUpperCase()}
              </div>
              <Button onClick={logout} className="ml-1">Logout</Button>
            </div>
          ) : (
            <NavLink to="/auth" className="btn ml-1 hidden md:inline-flex">Login</NavLink>
          )}

          {/* Mobile menu toggle */}
          <Button variant="ghost" className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-4 pb-3 border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="flex flex-col gap-2 pt-3">
            <NavLinks />
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{role}</span>
                <Button onClick={logout} className="ml-auto">Logout</Button>
              </div>
            ) : (
              <NavLink to="/auth" className="btn w-full" onClick={() => setOpen(false)}>Login</NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
