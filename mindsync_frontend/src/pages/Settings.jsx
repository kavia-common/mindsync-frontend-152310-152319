import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

/**
 * PUBLIC_INTERFACE
 * Editable profile and privacy settings UI.
 */
export default function SettingsPage() {
  const [form, setForm] = useState({ name: "", contact: "", privacy: true });

  return (
    <main id="main" className="mx-auto max-w-3xl p-4 md:p-6 space-y-4">
      <h1 className="font-poppins text-3xl">Settings</h1>
      <Card className="space-y-4">
        <div>
          <h2 className="font-semibold">Profile</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-2">
            <div>
              <label className="text-sm">Display name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm">Contact</label>
              <Input
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="email or phone"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Privacy</h2>
          <label className="inline-flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              className="rounded border-white/20 bg-white/10"
              checked={form.privacy}
              onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
            />
            <span>Share anonymized insights to improve MindSync</span>
          </label>
        </div>

        <div className="pt-2">
          <Button>Save changes</Button>
        </div>
      </Card>
    </div>
  );
}
