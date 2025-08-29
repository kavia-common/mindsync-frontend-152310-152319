import { Button } from "../components/ui/button";

// PUBLIC_INTERFACE
export default function UnauthorizedPage() {
  /** Simple unauthorized access message with link back. */
  return (
    <main id="main" className="min-h-[60vh] grid place-items-center p-6 pt-24">
      <div className="text-center space-y-3">
        <h1 className="font-poppins text-3xl">Unauthorized</h1>
        <p className="text-white/70">You do not have access to this page.</p>
        <Button href="/">Back to Home</Button>
      </div>
    </main>
  );
}
