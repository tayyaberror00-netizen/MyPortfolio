import { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_TIMELINE } from '../data';
import { Calendar, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      {/* Absolute decorative gradient grids */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">My Journey</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white mt-2 mb-4">
            Experience Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative pl-8 sm:pl-12">
          {/* Solid vertical accent line */}
          <div className="absolute left-[15px] sm:left-[23px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-purple-600 via-indigo-600 to-zinc-900 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]" />

          {/* Timeline Milestones */}
          <div className="space-y-12">
            {EXPERIENCE_TIMELINE.map((milestone, idx) => {
              const isLit = hoveredIndex === idx;

              return (
                <div
                  key={milestone.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(idx)} // keep active on exit to prevent dark states
                  id={`milestone-${milestone.id}`}
                >
                  {/* Left-aligned milestone node */}
                  <div className="absolute -left-[8px] sm:-left-[12px] top-1.5 z-20">
                    <div
                      className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isLit
                          ? 'bg-purple-600 border-purple-400 scale-125 shadow-[0_0_20px_rgba(168,85,247,0.8)]'
                          : 'bg-zinc-950 border-zinc-700 hover:border-purple-500 hover:scale-110'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          isLit ? 'bg-white scale-110' : 'bg-purple-500/60'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Milestone Card Content */}
                  <div
                    className={`ml-6 p-6 sm:p-8 bg-zinc-950/40 border rounded-2xl transition-all duration-300 backdrop-blur-md ${
                      isLit
                        ? 'border-purple-500/30 bg-zinc-950/80 shadow-[0_0_30px_rgba(139,92,246,0.1)] translate-x-2'
                        : 'border-zinc-850 bg-zinc-950/40'
                    }`}
                  >
                    {/* Year/Timeframe node */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider ${
                        isLit ? 'bg-purple-500/20 text-purple-300' : 'bg-zinc-900 text-zinc-400'
                      }`}>
                        <Calendar className="w-3.5 h-3.5" />
                        {milestone.year}
                      </span>
                      <span className="text-zinc-500 text-xs font-mono">• {milestone.company}</span>
                    </div>

                    {/* Job Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold font-display tracking-tight transition-colors duration-200 ${
                      isLit ? 'text-purple-300' : 'text-white'
                    }`}>
                      {milestone.title}
                    </h3>

                    {/* Company subtitle */}
                    <div className="flex items-center gap-2 mt-1.5 text-zinc-400 font-medium text-sm sm:text-base">
                      <Briefcase className="w-4 h-4 text-purple-400/80" />
                      <span>{milestone.company}</span>
                    </div>

                    {/* Responsibilities lists */}
                    <ul className="mt-5 space-y-3" id={`milestone-list-${milestone.id}`}>
                      {milestone.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
                          <CheckCircle2 className={`w-4 h-4 mt-1 shrink-0 transition-colors duration-300 ${
                            isLit ? 'text-purple-400' : 'text-zinc-600'
                          }`} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
