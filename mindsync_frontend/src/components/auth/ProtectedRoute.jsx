import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../lib/auth";

// PUBLIC_INTERFACE
export function ProtectedRoute({ roles }) {
  /** Guarded route that checks authentication and role access; redirects to /auth if not allowed. */
  const { user, role, loading } = useAuth();
  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!user) return <Navigate to="/auth" replace />;
  if (roles && roles.length > 0 && !roles.includes(role)) return <Navigate to="/unauthorized" replace />;
  return <Outlet />;
}
