/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Cpu, 
  Eye, 
  Database, 
  Activity, 
  Sprout, 
  ShieldCheck, 
  Flame, 
  Users, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Download, 
  Mail,
  Github,
  Award,
  BarChart3,
  Clock,
  CheckCircle2,
  X
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---

const EXPERTISE = [
  {
    title: "AI & Machine Learning",
    desc: "Expertise in building models, deep learning basics, and advanced data analysis.",
    icon: Brain,
  },
  {
    title: "Blockchain & Security",
    desc: "Securing systems with decentralized records and post-quantum cryptography.",
    icon: ShieldCheck,
  },
  {
    title: "Agentic AI",
    desc: "Developing autonomous AI agents that solve complex real-world tasks.",
    icon: Cpu,
  },
  {
    title: "Full Stack Development",
    desc: "Building responsive and scalable web applications from scratch.",
    icon: Database,
  },
  {
    title: "IoT Intelligence",
    desc: "Integrating AI with hardware for smart monitoring and hazard detection.",
    icon: Sprout,
  },
  {
    title: "Real-Time Systems",
    desc: "Developing live communication platforms with millisecond latency.",
    icon: Activity,
  }
];

const EDUCATION = [
  {
    degree: "B.E. Computer Science (AI & ML)",
    school: "Prathyusha Engineering College",
    period: "2023 – 2027",
    score: "CGPA: 8.71"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "State Board",
    period: "2021 – 2023",
    score: "80%"
  }
];

export interface ProjectItem {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  image?: string;
  details?: {
    overview: string;
    problem?: string[];
    solution?: string;
    features?: { title: string; items: string[] }[];
    workflow?: string;
    techStack?: string[];
    innovation?: string;
    impact?: string[];
  };
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Uzhavan AI",
    category: "Agriculture AI",
    desc: "AI-driven intelligent farming assistant for crop recommendation and smart farming support.",
    tags: ["Machine Learning", "NLP", "Flask", "Python"],
    image: "https://www.image2url.com/r2/default/images/1777112094688-dea72660-ec86-4e18-8a09-2d963a8b7748.png",
    details: {
      overview: "Uzhavan AI is an AI-driven intelligent farming assistant designed to empower farmers with real-time crop intelligence, predictive recommendations, and multilingual smart assistance.",
      problem: [
        "Middlemen exploitation",
        "Lack of scientific crop guidance",
        "Delayed weather/risk alerts",
        "Crop disease losses",
        "Poor access to verified information"
      ],
      solution: "Uzhavan AI transforms agriculture challenges into intelligent decisions through AI crop advisory, disease diagnosis support, weather and market intelligence, and voice-enabled assistance.",
      features: [
        { title: "Smart Advisory", items: ["Personalized crop recommendations", "Fertilizer guidance", "Location-based suggestions"] },
        { title: "AI Crop Health", items: ["Plant disease detection", "Remedy recommendations", "Early risk alerts"] },
        { title: "Intelligence Layer", items: ["Weather predictions", "Market insights", "Crop price forecasting"] },
        { title: "Accessibility", items: ["Voice support in regional languages", "Low-data optimization", "WhatsApp / SMS alerts"] }
      ],
      workflow: "Farmer Input ➔ Crop/Soil/Weather Data ➔ AI Recommendation Engine ➔ Disease & Risk Prediction ➔ Smart Advisory + Alerts",
      techStack: ["Python", "Machine Learning", "Flask", "Data Analytics", "NLP (Voice Support)"],
      innovation: "Multilingual rural AI assistant, Voice-enabled agriculture intelligence, AI-powered farming support ecosystem",
      impact: ["Smarter farming decisions", "Better crop planning", "Increased farmer support access"]
    }
  },
  {
    title: "Uzhavan Bazaar",
    category: "Agri-Tech Platform",
    desc: "A direct digital farmer-to-customer marketplace eliminating middlemen and improving agricultural trade.",
    tags: ["Full Stack", "Agri-Tech", "E-commerce"],
    image: "https://www.image2url.com/r2/default/images/1777112150697-746a4c86-caf6-4e0b-a4e5-ce3b03ce8bc7.png",
    details: {
      overview: "A direct digital farmer-to-customer marketplace eliminating middlemen and improving agricultural trade.",
      problem: [
        "Low farmer profits",
        "Lack of direct market access",
        "Pricing inefficiencies",
        "Distribution gaps"
      ],
      features: [
        { title: "Core Features", items: ["Farmer listing platform", "Buyer marketplace", "AI crop quality grading", "Live mandi price updates", "Secure payments", "Escrow transactions", "Logistics support"] }
      ],
      workflow: "Farmer Listing ➔ Buyer Discovery ➔ Match & Negotiation ➔ Payment ➔ Delivery ➔ Feedback",
      techStack: ["Full Stack Development", "Python", "Database Systems", "Web Technologies"],
      impact: ["Better farmer margins", "Transparent agri-commerce", "Scalable rural marketplace"]
    }
  },
  {
    title: "EchoLive",
    category: "AI Communication",
    desc: "AI-powered multilingual real-time communication and translation platform.",
    tags: ["React", "WebRTC", "Whisper", "FastAPI"],
    image: "https://www.image2url.com/r2/default/images/1777112444624-afe9e95f-359b-4f06-a576-3f4b5541c9ca.png",
    details: {
      overview: "AI-powered multilingual real-time communication and translation platform.",
      problem: [
        "Live events lack low-latency translation",
        "Real-time captioning missing",
        "Inaccessible multilingual delivery"
      ],
      features: [
        { title: "Core Capabilities", items: ["Speech-to-text", "AI dubbing", "Original voice retention", "Lip-sync translation", "Sign language overlays", "AI chatbot support", "Auto PDF notes"] }
      ],
      workflow: "Video Input ➔ Whisper ASR ➔ Speaker Diarization ➔ NLLB Translation ➔ Coqui XTTS ➔ Wav2Lip ➔ Dubbed Output",
      techStack: ["React", "Tailwind", "WebRTC", "Whisper", "Pyannote", "NLLB-200", "Coqui XTTS", "Wav2Lip", "FastAPI", "Docker", "Kubernetes"],
      innovation: "AI multilingual live communication ecosystem."
    }
  },
  {
    title: "SecureLand",
    category: "Blockchain & Security",
    desc: "AI-powered property intelligence and land protection ecosystem.",
    tags: ["Blockchain", "AI", "Geospatial", "Django"],
    image: "https://www.image2url.com/r2/default/images/1777112530383-9b705a0b-3ef9-4f64-8ac0-64946c29aaf9.png",
    details: {
      overview: "AI-powered property intelligence and land protection ecosystem solving land fraud and boundary disputes.",
      problem: [
        "Land fraud",
        "Encroachments",
        "Ownership disputes",
        "Slow verification",
        "Unsafe property investment"
      ],
      features: [
        { title: "Digital Land Twin", items: ["Verified digital copy of every property."] },
        { title: "Satellite Monitoring", items: ["Real-time boundary surveillance."] },
        { title: "AI Fraud Detection", items: ["Fraud risk detection", "Dispute probability", "Suspicious ownership patterns"] },
        { title: "Construction Stability Analyzer", items: ["Flood risk evaluation", "Soil stability assessment", "Earthquake safety"] },
        { title: "Water Resource Intelligence", items: ["Groundwater analysis", "Borewell prediction", "Water viability"] },
        { title: "Property Marketplace", items: ["Secure buy/sell/rent ecosystem."] }
      ],
      workflow: "OCR ➔ Spatial Mapping ➔ Predictive Models ➔ Fraud Intelligence",
      techStack: ["React", "Django REST", "Firebase", "PostgreSQL + PostGIS", "Machine Learning (Random Forest, XGBoost, Scikit-learn)", "Blockchain"],
      innovation: "Geospatial AI + Digital Land Twin platform."
    }
  },
  {
    title: "Mooniq",
    category: "Crypto Intelligence",
    desc: "Real-Time Meme Coin and Crypto Social Intelligence Platform.",
    tags: ["Web3", "Next.js", "FastAPI", "ML"],
    image: "https://www.image2url.com/r2/default/images/1777112272586-24e548de-0551-4d5f-bac6-81769922a5cc.png",
    details: {
      overview: "Real-Time Meme Coin and Crypto Social Intelligence Platform.",
      problem: [
        "Retail traders miss early trend opportunities.",
        "Existing tools only offer raw sentiment, no hype phase prediction, and no actionable intelligence."
      ],
      solution: "Mooniq fuses social signals, market data, machine learning, and actionable alerts.",
      features: [
        { title: "Key Modules", items: ["Meme coin trend prediction", "Social sentiment intelligence", "Hype phase detection", "WhatsApp trading alerts", "Streamlit dashboards"] }
      ],
      workflow: "Inputs: X API, Reddit, CoinGecko, Google Trends",
      techStack: ["Next.js", "React", "Tailwind", "Three.js", "Python", "FastAPI", "Firebase", "Sentiment Models", "Logistic Regression", "Random Forest", "Deep Learning"],
      innovation: "Web3 + Machine Learning intelligence ecosystem."
    }
  },
  {
    title: "Bioxen",
    category: "Medical AI",
    desc: "AI-powered biomedical clean-room monitoring system.",
    tags: ["Computer Vision", "IoT", "Blockchain", "LSTM"],
    image: "https://www.image2url.com/r2/default/images/1777112217931-c11e0c56-886f-4b9a-b418-e9c2cdc522df.png",
    details: {
      overview: "AI-powered biomedical clean-room monitoring system.",
      problem: [
        "Continuous monitoring needed for pharmaceutical clean rooms",
        "Compliance assurance requires strict tracking",
        "Need for early anomaly detection"
      ],
      features: [
        { title: "Monitoring", items: ["Temperature monitoring", "Humidity tracking", "Differential pressure sensing", "PM2.5 monitoring", "HVAC monitoring"] },
        { title: "AI Detection", items: ["Fire & smoke AI detection", "Anomaly alerts", "LSTM prediction models", "YOLO / CNN detection", "Computer vision monitoring"] }
      ],
      techStack: ["React", "Firebase", "Machine Learning", "Computer Vision", "Blockchain Audit Trail"],
      impact: ["Compliance safety", "Operational efficiency", "Reduced risk", "Intelligent monitoring"]
    }
  }
];

const ACHIEVEMENTS = [
  "Best Team Winner — Thozhil Hackathon",
  "Best Team Winner — Codeathon 4.0",
  "2nd Prize — SAE Drone Development Competition",
  "Best Application — PALS INNOWAH",
  "1st Prize — Vel Tech Project Expo",
  "Multiple Paper Presentation Winners",
  "Golden Book of World Records Holder (Yoga)"
];

const INTERNSHIPS = [
  {
    role: "Machine Learning Intern",
    company: "ReTech Solutions",
    period: "Internship",
  },
  {
    role: "Python Full Stack Intern",
    company: "Femtosoft Technology",
    period: "Internship",
  },
  {
    role: "MySQL Intern",
    company: "NIELIT",
    period: "6 Weeks",
  }
];

const CERTIFICATIONS = [
  "NPTEL Elite — Introduction to IoT",
  "NPTEL Elite — Joy of Computing",
  "GUVI Python Basics",
  "Simplilearn Machine Learning",
  "Agentic AI Certification"
];

const TECH_ROWS = [
  [
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "TypeScript", slug: "typescript", color: "3178C6" },
    { name: "C", slug: "c", color: "A8B9CC" },
    { name: "HTML", slug: "html5", color: "E34F26" },
    { name: "CSS", slug: "css3", color: "1572B6" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "000000" },
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "Express", slug: "express", color: "000000" }
  ],
  [
    { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
    { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },
    { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
    { name: "OpenCV", slug: "opencv", color: "5C3EE8" },
    { name: "NumPy", slug: "numpy", color: "013243" },
    { name: "Pandas", slug: "pandas", color: "150458" },
    { name: "Streamlit", slug: "streamlit", color: "FF4B4B" },
    { name: "FastAPI", slug: "fastapi", color: "05998B" },
    { name: "Flask", slug: "flask", color: "000000" },
    { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" }
  ],
  [
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "Firebase", slug: "firebase", color: "FFCA28" },
    { name: "Supabase", slug: "supabase", color: "3ECF8E" },
    { name: "Redis", slug: "redis", color: "DC382D" },
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "Vercel", slug: "vercel", color: "000000" },
    { name: "Linux", slug: "linux", color: "FCC624" }
  ],
  [
    { name: "Git", slug: "git", color: "F05032" },
    { name: "GitHub", slug: "github", color: "181717" },
    { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
    { name: "Jupyter", slug: "jupyter", color: "F37626" },
    { name: "Postman", slug: "postman", color: "FF6C37" },
    { name: "Figma", slug: "figma", color: "F24E1E" },
    { name: "Canva", slug: "canva", color: "00C4CC" },
    { name: "CapCut", slug: "capcut", color: "000000" }
  ],
  [
    { name: "Hugging Face", slug: "huggingface", color: "FFD21E" },
    { name: "Bash", slug: "gnubash", color: "4EAA25" },
    { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
    { name: "Azure", slug: "microsoftazure", color: "0078D4" },
    { name: "SolidWorks", slug: "solidworks", color: "FF0000" },
    { name: "Wokwi", slug: "microchip", color: "003366" },
    { name: "IOT", slug: "arduino", color: "00979D" }
  ],
  [
    { name: "Gemini", slug: "googlegemini", color: "8E75C2" },
    { name: "Claude", slug: "anthropic", color: "D97757" },
    { name: "Llama", slug: "meta", color: "0467DF" },
    { name: "Whisper", slug: "openai", color: "412991" },
    { name: "OpenRouter", slug: "cloudlayer", color: "4F46E5" },
    { name: "Mediapipe", slug: "google", color: "4285F4" },
    { name: "Antigravity", slug: "astral", color: "FFFFFF" }
  ]
];

interface TechLogoProps {
  name: string;
  slug: string;
  color: string;
  index: number;
}

const TechLogo: React.FC<TechLogoProps> = ({ name, slug, color, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.02,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative flex flex-col items-center justify-center p-3 sm:p-4 tech-card bg-white/[0.02] border-white/10 hover:border-brand-orange/40 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]"
  >
    <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-2">
      <img 
        src={`https://cdn.simpleicons.org/${slug}/white`} 
        alt={name}
        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,106,0,0.6)] transition-all"
        referrerPolicy="no-referrer"
      />
    </div>
    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors text-center px-1">
      {name}
    </span>
    
    <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 rounded-2xl blur-xl transition-all -z-10" />
  </motion.div>
);

const STATS = [
  { label: "Models Developed", value: 7, suffix: "+" },
  { label: "Datasets Processed", value: 10000, suffix: "+" },
  { label: "Accuracy %", value: 90, suffix: "+" },
  { label: "Training Hours", value: 500, suffix: "+" }
];

// --- Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16 text-center relative px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl -z-10"
    />
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
      className="h-1.5 orange-gradient-bg mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(255,106,0,0.5)]"
    />
  </div>
);

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <motion.div 
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
      className="text-center p-8 glass-card border-white/5 group hover:border-brand-orange/30 transition-all duration-500"
    >
      <div className="mb-4 flex justify-center">
        <div className="w-12 h-12 rounded-full orange-gradient-bg flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <Activity className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-black orange-gradient-text mb-3">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">
        {label}
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: ProjectItem | null, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {project && project.details && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card bg-[#0b0b0f]/95 border-brand-orange/20 shadow-2xl overflow-hidden scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between items-start p-6 border-b border-white/10 bg-[#0b0b0f]/80 backdrop-blur-xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                <p className="text-brand-orange text-sm uppercase tracking-widest font-semibold mt-1">{project.category}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors shrink-0 ml-4"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Overview */}
              <section>
                <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.details.overview}</p>
              </section>

              {/* Problem & Solution */}
              {(project.details.problem || project.details.solution) && (
                <div className="grid md:grid-cols-2 gap-6">
                  {project.details.problem && (
                    <section className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                      <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                         Problem Statement
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                        {project.details.problem.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {project.details.solution && (
                    <section className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                         Solution
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.details.solution}</p>
                    </section>
                  )}
                </div>
              )}

              {/* Features */}
              {project.details.features && (
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.details.features.map((feature, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-orange/30 transition-colors">
                        <h4 className="text-brand-orange font-medium mb-2">{feature.title}</h4>
                        <ul className="list-disc pl-4 space-y-1 text-gray-400 text-sm">
                          {feature.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Workflow & Tech Stack */}
              <div className="grid md:grid-cols-2 gap-8">
                {project.details.workflow && (
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3">Workflow / Pipeline</h3>
                    <div className="p-5 rounded-xl bg-black/40 border border-white/5 text-gray-300 text-sm font-mono whitespace-pre-wrap leading-relaxed">
                      {project.details.workflow.replace(/➔/g, '\n↓\n')}
                    </div>
                  </section>
                )}
                {project.details.techStack && (
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.details.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Innovation & Impact */}
              {(project.details.innovation || project.details.impact) && (
                <div className="grid md:grid-cols-2 gap-6">
                   {project.details.innovation && (
                    <section className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">Innovation</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.details.innovation}</p>
                    </section>
                  )}
                  {project.details.impact && (
                    <section className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/10">
                      <h3 className="text-lg font-semibold text-purple-400 mb-3">Impact & Benefits</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                        {project.details.impact.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen neural-pattern overflow-x-hidden">
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-brand-bg/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl orange-gradient-bg flex items-center justify-center shadow-lg shadow-brand-orange/20 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="uppercase">Gopikrishna <span className="orange-gradient-text">S</span></span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="hover:text-brand-orange transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://www.linkedin.com/in/gopikrishna-s-022856302" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card hover:text-brand-orange"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-400 p-2 glass-card"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-bg/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6 text-center">
                {navLinks.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-gray-400 hover:text-brand-orange py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex justify-center gap-6 pt-4 border-t border-white/5">
                  <a href="https://www.linkedin.com/in/gopikrishna-s-022856302" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-orange">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 xs:px-12 lg:px-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-[300px] xs:w-[400px] h-[300px] xs:h-[400px] bg-brand-orange/10 rounded-full blur-[80px] xs:blur-[100px] -z-10" />
        <div className="absolute top-1/2 right-0 w-[400px] xs:w-[500px] h-[400px] xs:h-[500px] bg-brand-orange/5 rounded-full blur-[100px] xs:blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] xs:text-xs font-bold uppercase tracking-widest mb-6 xs:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Hi, I'm Gopikrishna S
            </motion.div>
            
            <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter flex flex-col">
              <span>AI & ML</span>
              <span className="orange-gradient-text uppercase">Engineer</span>
            </h1>

            <div className="flex flex-col gap-6 mb-10">
              <div className="h-8 text-xl md:text-2xl text-brand-orange font-bold flex items-center gap-4">
                <div className="w-10 h-[2px] bg-brand-orange/40" />
                <TypeAnimation
                  sequence={[
                    'AI/ML Engineer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'Blockchain & Security',
                    2000,
                    'Agentic AI Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="text-gray-400 text-lg md:text-xl max-w-[500px] leading-relaxed font-medium">
                Designing and deploying intelligent systems that create measurable impact across Agriculture, Blockchain, and Cybersecurity.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="w-full xs:w-auto px-8 py-3.5 rounded-xl orange-gradient-bg font-bold text-white shadow-lg shadow-brand-orange/20 hover:scale-105 hover:shadow-brand-orange/30 transition-all flex items-center justify-center gap-3 group"
              >
                View ML Projects <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full xs:w-auto px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3">
                Download Resume <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 xs:w-72 xs:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Radial Glow Behind Circle */}
              <div className="absolute inset-[-100px] bg-brand-orange/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
              
              {/* Premium Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-brand-orange/50 shadow-[0_0_50px_rgba(255,106,0,0.3)] z-20 pointer-events-none" />
              
              {/* Outer Animated Ring */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[-12px] rounded-full border border-brand-orange/20 z-10 pointer-events-none"
              />

              {/* Image container */}
              <div className="relative z-10 w-full h-full rounded-full p-3 border border-brand-orange/20 overflow-hidden bg-brand-bg/40 backdrop-blur-md">
                <div className="w-full h-full rounded-full overflow-hidden bg-brand-bg relative flex items-start justify-center">
                   <img 
                    src="https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/Gemini_Generated_Image_gp5txugp5txugp5t-removebg-p-imagetourl.cloud-1771735149024-7gi56w.png" 
                    alt="Gopikrishna S" 
                    className="w-full h-full object-contain object-top scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Orbital elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-25px] border border-dashed border-brand-orange/20 rounded-full -z-10"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50px] border border-dashed border-white/5 rounded-full -z-10"
              />
              
              {/* Floating tech icons */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-5 -left-5 w-14 h-14 glass-card flex items-center justify-center z-30"
              >
                <Brain className="w-7 h-7 text-brand-orange" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-2 w-12 h-12 glass-card flex items-center justify-center z-30"
              >
                <Cpu className="w-6 h-6 text-brand-orange" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Specialized in building end-to-end AI pipelines and intelligent vision systems.">
            Core Machine Learning <span className="orange-gradient-text">Expertise</span>
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{skill.title}</h3>
                <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 xs:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative px-4"
          >
            <div className="aspect-video xs:aspect-square rounded-3xl overflow-hidden glass-card p-4">
              <img 
                src="https://www.image2url.com/r2/default/images/1777112963896-edd50c7d-b8ed-4e56-a1c6-0f13763f2929.png" 
                alt="AI Visualization" 
                className="w-full h-full object-cover rounded-2xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 border-brand-orange/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full orange-gradient-bg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">8.71</div>
                  <div className="text-xs text-gray-400 uppercase font-bold">CGPA (B.E.)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Transforming Ideas into <br />
              <span className="orange-gradient-text">Intelligent Products</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am an AI/ML student passionate about building intelligent products across agriculture, blockchain, cybersecurity, and emerging technologies. 
              </p>
              <p>
                Experienced in innovation challenges, hackathons, internships, and research-driven development. My goal is to transform data into actionable intelligence using scalable, secure, and decentralized systems.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Blockchain Innovation', 'Agentic AI Systems', 'Agri-Tech Solutions', 'Cyber-Security'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-orange" />
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Agentic AI', 'Post-Quantum Cybersecurity', 'Intelligent Systems', 'AI for Agriculture'].map((interest) => (
                  <span key={interest} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="My academic background and continuous learning journey.">
            Academic <span className="orange-gradient-text">Background</span>
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-brand-orange font-medium mb-4">{edu.school}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 font-medium pt-4 border-t border-white/5">
                  <span>{edu.period}</span>
                  <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Hands-on experience in the industry.">
            Practical <span className="orange-gradient-text">Experience</span>
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-6">
            {INTERNSHIPS.map((intern, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group border-l-4 border-l-brand-orange"
              >
                <Clock className="w-8 h-8 text-brand-orange mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-1">{intern.role}</h3>
                <p className="text-gray-400 font-medium mb-2">{intern.company}</p>
                {intern.period && <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{intern.period}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="py-32 px-6 relative overflow-hidden bg-[#07070a] border-y border-white/5">
        {/* Advanced Aesthetic Background */}
        <div className="absolute inset-0 mesh-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,0.05),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle subtitle="A sophisticated ecosystem of tools and frameworks I've mastered to bridge the gap between complex AI research and production-ready applications.">
            Technical <span className="orange-gradient-text">Ecosystem</span>
          </SectionTitle>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {TECH_ROWS.map((row, rowIdx) => (
              <motion.div
                key={rowIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIdx * 0.1 }}
                className="flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                {row.map((item, itemIdx) => (
                  <TechLogo 
                    key={item.slug} 
                    {...item} 
                    index={itemIdx + (rowIdx * 10)} 
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="A showcase of my work in AI, Computer Vision, and Predictive Modeling.">
            Featured ML <span className="orange-gradient-text">Projects</span>
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image || `https://picsum.photos/seed/${project.title}/600/400`} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-[10px] font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">#{tag}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-sm font-bold flex items-center gap-2 hover:text-brand-orange transition-colors"
                    >
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="flex gap-3">
                      <Github className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
                      <ExternalLink className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Recognition from hackathons and certifications.">
            Awards & <span className="orange-gradient-text">Achievements</span>
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Wins */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-orange" />
                Competition Wins
              </h3>
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 glass-card border-l-2 border-l-brand-orange bg-white/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-orange mt-1 shrink-0" />
                  <span className="text-gray-300 font-medium">{ach}</span>
                </motion.div>
              ))}
            </div>

            {/* Certs */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-orange" />
                Certifications
              </h3>
              <div className="grid gap-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 glass-card bg-white/[0.02] hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-gray-400 font-medium">{cert}</span>
                    <ExternalLink className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-6 bg-brand-orange/[0.03] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <StatCounter key={i} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto glass-card p-6 xs:p-12 text-center relative">
          <div className="w-20 h-20 rounded-2xl orange-gradient-bg flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand-orange/20">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Build <span className="orange-gradient-text">Intelligent Systems</span> Together
          </h2>
          
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Available for AI / ML Projects, Blockchain Development, Research & Collaboration. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:gopikaru0090@gmail.com" 
              className="px-10 py-4 rounded-xl orange-gradient-bg font-bold text-white hover:scale-105 transition-transform"
            >
              Send Message
            </a>
            <a 
              href="https://www.linkedin.com/in/gopikrishna-s-022856302" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-xl border border-white/10 bg-white/5 font-bold text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 xs:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-8 h-8 rounded-lg orange-gradient-bg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span>Gopikrishna <span className="orange-gradient-text">S</span></span>
          </div>
          
          <div className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} | Machine Learning Engineer | All Rights Reserved
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/gopikrishna-s" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-orange transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/gopikrishna-s-022856302" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-orange transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:gopikaru0090@gmail.com" className="text-gray-500 hover:text-brand-orange transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
