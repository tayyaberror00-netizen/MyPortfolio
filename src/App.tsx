import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectDemoModal from './components/ProjectDemos'; 
import ContactForm from './components/ContactForm';
import ResumeModal from './components/ResumeModal';
import { ArrowUpRight, FileText, ChevronRight, Github, Mail, Linkedin, Sparkles } from 'lucide-react';
import { Project } from './types';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-[#030303] text-gray-100 min-h-screen relative overflow-x-hidden font-sans select-none selection:bg-purple-500/30 selection:text-white" id="portfolio-root">
      
      {/* Absolute background matrix/grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111a_1px,transparent_1px),linear-gradient(to_bottom,#11111a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Glassmorphic Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <header id="about" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 flex items-center min-h-[90vh]">
        {/* Top visual ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (Hero Content) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Glowing badges saying "AVAILABLE FOR CONTRACTS & RESEARCH" */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 font-mono text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.15)] animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                <span>Available for Contracts &amp; Research</span>
              </div>

              {/* Large bold heading */}
              <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-[1.1] max-w-xl">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-white bg-clip-text text-transparent">
                  Muhammad Tayyab Younas
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-zinc-400 text-base sm:text-xl font-sans leading-relaxed max-w-xl">
                Data Scientist &amp; Full-Stack Developer bridging the gap between advanced probability and interactive animated web UI.
              </p>

              {/* Pill-shaped CTA Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.55)] active:scale-95 cursor-pointer flex items-center gap-2 group"
                  id="hero-view-work-btn"
                >
                  <span>View My Work</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="px-6 sm:px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-full text-sm font-bold tracking-wide border border-zinc-800 hover:border-purple-500/30 transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-2"
                  id="hero-download-resume-btn"
                >
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Social Links Row */}
              <div className="flex gap-4 items-center">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-mono text-xs font-semibold cursor-pointer"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-800">|</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-mono text-xs font-semibold cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Minimal 3-column stats row */}
              <div className="pt-8 border-t border-zinc-900 max-w-xl">
                <div className="grid grid-cols-3 gap-4 text-left font-mono">
                  <div>
                    <span className="block text-xl sm:text-2xl font-black text-white">4.0 CGPA</span>
                    <span className="block text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mt-1">Academic</span>
                  </div>
                  <div className="border-l border-zinc-900 pl-4">
                    <span className="block text-xl sm:text-2xl font-black text-white">4+ Adv AI</span>
                    <span className="block text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mt-1">Research Projects</span>
                  </div>
                  <div className="border-l border-zinc-900 pl-4">
                    <span className="block text-xl sm:text-2xl font-black text-white">100%</span>
                    <span className="block text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mt-1">Dedication</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (macOS Terminal Simulation) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <Terminal />
            </div>

          </div>
        </div>
      </header>

      {/* Tech Stack & Strategy Grid */}
      <TechStack />

      {/* Experience Milestone Timeline */}
      <Timeline />

      {/* Square Project Grid containing Code / Demo controls */}
      <ProjectsGrid onSelectProject={(project) => setSelectedProject(project)} />

      {/* Centered Contact form inside modular card */}
      <ContactForm />

      {/* Unified Footer */}
      <footer className="bg-black py-12 border-t border-purple-500/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-xs sm:text-sm text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <span>M. Tayyab Younas • Math &amp; Data Science Portfolio</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors">
              Back to Top
            </a>
          </div>

          <div>
            <span>© 2026 • Crafted with absolute mathematical constraints</span>
          </div>
        </div>
      </footer>

      {/* Digital CV / Document Summary Modal overlay */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Sandboxed Interactive Simulator Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDemoModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
