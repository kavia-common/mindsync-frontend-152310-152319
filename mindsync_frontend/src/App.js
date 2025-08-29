import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import { AuthProvider } from "./lib/auth";
import { Navbar } from "./components/layout/Navbar";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";
import EmotionCapturePage from "./pages/EmotionCapture";
import VoiceAnalyzerPage from "./pages/VoiceAnalyzer";
import FaceRecognitionPage from "./pages/FaceRecognition";
import CrisisAlertPage from "./pages/CrisisAlert";
import ChatPage from "./pages/Chat";
import VideoCallPage from "./pages/VideoCall";
import SettingsPage from "./pages/Settings";
import UnauthorizedPage from "./pages/Unauthorized";
import AdminPage from "./pages/Admin";
import NotFoundPage from "./pages/NotFound";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

// PUBLIC_INTERFACE
export default function App() {
  /** App root with router, theme handling, and role-protected routes. */
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route element={<ProtectedRoute roles={["User", "Therapist", "Admin"]} />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/emotion" element={<EmotionCapturePage />} />
            <Route path="/voice" element={<VoiceAnalyzerPage />} />
            <Route path="/face" element={<FaceRecognitionPage />} />
            <Route path="/crisis" element={<CrisisAlertPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/video" element={<VideoCallPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route element={<ProtectedRoute roles={["Admin"]} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
