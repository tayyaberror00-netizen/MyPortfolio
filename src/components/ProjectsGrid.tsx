import { PROJECTS } from '../data';
import { Project } from '../types';
import { Github, Play, Sparkles } from 'lucide-react';

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsGrid({ onSelectProject }: ProjectsGridProps) {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/30">
      {/* Decorative background vectors */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-indigo-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">Strategic Implementations</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white mt-2 mb-4">
            Advanced Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
        </div>

        {/* Square Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-container-grid"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-zinc-950 border border-zinc-900/80 rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-purple-500/25 hover:shadow-[0_0_25px_rgba(139,92,246,0.08)] hover:-translate-y-1.5"
              id={`project-card-${project.id}`}
            >
              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1">
                {/* Large Emoji Header */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold font-display text-white group-hover:text-purple-300 transition-colors duration-250">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed font-sans min-h-[80px]">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-purple-950/20 border border-purple-900/20 text-purple-300 text-[10px] font-mono tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dual-Button Link Layout split evenly (50/50) */}
              <div className="border-t border-zinc-900 flex divide-x divide-zinc-900">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="w-1/2 py-3.5 px-4 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                  id={`project-code-btn-${project.id}`}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-1/2 py-3.5 px-4 bg-zinc-950 hover:bg-purple-950/20 text-purple-400 hover:text-purple-300 text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                  id={`project-demo-btn-${project.id}`}
                >
                  <Play className="w-3.5 h-3.5 fill-purple-400/20" />
                  <span>Live Demo</span>
                </button>
              </div>

              {/* Corner ambient visual glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
