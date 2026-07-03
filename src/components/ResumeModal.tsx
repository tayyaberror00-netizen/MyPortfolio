import { X, Mail, Phone, MapPin, Printer, GraduationCap, Award, Brain, Star, BookOpen, Trophy, Shield, Settings, Activity, Linkedin } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, EXPERIENCE_TIMELINE, TECH_STACK, ACADEMIC_PROJECTS, EXTRA_CURRICULARS, PERSONAL_INFO } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in print:bg-white print:p-0">
      <div 
        className="relative w-full max-w-5xl bg-zinc-950 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl neon-glow-purple flex flex-col max-h-[90vh] print:border-none print:shadow-none print:max-h-full print:rounded-none"
        id="resume-modal-container"
      >
        {/* Header - Hidden on print */}
        <div className="bg-zinc-900/60 border-b border-purple-500/15 p-5 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-mono font-semibold text-purple-300">Curriculum Vitae</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold tracking-wider cursor-pointer transition-all hover:scale-105"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-[#050505] text-zinc-300 font-sans print:bg-white print:text-black print:overflow-visible custom-scrollbar">
          
          {/* Main Info Section */}
          <div className="border-b border-purple-500/10 pb-6 mb-6 flex flex-col md:flex-row justify-between items-start gap-6 print:border-zinc-300">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white print:text-black tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-purple-400 font-mono text-sm sm:text-base font-semibold">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-zinc-400 text-sm max-w-xl print:text-zinc-600 leading-relaxed italic">
                "{PERSONAL_INFO.academicMotto}"
              </p>
            </div>
            
            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 text-xs font-mono text-zinc-400 print:text-zinc-700 shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 print:text-zinc-600" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400 print:text-zinc-600" />
                <span>{PERSONAL_INFO.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 print:text-zinc-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-purple-400 print:text-zinc-600" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">{PERSONAL_INFO.linkedin.replace('https://', '')}</a>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-emerald-400 print:text-zinc-600" />
                <span className="text-emerald-400 font-bold">BS CGPA: {PERSONAL_INFO.cgpa}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Tech Stack & Competencies */}
            <div className="space-y-6">
              
              {/* Education Stage */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 print:text-zinc-800 border-b border-purple-500/10 pb-1.5 mb-3 print:border-zinc-300 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </h3>
                <div className="space-y-4">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-xs text-purple-300/90 font-mono font-semibold">{edu.period}</div>
                      <div className="text-sm font-bold text-white print:text-black">{edu.degree}</div>
                      <div className="text-xs text-zinc-400 print:text-zinc-600">{edu.institution}</div>
                      <div className="text-xs text-emerald-400 font-mono font-bold">{edu.score}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Tools & Languages */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 print:text-zinc-800 border-b border-purple-500/10 pb-1.5 mb-3 print:border-zinc-300 flex items-center gap-1.5">
                  <Settings className="w-4 h-4" />
                  Tools &amp; Languages
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-1">Languages:</span>
                    <div className="flex flex-wrap gap-1">
                      {['English (Fluent)', 'Urdu (Native)', 'Punjabi (Native)'].map((l) => (
                        <span key={l} className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 print:bg-zinc-100 print:text-zinc-800">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-1">Coding:</span>
                    <div className="flex flex-wrap gap-1">
                      {TECH_STACK.filter(t => t.category !== 'Tools').map((tech) => (
                        <span key={tech.id} className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 print:bg-zinc-100 print:text-zinc-800">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-1">Softwares:</span>
                    <div className="flex flex-wrap gap-1">
                      {TECH_STACK.filter(t => t.category === 'Tools').map((tech) => (
                        <span key={tech.id} className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 print:bg-zinc-100 print:text-zinc-800">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra-Curriculars */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 print:text-zinc-800 border-b border-purple-500/10 pb-1.5 mb-3 print:border-zinc-300 flex items-center gap-1.5">
                  <Activity className="w-4 h-4" />
                  Extra‑Curriculars
                </h3>
                {EXTRA_CURRICULARS.map((ec, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs text-purple-300/90 font-mono font-semibold">{ec.period}</div>
                    <div className="text-xs font-bold text-white print:text-black">{ec.organization}</div>
                    <ul className="space-y-1 mt-1">
                      {ec.details.map((d, dIdx) => (
                        <li key={dIdx} className="text-[11px] text-zinc-400 print:text-zinc-600 leading-normal">
                          • {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

            {/* Column 2 & 3: Experience, Academic Projects, Certifications */}
            <div className="md:col-span-2 space-y-6">
              
              {/* Experience */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 print:text-zinc-800 border-b border-purple-500/10 pb-1.5 mb-4 print:border-zinc-300 flex items-center gap-1.5">
                  <BriefcaseIcon className="w-4 h-4" />
                  Professional Experience
                </h3>

                <div className="space-y-5">
                  {EXPERIENCE_TIMELINE.map((milestone) => (
                    <div key={milestone.id}>
                      <div className="flex justify-between items-start text-sm">
                        <h4 className="font-bold text-white print:text-black">{milestone.title}</h4>
                        <span className="text-xs font-mono text-zinc-500">{milestone.year}</span>
                      </div>
                      <span className="text-xs text-purple-400 font-mono">{milestone.company}</span>
                      <ul className="mt-2 text-xs text-zinc-400 print:text-zinc-600 list-disc list-inside space-y-1 leading-relaxed">
                        {milestone.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx}>{resp}</li>
                        ))}
                      </ul>
                      {milestone.toolsUsed && (
                        <div className="mt-1.5 flex flex-wrap gap-1 items-center">
                          <span className="text-[10px] text-zinc-500 font-mono">Tools:</span>
                          {milestone.toolsUsed.map((tool) => (
                            <span key={tool} className="text-[10px] font-mono px-1 py-0.2 rounded bg-zinc-900 text-zinc-400 print:bg-zinc-100 print:text-zinc-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Projects */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 print:text-zinc-800 border-b border-purple-500/10 pb-1.5 mb-4 print:border-zinc-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Academic Projects / Research
                </h3>

                <div className="space-y-4">
                  {ACADEMIC_PROJECTS.map((proj, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-start text-sm">
                        <h4 className="font-bold text-white print:text-black">{proj.title}</h4>
                        <span className="text-xs font-mono text-zinc-500">{proj.period}</span>
                      </div>
                      <span className="text-xs text-purple-400 font-mono">{proj.role}</span>
                      <p className="text-xs text-zinc-400 print:text-zinc-600 mt-1">
                        <strong className="text-zinc-300 print:text-zinc-800">Objective:</strong> {proj.objective}
                      </p>
                      <p className="text-xs text-zinc-400 print:text-zinc-600">
                        <strong className="text-zinc-300 print:text-zinc-800">Core Focus:</strong> {proj.coreFocus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Awards */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 print:text-zinc-800 border-b border-purple-500/10 pb-1.5 mb-4 print:border-zinc-300 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4" />
                  Certifications &amp; Awards
                </h3>
                <ul className="space-y-2">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="text-xs text-zinc-400 print:text-zinc-600 flex items-start gap-2 leading-relaxed">
                      <span className="text-purple-400 font-mono text-[11px] shrink-0 mt-0.5">[{cert.date}]</span>
                      <span>{cert.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Footer info - Hidden on print */}
        <div className="bg-zinc-950 p-4 border-t border-purple-500/15 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-bold font-mono cursor-pointer transition-colors"
          >
            Close Document View
          </button>
        </div>
      </div>
    </div>
  );
}

// Simple fallback inline Briefcase icon
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 2H9a2 2 0 0 0-2 2v2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2z"/>
      <rect width="20" height="14" x="2" y="8" rx="2"/>
      <path d="M12 12V8"/>
    </svg>
  );
}
