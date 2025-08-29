import { Button } from "../components/ui/button";

// PUBLIC_INTERFACE
export default function NotFoundPage() {
  /** 404 Not Found page with navigation back to home or dashboard. */
  return (
    <div className="min-h-[60vh] grid place-items-center p-6">
      <div className="text-center space-y-3">
        <h1 className="font-poppins text-3xl">Page not found</h1>
        <p className="text-white/70">The page you are looking for does not exist.</p>
        <div className="flex items-center justify-center gap-2">
          <Button as="a" href="/">Go Home</Button>
          <Button as="a" href="/dashboard" variant="ghost">Dashboard</Button>
        </div>
      </div>
    </div>
  );
}
