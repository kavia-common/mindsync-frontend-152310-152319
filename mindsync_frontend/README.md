# MindSync Frontend (React + Tailwind + Framer Motion + Firebase + Recharts)

A modern, calming, accessible SPA implementing:
- Role-based authentication (User, Therapist, Admin) via Firebase Auth
- Animated login/register
- Emotion Capture, Voice Analyzer, Face Recognition preview
- Dashboard with mood trends (Recharts)
- Crisis Alerts, Chat, Video UI scaffolds
- Glassmorphism + neumorphism styling, light/dark themes
- WCAG 2.1 focused components with keyboard support

## Getting Started

1) Install dependencies
   npm install

2) Configure environment
   Copy .env.example to .env and fill Firebase credentials:
   - REACT_APP_FIREBASE_API_KEY
   - REACT_APP_FIREBASE_AUTH_DOMAIN
   - REACT_APP_FIREBASE_PROJECT_ID
   - REACT_APP_FIREBASE_STORAGE_BUCKET
   - REACT_APP_FIREBASE_MESSAGING_SENDER_ID
   - REACT_APP_FIREBASE_APP_ID
   Optional:
   - REACT_APP_SITE_URL
   - REACT_APP_DEFAULT_ROLE (User | Therapist | Admin)

3) Start the app
   npm start

## Tech Stack
- React 18, react-router v6
- TailwindCSS 3, @tailwindcss/forms/typography
- Framer Motion for micro-interactions
- Firebase Auth (email/password)
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
  lib/{firebase.js,auth.js}
  pages/
    {Home,Auth,Dashboard,EmotionCapture,VoiceAnalyzer,FaceRecognition,CrisisAlert,Chat,VideoCall,Settings,Unauthorized}.jsx
  App.js, index.js, index.css

## Notes
- Role persistence is stored in localStorage for demo. Integrate with a backend/Firestore for production.
- WebRTC and Face emotion detection are UI scaffolds; wire up signaling/ML as needed.
