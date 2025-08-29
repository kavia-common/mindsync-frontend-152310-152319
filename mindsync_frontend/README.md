# MindSync Frontend (React + Tailwind + Framer Motion + Recharts)

A modern, calming, accessible SPA implementing:
- Role-based authentication (User, Therapist, Admin) with frontend-only mock auth
- Animated login/register
- Emotion Capture, Voice Analyzer, Face Recognition preview
- Dashboard with mood trends (Recharts)
- Crisis Alerts, Chat, Video UI scaffolds
- Glassmorphism + neumorphism styling, light/dark themes
- WCAG 2.1 focused components with keyboard support

## Getting Started (Frontend-only demo)

1) Install dependencies
   npm install

2) Start the app (no .env or API keys required)
   npm start

## Tech Stack
- React 18, react-router v6
- TailwindCSS 3, @tailwindcss/forms/typography
- Framer Motion for micro-interactions
- Recharts (analytics)
- Radix UI primitives, class-variance-authority, lucide icons

## Accessibility
- Skip links, focus rings, aria labels
- Reduced motion compatible
- Semantic landmarks (nav, section, role="dialog")

## Structure
src/
  components/
    auth/ProtectedRoute.jsx
    layout/Navbar.jsx
    ui/{button,input,card}.jsx
  lib/{auth.js}
  pages/
    {Home,Auth,Dashboard,EmotionCapture,VoiceAnalyzer,FaceRecognition,CrisisAlert,Chat,VideoCall,Settings,Unauthorized}.jsx
  App.js, index.js, index.css

## Notes
- Authentication is a mock demo stored in localStorage (not secure). Replace with your backend of choice for production.
- WebRTC and Face emotion detection are UI scaffolds; wire up signaling/ML as needed.
