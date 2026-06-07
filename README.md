# AI & Machine Learning Engineer Portfolio

A highly interactive, visually striking personal portfolio website for Gopikrishna S, a Machine Learning Engineer and Full Stack Developer. This portfolio showcases projects, technical skills, and professional experience with advanced animations and a sci-fi, glassmorphic aesthetic.

## 🚀 Live Demo

This project is built to run in the Google AI Studio Preview environment.

## ✨ Features

- **Hero Section:** Features a dynamic role-typing animation, glowing orbital UI elements, and a custom gradient aesthetic.
- **Interactive Tech Stack:** An animated grid showcasing a comprehensive toolkit categorized by function (Languages, ML/AI, Databases, DevOps, Design, Web3, and advanced AI models like Antigravity, Gemini, LLama, etc.).
- **Project Showcase:** A detailed projects section with glassmorphic cards. Clicking "View Details" opens a comprehensive modal revealing problem statements, solutions, key features, workflows, and tech stacks for each project.
- **Projects Highlighted:**
  - **Uzhavan AI:** AI-driven intelligent farming assistant.
  - **Uzhavan Bazaar:** Direct digital farmer-to-customer marketplace.
  - **EchoLive:** AI-powered multilingual real-time communication platform.
  - **SecureLand:** AI-powered property intelligence and land protection.
  - **Mooniq:** Real-Time Meme Coin and Crypto Social Intelligence Platform.
  - **Bioxen:** AI-powered biomedical clean-room monitoring system.
- **Responsive Design:** Fully responsive desktop-first precision with mobile-first code using Tailwind CSS.
- **Advanced Animations:** Smooth scroll effects, floating elements, mesh-grid backgrounds, and spring animations powered by Framer Motion.

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with custom utility classes and PostCSS)
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React, Simple Icons (via CDN)
- **Text Effects:** `react-type-animation`
- **Build Tool:** Vite

## 🎨 Design Philosophy

This portfolio is designed with a "sci-fi / deep tech" mood. 
- **Colors:** Deep dark cosmic backgrounds (`#07070a`, `#0b0b0f`) paired with a vibrant brand orange (`#ff6a00`).
- **Textures:** Glassmorphism UI (frosted glass effects), glowing borders, radial gradients, and custom mesh/neural grid backgrounds.
- **Typography:** Uses standard sans and display fonts imported via Google Fonts for a clean, editorial look.

## 📦 Local Development

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 File Structure Highlights

- `/src/App.tsx`: Main application component containing all sections (Hero, Stats, About, Approach, Tech Stack, Projects, Footer) and the Modal logic.
- `/src/index.css`: Global styles, custom Tailwind `@layer` directives, theme variables, and keyframe animations.
- `/src/main.tsx`: React entry point.
- `tailwind.config.js` / `postcss.config.js`: Styling configuration.
