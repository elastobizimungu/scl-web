import { useState } from "react";
import "./pages.css";

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    weeklyDigest: false,
  });

  const toggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="page">
      <h1>Settings</h1>
      <p>Manage your preferences.</p>

      <div className="switch-row">
        <span>Email notifications</span>
        <input
          type="checkbox"
          checked={settings.notifications}
          onChange={() => toggle("notifications")}
        />
      </div>

      <div className="switch-row">
        <span>Dark mode</span>
        <input
          type="checkbox"
          checked={settings.darkMode}
          onChange={() => toggle("darkMode")}
        />
      </div>

      <div className="switch-row">
        <span>Weekly digest</span>
        <input
          type="checkbox"
          checked={settings.weeklyDigest}
          onChange={() => toggle("weeklyDigest")}
        />
      </div>
    </section>
  );
}