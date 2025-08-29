import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Landing page with calming gradient and quick navigation. */
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(91,139,250,0.25),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(160,132,238,0.25),transparent)]" />
      <div className="mx-auto max-w-5xl p-6 text-center space-y-4">
        <h1 className="font-poppins text-4xl md:text-5xl">MindSync</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Your AI-powered companion for emotional wellbeing. Calm, modern, and accessible.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button as="a" href="/auth">Get started</Button>
          <Button as="a" href="/dashboard" variant="ghost">View Dashboard</Button>
          <Button as="a" href="/emotion" variant="ghost">Emotion Capture</Button>
        </div>
      </div>
    </div>
  );
}
