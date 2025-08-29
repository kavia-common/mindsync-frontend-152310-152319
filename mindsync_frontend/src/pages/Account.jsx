import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

// PUBLIC_INTERFACE
export default function AccountPage() {
  /** Account page with avatar, stats, and tabbed editable sections. */
  const [tab, setTab] = useState("Profile");
  const [profile, setProfile] = useState({ name: "", email: "", bio: "" });
  const [prefs, setPrefs] = useState({ theme: "system", font: "inter" });
  const [privacy, setPrivacy] = useState({ shareInsights: true, tracking: false });
  const [data, setData] = useState({ exportReady: false });

  const tabs = ["Profile", "Preferences", "Privacy", "Data"];

  return (
    <main id="main" className="mx-auto max-w-5xl p-4 md:p-6 space-y-6 pt-24">
      <h1 className="font-poppins text-3xl">Account</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-white/15 border border-white/10 grid place-items-center text-2xl">U</div>
          <p className="mt-2 text-white/80">User</p>
          <div className="mt-3 grid grid-cols-3 gap-2 w-full">
            {[
              { label: "Streak", value: 6 },
              { label: "Sessions", value: 12 },
              { label: "Insights", value: 5 },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/5 p-2 text-center">
                <div className="text-lg font-semibold">{s.value}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="md:col-span-2">
          <div role="tablist" aria-label="Account sections" className="flex gap-2 mb-4">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                className={`px-3 py-1.5 rounded-xl text-sm ${tab === t ? "bg-primary text-white" : "bg-white/5"}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "Profile" && (
            <div className="space-y-3" role="tabpanel">
              <div>
                <label className="text-sm">Name</label>
                <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <Input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm">Bio</label>
                <textarea
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2 text-white outline-none focus:ring-2 ring-primary/60"
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  placeholder="Tell us about you…"
                />
              </div>
              <Button>Save profile</Button>
            </div>
          )}

          {tab === "Preferences" && (
            <div className="space-y-3" role="tabpanel">
              <div>
                <label className="text-sm">Theme</label>
                <select
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2 text-white outline-none focus:ring-2 ring-primary/60"
                  value={prefs.theme}
                  onChange={(e) => setPrefs({ ...prefs, theme: e.target.value })}
                >
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Font</label>
                <select
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2 text-white outline-none focus:ring-2 ring-primary/60"
                  value={prefs.font}
                  onChange={(e) => setPrefs({ ...prefs, font: e.target.value })}
                >
                  <option value="inter">Inter</option>
                  <option value="poppins">Poppins</option>
                </select>
              </div>
              <Button>Save preferences</Button>
            </div>
          )}

          {tab === "Privacy" && (
            <div className="space-y-3" role="tabpanel">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="rounded border-white/20 bg-white/10"
                  checked={privacy.shareInsights} onChange={(e) => setPrivacy({ ...privacy, shareInsights: e.target.checked })} />
                <span>Share anonymized insights</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="rounded border-white/20 bg-white/10"
                  checked={privacy.tracking} onChange={(e) => setPrivacy({ ...privacy, tracking: e.target.checked })} />
                <span>Allow usage tracking</span>
              </label>
              <Button>Save privacy</Button>
            </div>
          )}

          {tab === "Data" && (
            <div className="space-y-3" role="tabpanel">
              <p className="text-white/70 text-sm">Manage your data exports and resets.</p>
              <div className="flex items-center gap-2">
                <Button onClick={() => setData({ exportReady: true })}>Prepare export</Button>
                <Button variant="ghost">Delete data</Button>
              </div>
              {data.exportReady && <p className="text-emerald-300 text-sm">Export ready. Check your downloads.</p>}
            </div>
          )}
        </Card>
      </div>
    </main>
  );
}
