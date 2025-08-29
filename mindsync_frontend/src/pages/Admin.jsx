import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useAuth } from "../lib/auth";

// PUBLIC_INTERFACE
export default function AdminPage() {
  /** Admin-only dashboard mock with role management demo and system stats. */
  const { role, setRole } = useAuth();

  const stats = [
    { label: "Active Users", value: 124 },
    { label: "Therapists Online", value: 8 },
    { label: "Open Sessions", value: 21 },
  ];

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-6 space-y-6">
      <h1 className="font-poppins text-3xl">Admin Console</h1>
      <p className="text-white/70">Role-based access demo. Current role: <span className="font-medium">{role}</span></p>

      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="flex flex-col items-start justify-between">
            <div>
              <p className="text-white/70 text-sm">{s.label}</p>
              <p className="text-2xl font-semibold mt-1">{s.value}</p>
            </div>
            <Button variant="ghost" className="mt-4">View details</Button>
          </Card>
        ))}
      </div>

      <Card className="space-y-3">
        <h2 className="font-semibold">Quick Role Switch (Demo)</h2>
        <p className="text-white/70 text-sm">
          Use this to preview how the app behaves for different roles without logging out.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setRole("User")}>Switch to User</Button>
          <Button onClick={() => setRole("Therapist")} variant="ghost">Switch to Therapist</Button>
          <Button onClick={() => setRole("Admin")} variant="ghost">Switch to Admin</Button>
        </div>
      </Card>
    </div>
  );
}
