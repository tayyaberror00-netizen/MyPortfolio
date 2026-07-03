import { useState, useRef, useEffect, FormEvent } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

interface TerminalLine {
  text: string;
  isCommand?: boolean;
}

export default function Terminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'tayyabdev ~ $ about --me', isCommand: true },
    { text: 'Tayyab Younas — BS Mathematics & Data Science Student at COMSATS Sahiwal.', isCommand: false },
    { text: 'Specializing in AI/AR integrations, predictive engines, and animated UI design.', isCommand: false },
  ]);

  const outputEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `tayyabdev ~ $ ${cmd}`, isCommand: true }];

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    switch (trimmed) {
      case 'about --me':
      case 'about':
        newHistory.push({
          text: 'Tayyab Younas — BS Mathematics & Data Science Student at COMSATS Sahiwal.',
        });
        newHistory.push({
          text: 'Specializing in AI/AR integrations, predictive engines, and animated UI design.',
        });
        break;
      case 'help':
        newHistory.push({ text: 'Available commands:' });
        newHistory.push({ text: '  about --me   Display bio summary' });
        newHistory.push({ text: '  skills       Show primary coding stack' });
        newHistory.push({ text: '  stats        Display metrics & accomplishments' });
        newHistory.push({ text: '  education    Show university affiliation' });
        newHistory.push({ text: '  clear        Clear terminal lines' });
        break;
      case 'skills':
        newHistory.push({ text: 'Skills Matrix:' });
        newHistory.push({ text: '  • Mathematics & Probability [Linear Algebra, DTMC, Calculus]' });
        newHistory.push({ text: '  • Data Science / ML [Python, PyTorch, Pandas, NumPy]' });
        newHistory.push({ text: '  • Full-Stack [React, TypeScript, Node.js, Express, Tailwind]' });
        break;
      case 'stats':
        newHistory.push({ text: 'Performance KPIs:' });
        newHistory.push({ text: '  • Academic standing: 4.0 CGPA' });
        newHistory.push({ text: '  • Research & Dev: 4+ Advanced AI/Data Projects' });
        newHistory.push({ text: '  • Core commitment: 100% Dedication' });
        break;
      case 'education':
        newHistory.push({ text: 'COMSATS University Islamabad, Sahiwal Campus' });
        newHistory.push({ text: 'Degree: Bachelor of Science in Mathematics & Data Science' });
        newHistory.push({ text: 'Status: Active Student & Academic Innovator' });
        break;
      case '':
        break;
      default:
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for a list of valid options.`,
        });
    }

    setHistory(newHistory);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal('');
  };

  const runQuickCommand = (cmd: string) => {
    handleCommand(cmd);
  };

  return (
    <div
      className="w-full max-w-lg mx-auto bg-zinc-950/80 border border-purple-500/20 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md neon-glow-purple group hover:border-purple-500/40 transition-colors duration-300"
      id="terminal-container"
      onClick={focusInput}
    >
      {/* macOS Terminal Title Bar */}
      <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-purple-500/10">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
        </div>
        <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs font-semibold select-none">
          <TerminalIcon className="w-3.5 h-3.5 text-purple-400" />
          <span>tayyab_younas_shell.sh</span>
        </div>
        <div className="w-12" /> {/* spacer to center name */}
      </div>

      {/* Quick click options for easy mobile control */}
      <div className="bg-zinc-900/40 px-4 py-2 flex flex-wrap gap-2 border-b border-purple-500/5 items-center">
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">Quick Commands:</span>
        <button
          onClick={(e) => { e.stopPropagation(); runQuickCommand('about --me'); }}
          className="px-2 py-0.5 rounded bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-purple-300 font-mono text-xs cursor-pointer transition-colors"
        >
          about --me
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); runQuickCommand('skills'); }}
          className="px-2 py-0.5 rounded bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-purple-300 font-mono text-xs cursor-pointer transition-colors"
        >
          skills
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); runQuickCommand('stats'); }}
          className="px-2 py-0.5 rounded bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/20 text-purple-300 font-mono text-xs cursor-pointer transition-colors"
        >
          stats
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); runQuickCommand('clear'); }}
          className="px-2 py-0.5 rounded bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/40 text-zinc-400 font-mono text-xs cursor-pointer transition-colors"
        >
          clear
        </button>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 h-64 overflow-y-auto font-mono text-xs md:text-sm text-zinc-300 space-y-2 leading-relaxed custom-scrollbar">
        {history.map((line, idx) => (
          <div key={idx} className={line.isCommand ? 'text-purple-300 font-semibold' : 'text-zinc-300 pl-2 border-l border-zinc-800'}>
            {line.text}
          </div>
        ))}

        {/* Dynamic User Input Line */}
        <form onSubmit={onSubmit} className="flex items-center text-purple-300 pt-1">
          <span className="font-semibold shrink-0">tayyabdev ~ $&nbsp;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="bg-transparent text-zinc-100 outline-none border-none p-0 m-0 w-full focus:ring-0 focus:outline-none"
            placeholder='type "help" or select a quick command'
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <span className="terminal-cursor shrink-0" />
        </form>

        <div ref={outputEndRef} />
      </div>
    </div>
  );
}
