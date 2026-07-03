import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECH_STACK } from '../data';
import { TechItem } from '../types';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Backend' | 'Tools'>('All');

  const tabs: ('All' | 'Frontend' | 'Backend' | 'Tools')[] = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredTech = TECH_STACK.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Decorative ambient background lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 -translate-y-1/2 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Centered Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Tech Stack &amp; Strategy
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 font-sans text-base sm:text-lg">
            Empowering intelligent software with structural mathematical models. Filtering tools that span from high-performance mathematical modeling to fluid interactive frontends.
          </p>
        </div>

        {/* Central interactive tab bar containing filter pills */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1.5 p-1.5 bg-zinc-900/60 border border-purple-500/10 rounded-full backdrop-blur-md">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  id={`tab-pill-${tab.toLowerCase()}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid with layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          id="tech-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                className="group relative bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:-translate-y-1"
                id={`tech-card-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {/* Tech Icon Placeholder with gradient initials */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] mb-4 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300`}>
                  <div className="w-full h-full bg-zinc-950 rounded-[15px] flex items-center justify-center">
                    <span className="font-mono text-base font-black bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                      {item.shortName}
                    </span>
                  </div>
                </div>

                {/* Technical name */}
                <h3 className="text-zinc-100 font-bold font-display text-sm sm:text-base group-hover:text-purple-300 transition-colors duration-200">
                  {item.name}
                </h3>

                {/* Technical categorization label in small tracking text */}
                <span className="mt-1.5 text-[10px] sm:text-xs font-mono font-medium tracking-widest text-zinc-500 uppercase select-none">
                  {item.role}
                </span>

                {/* Ambient hover glowing dot */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tactical research statement */}
        <div className="mt-16 p-6 sm:p-8 bg-zinc-950/40 border border-purple-500/5 rounded-3xl backdrop-blur-md max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-2xl">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            📊
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-sm font-mono font-semibold text-purple-300 uppercase tracking-widest mb-1">Methodology &amp; Strategy</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Applying Bayesian inference and state transition models inside scalable web architectures. Every technology is chosen strategically to maintain absolute performance constraints under heavy algorithmic load.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
