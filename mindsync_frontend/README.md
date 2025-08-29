# MindSync Frontend (React + Tailwind + Framer Motion + Recharts)

A modern, calming, accessible SPA implementing:
- Role-based authentication (User, Therapist, Admin) with frontend-only mock auth
- Animated login/register
- Emotion Capture, Voice Analyzer, Face Recognition preview
- Dashboard with mood trends (Recharts), alert banner, emoji emotion tracker, animated stats, affirmation, timeline, checklist
- Progress analytics with risk assessment, multi-charts (mood/stress lines, emotion pie), milestones, achievements, weekly summary, insights
- Chat with AI intro, sentiment panel, responsive bubbles with timestamps, emoji/voice/camera/send controls
- Account with avatar, stats, tabs (Profile, Preferences, Privacy, Data) and editable forms/toggles
- Crisis Alerts and Video UI scaffolds
- Extras: AI tips carousel, Soundscapes panel (ambient player)
- Glassmorphism + neumorphism styling, light/dark theme toggle, Inter/Poppins fonts
- WCAG 2.1 focused components with keyboard support and aria attributes

## Getting Started (Frontend-only demo)

1) Install dependencies
   npm install

2) Start the app (no .env or API keys required)
   npm start

The app runs at http://localhost:3000

## Tech Stack
- React 18, react-router v6
- TailwindCSS 3, @tailwindcss/forms/typography
- Framer Motion for animations
- Recharts (analytics)
- class-variance-authority, lucide-react

## Pages
- Home (landing)
- Auth (login/register)
- Dashboard (overview, charts, tips, checklist)
- Progress (risk, charts, milestones, insights)
- Account (profile/preferences/privacy/data)
- EmotionCapture, VoiceAnalyzer, FaceRecognition
- Chat, VideoCall
- CrisisAlert, Settings, Admin (demo), Unauthorized, NotFound

## Accessibility
- Skip link, focus-visible rings, aria-labels on controls
- Keyboard-accessible menus and toggles
- Reduced motion friendliness (animations are short and non-blocking)
- High contrast glass surfaces with readable tooltips

## Notes
- This is a frontend-only demo; data is mocked in-memory/localStorage and not persisted securely.
- Replace mock auth with your backend or provider as needed.
- Media features (camera/mic) require browser permissions and may not function in restricted environments.
