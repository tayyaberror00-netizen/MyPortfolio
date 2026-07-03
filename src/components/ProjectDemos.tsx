import { useState, useEffect, useRef, FormEvent } from 'react';
import { X, Play, RefreshCw, HelpCircle, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDemoModal({ project, onClose }: ProjectDemoModalProps) {
  if (!project) return null;

  // Global close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-zinc-950 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl neon-glow-purple-strong flex flex-col max-h-[90vh]"
        id="demo-modal-container"
      >
        {/* Modal Header */}
        <div className="bg-zinc-900/60 border-b border-purple-500/15 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.emoji}</span>
            <div>
              <h3 className="text-xl font-bold font-display text-white">{project.title}</h3>
              <span className="text-xs font-mono text-purple-400">Interactive Technical Sandbox</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            id="close-demo-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Sandbox Area */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          <p className="text-zinc-400 text-sm mb-6 font-sans">
            {project.description}
          </p>

          <div className="p-5 bg-black/55 border border-purple-500/10 rounded-2xl">
            {project.id === 'p1' && <NeuralDynamicsSimulator />}
            {project.id === 'p2' && <MarkovChainPredictor />}
            {project.id === 'p3' && <StochasticYieldOptimizer />}
            {project.id === 'p4' && <VectorSemanticSearch />}
            {project.id === 'p5' && <HospitalConsoleSimulator />}
            {project.id === 'p6' && <BayesDiagnosticCalculator />}
            {project.id === 'p7' && <SpatialCoordinatesStudio />}
            {project.id === 'p8' && <GeneSequenceVisualizer />}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-zinc-900/40 p-4 border-t border-purple-500/10 flex justify-between items-center text-xs font-mono text-zinc-500">
          <span>COMSATS Sahiwal • Mathematics &amp; Data Science</span>
          <span>Click outside or press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   1. Neural Dynamics Simulator (🧠)
   ========================================================================== */
function NeuralDynamicsSimulator() {
  const [activation, setActivation] = useState<'sigmoid' | 'relu' | 'tanh'>('sigmoid');
  const [isTraining, setIsTraining] = useState(false);
  const [weights, setWeights] = useState<number[]>([0.45, -0.62, 0.81, 0.19, -0.34, 0.57]);
  const [loss, setLoss] = useState(0.84);
  const [epoch, setEpoch] = useState(0);

  // Simulate weights updating during "training"
  useEffect(() => {
    let interval: any;
    if (isTraining) {
      interval = setInterval(() => {
        setWeights(prev => prev.map(w => {
          const delta = (Math.random() - 0.5) * 0.08;
          const updated = w + delta;
          return Math.max(-1, Math.min(1, updated));
        }));
        setLoss(prev => Math.max(0.02, prev - (Math.random() * 0.04)));
        setEpoch(prev => prev + 1);
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isTraining]);

  const handleReset = () => {
    setIsTraining(false);
    setWeights([0.45, -0.62, 0.81, 0.19, -0.34, 0.57]);
    setLoss(0.84);
    setEpoch(0);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h4 className="text-sm font-mono font-bold text-purple-300 uppercase tracking-wider">SurvAI Neural Predictor &amp; Risk Estimator</h4>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsTraining(!isTraining)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono tracking-wide flex items-center gap-1.5 transition-colors cursor-pointer ${
              isTraining ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isTraining ? 'animate-spin' : ''}`} />
            {isTraining ? 'Pause Optimization' : 'Optimize Weights'}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Network Schema Grid */}
      <div className="relative py-8 flex items-center justify-around bg-zinc-950/80 border border-zinc-850 rounded-xl overflow-hidden min-h-[160px]">
        {/* Layer Lines - SVG Connector */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
          {/* Synapses linking Input (2 nodes) to Hidden (3 nodes) */}
          <line x1="15%" y1="30%" x2="50%" y2="20%" stroke="#8b5cf6" strokeWidth={Math.abs(weights[0]) * 3 + 1} strokeDasharray={isTraining ? "5 5" : ""} className="transition-all duration-300" />
          <line x1="15%" y1="30%" x2="50%" y2="50%" stroke="#8b5cf6" strokeWidth={Math.abs(weights[1]) * 3 + 1} strokeDasharray={isTraining ? "5 5" : ""} className="transition-all duration-300" />
          <line x1="15%" y1="30%" x2="50%" y2="80%" stroke="#a78bfa" strokeWidth={Math.abs(weights[2]) * 3 + 1} strokeDasharray={isTraining ? "5 5" : ""} className="transition-all duration-300" />
          
          <line x1="15%" y1="70%" x2="50%" y2="20%" stroke="#a78bfa" strokeWidth={Math.abs(weights[3]) * 3 + 1} strokeDasharray={isTraining ? "5 5" : ""} className="transition-all duration-300" />
          <line x1="15%" y1="70%" x2="50%" y2="50%" stroke="#6366f1" strokeWidth={Math.abs(weights[4]) * 3 + 1} strokeDasharray={isTraining ? "5 5" : ""} className="transition-all duration-300" />
          <line x1="15%" y1="70%" x2="50%" y2="80%" stroke="#6366f1" strokeWidth={Math.abs(weights[5]) * 3 + 1} strokeDasharray={isTraining ? "5 5" : ""} className="transition-all duration-300" />

          {/* Hidden (3 nodes) to Output (1 node) */}
          <line x1="50%" y1="20%" x2="85%" y2="50%" stroke="#ec4899" strokeWidth="2.5" strokeDasharray={isTraining ? "3 3" : ""} />
          <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#ec4899" strokeWidth="1.5" strokeDasharray={isTraining ? "3 3" : ""} />
          <line x1="50%" y1="80%" x2="85%" y2="50%" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray={isTraining ? "3 3" : ""} />
        </svg>

        {/* Input Nodes */}
        <div className="flex flex-col gap-10 z-10">
          <div className="w-10 h-10 rounded-full bg-indigo-950 border-2 border-indigo-400 flex items-center justify-center font-mono text-xs text-indigo-300 font-bold shadow-lg">X₁</div>
          <div className="w-10 h-10 rounded-full bg-indigo-950 border-2 border-indigo-400 flex items-center justify-center font-mono text-xs text-indigo-300 font-bold shadow-lg">X₂</div>
        </div>

        {/* Hidden Nodes */}
        <div className="flex flex-col gap-5 z-10">
          <div className="w-10 h-10 rounded-full bg-purple-950 border-2 border-purple-400 flex items-center justify-center font-mono text-xs text-purple-300 font-bold shadow-lg">H₁</div>
          <div className="w-10 h-10 rounded-full bg-purple-950 border-2 border-purple-400 flex items-center justify-center font-mono text-xs text-purple-300 font-bold shadow-lg">H₂</div>
          <div className="w-10 h-10 rounded-full bg-purple-950 border-2 border-purple-400 flex items-center justify-center font-mono text-xs text-purple-300 font-bold shadow-lg">H₃</div>
        </div>

        {/* Output Node */}
        <div className="z-10">
          <div className="w-11 h-11 rounded-full bg-pink-950 border-2 border-pink-500 flex items-center justify-center font-mono text-xs text-pink-300 font-bold shadow-[0_0_15px_rgba(236,72,153,0.4)] animate-pulse">
            Ŷ
          </div>
        </div>
      </div>

      {/* Inputs / Parameters Control */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
        <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800">
          <span className="text-zinc-500 block mb-1">Activation Function</span>
          <select
            value={activation}
            onChange={(e: any) => setActivation(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-700 text-zinc-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-purple-500"
          >
            <option value="sigmoid">Sigmoid σ(x)</option>
            <option value="relu">ReLU max(0, x)</option>
            <option value="tanh">Hyperbolic Tanh</option>
          </select>
        </div>

        <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 flex flex-col justify-center">
          <span className="text-zinc-500 block">Training Epoch</span>
          <span className="text-white text-base font-bold mt-1">{epoch}</span>
        </div>

        <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 flex flex-col justify-center">
          <span className="text-zinc-500 block">Mean Squared Error</span>
          <span className="text-purple-400 text-base font-bold mt-1">{loss.toFixed(4)}</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. Markov Chain Predictor (📊)
   ========================================================================== */
function MarkovChainPredictor() {
  const [transitionMatrix, setTransitionMatrix] = useState({
    AA: 0.7, AB: 0.3,
    BA: 0.4, BB: 0.6
  });
  const [currentState, setCurrentState] = useState<'A' | 'B'>('A');
  const [history, setHistory] = useState<string[]>(['A']);
  const [steps, setSteps] = useState(0);

  const simulateStep = () => {
    const threshold = transitionMatrix[`${currentState}B` as 'AB' | 'BB'];
    const roll = Math.random();
    const nextState = roll < threshold ? 'B' : 'A';
    
    setCurrentState(nextState);
    setHistory(prev => [...prev.slice(-14), nextState]); // Keep last 15 states
    setSteps(prev => prev + 1);
  };

  const handleReset = () => {
    setCurrentState('A');
    setHistory(['A']);
    setSteps(0);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h4 className="text-sm font-mono font-bold text-purple-300 uppercase tracking-wider">Diabetes Risk Pattern-Matcher (Bayes' Theorem Classifier)</h4>
        <div className="flex items-center gap-2">
          <button
            onClick={simulateStep}
            className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-mono tracking-wide flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Simulate Next Step
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Interactive Matrix Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-zinc-950/80 border border-zinc-850 rounded-xl">
          <h5 className="text-xs font-mono font-semibold text-zinc-400 mb-3 uppercase tracking-wider">Transition Probability Matrix</h5>
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="text-zinc-600" />
            <div className="text-purple-400 font-bold">To A</div>
            <div className="text-purple-400 font-bold">To B</div>

            <div className="text-purple-400 font-bold text-left py-2">From A</div>
            <div className="p-1 bg-zinc-900 rounded">
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={transitionMatrix.AA}
                onChange={(e) => {
                  const val = Math.min(1, Math.max(0, parseFloat(e.target.value) || 0));
                  setTransitionMatrix({ ...transitionMatrix, AA: val, AB: parseFloat((1 - val).toFixed(2)) });
                }}
                className="w-full text-center bg-transparent text-white outline-none"
              />
            </div>
            <div className="p-1 bg-zinc-900 rounded">
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={transitionMatrix.AB}
                onChange={(e) => {
                  const val = Math.min(1, Math.max(0, parseFloat(e.target.value) || 0));
                  setTransitionMatrix({ ...transitionMatrix, AB: val, AA: parseFloat((1 - val).toFixed(2)) });
                }}
                className="w-full text-center bg-transparent text-white outline-none"
              />
            </div>

            <div className="text-purple-400 font-bold text-left py-2">From B</div>
            <div className="p-1 bg-zinc-900 rounded">
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={transitionMatrix.BA}
                onChange={(e) => {
                  const val = Math.min(1, Math.max(0, parseFloat(e.target.value) || 0));
                  setTransitionMatrix({ ...transitionMatrix, BA: val, BB: parseFloat((1 - val).toFixed(2)) });
                }}
                className="w-full text-center bg-transparent text-white outline-none"
              />
            </div>
            <div className="p-1 bg-zinc-900 rounded">
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={transitionMatrix.BB}
                onChange={(e) => {
                  const val = Math.min(1, Math.max(0, parseFloat(e.target.value) || 0));
                  setTransitionMatrix({ ...transitionMatrix, BB: val, BA: parseFloat((1 - val).toFixed(2)) });
                }}
                className="w-full text-center bg-transparent text-white outline-none"
              />
            </div>
          </div>
          <p className="text-[10px] text-zinc-500 mt-3 font-mono">Note: Row probabilities must sum to 1.0.</p>
        </div>

        {/* Real-time State Visualizer */}
        <div className="p-4 bg-zinc-950/80 border border-zinc-850 rounded-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Active Simulator Metrics</span>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-lg border-2 ${currentState === 'A' ? 'bg-purple-900/30 border-purple-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                  A
                </div>
                <span className="text-[10px] text-zinc-500 font-mono mt-1">State A</span>
              </div>

              <div className="text-zinc-500">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-lg border-2 ${currentState === 'B' ? 'bg-indigo-900/30 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                  B
                </div>
                <span className="text-[10px] text-zinc-500 font-mono mt-1">State B</span>
              </div>
            </div>
          </div>

          <div className="mt-4 font-mono text-xs text-zinc-400">
            <div>Sequence history: <span className="text-purple-400 font-bold">{history.join(' → ')}</span></div>
            <div className="mt-1">Total iterations: <span className="text-white">{steps}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. Stochastic Yield Optimizer (📈)
   ========================================================================== */
function StochasticYieldOptimizer() {
  const [volatility, setVolatility] = useState(0.25);
  const [drift, setDrift] = useState(0.12);
  const [paths, setPaths] = useState<number[][]>([]);

  const runSimulation = () => {
    const numSteps = 50;
    const dt = 1 / numSteps;
    const newPaths = [];

    // Generate 3 sample Monte Carlo paths
    for (let p = 0; p < 3; p++) {
      let currentPrice = 100;
      const singlePath = [currentPrice];
      
      for (let s = 1; s <= numSteps; s++) {
        const rand = (Math.random() + Math.random() + Math.random() - 1.5) * 1.414; // Approximate Gaussian
        const growth = (drift - 0.5 * volatility * volatility) * dt + volatility * Math.sqrt(dt) * rand;
        currentPrice = currentPrice * Math.exp(growth);
        singlePath.push(currentPrice);
      }
      newPaths.push(singlePath);
    }
    setPaths(newPaths);
  };

  useEffect(() => {
    runSimulation();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h4 className="text-sm font-mono font-bold text-purple-300 uppercase tracking-wider">FoodLion Realtime Delivery Model Simulator</h4>
        <button
          onClick={runSimulation}
          className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg text-xs font-bold font-mono tracking-wide flex items-center gap-1.5 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Re-run Path Engine
        </button>
      </div>

      {/* SVG Canvas Graph */}
      <div className="h-44 bg-zinc-950 border border-zinc-850 rounded-xl relative p-3">
        {paths.length > 0 && (
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Draw grid lines */}
            <line x1="0" y1="25" x2="100" y2="25" stroke="#181825" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#181825" strokeWidth="0.5" />
            <line x1="0" y1="75" x2="100" y2="75" stroke="#181825" strokeWidth="0.5" />

            {paths.map((singlePath, pIdx) => {
              // Map prices to coordinate limits
              const minP = Math.min(...paths.flat()) * 0.95;
              const maxP = Math.max(...paths.flat()) * 1.05;
              const mapY = (price: number) => 100 - ((price - minP) / (maxP - minP)) * 100;

              const points = singlePath
                .map((price, idx) => `${(idx / (singlePath.length - 1)) * 100},${mapY(price)}`)
                .join(' ');

              const colors = ['#a78bfa', '#38bdf8', '#f43f5e'];

              return (
                <polyline
                  key={pIdx}
                  fill="none"
                  stroke={colors[pIdx % colors.length]}
                  strokeWidth="1.5"
                  points={points}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>
        )}
        <div className="absolute top-2 left-2 font-mono text-[9px] text-zinc-500">Asset Yield ($)</div>
        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-zinc-500">Steps (T)</div>
      </div>

      {/* Volatility & Drift Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-850">
          <div className="flex justify-between items-center mb-1">
            <span className="text-zinc-400">Volatility (Sigma)</span>
            <span className="text-purple-400 font-bold">{(volatility * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="0.05"
            max="0.8"
            step="0.05"
            value={volatility}
            onChange={(e) => setVolatility(parseFloat(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>

        <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-850">
          <div className="flex justify-between items-center mb-1">
            <span className="text-zinc-400">Mean Drift (Mu)</span>
            <span className="text-purple-400 font-bold">{(drift * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="-0.2"
            max="0.4"
            step="0.02"
            value={drift}
            onChange={(e) => setDrift(parseFloat(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. Vector Semantic Search (🔍)
   ========================================================================== */
const DOCS = [
  { id: 1, text: "Continuous probability processes and predictive asset simulation models represent mathematical milestones." },
  { id: 2, text: "Framer Motion generates physical animation loops with fully hardware-accelerated grid layers." },
  { id: 3, text: "BS Mathematics studies provide deep statistical linear vector spacing rules." },
  { id: 4, text: "React components paired with responsive CSS utilities formulate beautiful dark theme websites." }
];

function VectorSemanticSearch() {
  const [query, setQuery] = useState('mathematics and statistics');
  const [results, setResults] = useState<{ text: string; score: number }[]>([]);

  // Simulate scoring query based on shared words (calculating a light mock cosine similarity)
  const computeScores = () => {
    const queryTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
    
    const computed = DOCS.map(doc => {
      const docTextLower = doc.text.toLowerCase();
      let matchCount = 0;
      queryTerms.forEach(term => {
        if (docTextLower.includes(term)) matchCount += 1.5;
        // Partial character similarity
        else {
          docTextLower.split(/\s+/).forEach(docWord => {
            if (docWord.startsWith(term.slice(0, 3))) matchCount += 0.4;
          });
        }
      });

      // Cosine scale score
      const score = Math.min(0.98, 0.05 + (matchCount / (Math.sqrt(queryTerms.length + 1) * 3)));
      return { text: doc.text, score: parseFloat(score.toFixed(3)) };
    }).sort((a, b) => b.score - a.score);

    setResults(computed);
  };

  useEffect(() => {
    computeScores();
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-mono font-bold text-purple-300 uppercase tracking-wider">Vital Hub AI Writer &amp; Semantic Similarity Matrix</h4>
        <span className="text-xs text-zinc-500 font-mono">Calculates alignment against lightweight database rows.</span>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type search terms (e.g. math, animation, dark web)"
          className="flex-1 bg-zinc-950 border border-zinc-800 focus:border-purple-500 rounded-xl px-4 py-2 text-sm text-zinc-100 outline-none font-mono"
        />
        <button
          onClick={computeScores}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold rounded-xl cursor-pointer"
        >
          Compute
        </button>
      </div>

      {/* Sorted Results */}
      <div className="space-y-3 font-mono text-xs">
        {results.map((res, rIdx) => (
          <div key={rIdx} className="p-3 bg-zinc-900/40 rounded-xl border border-zinc-850/60 flex items-center justify-between gap-4">
            <p className="text-zinc-300 leading-relaxed flex-1">"{res.text}"</p>
            <div className="shrink-0 flex flex-col items-end">
              <span className="text-[10px] text-zinc-500">Similarity</span>
              <span className="text-purple-400 font-black text-sm">{(res.score * 100).toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   5. Spatial Coordinates Studio (🕶️)
   ========================================================================== */
function SpatialCoordinatesStudio() {
  const [transformType, setTransformType] = useState<'scale' | 'rotate' | 'shear'>('scale');
  const [vector, setVector] = useState({ x: 30, y: 30 });
  const [transformed, setTransformed] = useState({ x: 60, y: 30 });

  const applyTransformation = () => {
    switch (transformType) {
      case 'scale':
        setTransformed({ x: vector.x * 2, y: vector.y * 1 });
        break;
      case 'rotate':
        // 45 degrees matrix rotation
        const rad = Math.PI / 4;
        const rx = vector.x * Math.cos(rad) - vector.y * Math.sin(rad);
        const ry = vector.x * Math.sin(rad) + vector.y * Math.cos(rad);
        setTransformed({ x: rx + 40, y: ry + 10 }); // slightly offset to center vector
        break;
      case 'shear':
        setTransformed({ x: vector.x + 0.6 * vector.y, y: vector.y });
        break;
    }
  };

  useEffect(() => {
    applyTransformation();
  }, [transformType, vector]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h4 className="text-sm font-mono font-bold text-purple-300 uppercase tracking-wider">Substance Dualism Philosophical Concept Map Viewer</h4>
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-zinc-850">
          {(['scale', 'rotate', 'shear'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTransformType(t)}
              className={`px-2.5 py-1 rounded text-[10px] uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                transformType === t ? 'bg-purple-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Plot Visualizer */}
      <div className="h-44 bg-zinc-950 border border-zinc-850 rounded-xl relative overflow-hidden flex items-center justify-center">
        <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100">
          {/* Axis markers */}
          <line x1="50" y1="0" x2="50" y2="100" stroke="#1f1f2e" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#1f1f2e" strokeWidth="0.5" />
          
          {/* Grid lines */}
          <line x1="25" y1="0" x2="25" y2="100" stroke="#10101a" strokeWidth="0.25" />
          <line x1="75" y1="0" x2="75" y2="100" stroke="#10101a" strokeWidth="0.25" />
          <line x1="0" y1="25" x2="100" y2="25" stroke="#10101a" strokeWidth="0.25" />
          <line x1="0" y1="75" x2="100" y2="75" stroke="#10101a" strokeWidth="0.25" />

          {/* Original Vector (White) */}
          <line
            x1="50"
            y1="50"
            x2={50 + vector.x * 0.8}
            y2={50 - vector.y * 0.8}
            stroke="#ffffff"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <circle cx={50 + vector.x * 0.8} cy={50 - vector.y * 0.8} r="3" fill="#ffffff" />

          {/* Transformed Vector (Purple) */}
          <line
            x1="50"
            y1="50"
            x2={50 + transformed.x * 0.5}
            y2={50 - transformed.y * 0.5}
            stroke="#a78bfa"
            strokeWidth="2"
            strokeDasharray="2 2"
            markerEnd="url(#purple-arrow)"
          />
          <circle cx={50 + transformed.x * 0.5} cy={50 - transformed.y * 0.5} r="3.5" fill="#a78bfa" />
        </svg>

        <div className="absolute top-2 left-2 font-mono text-[9px] text-zinc-500">Vector Original Coordinates: (30, 30)</div>
        <div className="absolute bottom-2 left-2 font-mono text-[9px] text-purple-400">Transformed Node: ({transformed.x.toFixed(0)}, {transformed.y.toFixed(0)})</div>
      </div>
    </div>
  );
}

/* ==========================================================================
   6. Gene Sequence Visualizer (🧬)
   ========================================================================== */
function GeneSequenceVisualizer() {
  const [seqA, setSeqA] = useState('ATCG');
  const [seqB, setSeqB] = useState('ACCG');
  const [matrix, setMatrix] = useState<number[][]>([]);

  const solveAlignment = () => {
    const rows = seqA.length + 1;
    const cols = seqB.length + 1;
    const m = Array(rows).fill(0).map(() => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) m[i][0] = i * -1;
    for (let j = 0; j < cols; j++) m[0][j] = j * -1;

    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        const matchScore = seqA[i - 1] === seqB[j - 1] ? 1 : -1;
        m[i][j] = Math.max(
          m[i - 1][j - 1] + matchScore, // Match/Mismatch
          m[i - 1][j] - 1,             // Deletion
          m[i][j - 1] - 1              // Insertion
        );
      }
    }
    setMatrix(m);
  };

  useEffect(() => {
    solveAlignment();
  }, [seqA, seqB]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-mono font-bold text-purple-300 uppercase tracking-wider">Constitutional Dilemma Legislative Evolution Matrix</h4>
        <span className="text-xs text-zinc-500 font-mono">Analyzes decades-long Federal Shariat Court structural matrix equations.</span>
      </div>

      <div className="grid grid-cols-2 gap-3 font-mono text-xs">
        <div>
          <span className="text-zinc-500">Sequence A:</span>
          <input
            type="text"
            maxLength={6}
            value={seqA}
            onChange={(e) => setSeqA(e.target.value.toUpperCase())}
            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 mt-1 text-white uppercase outline-none"
          />
        </div>
        <div>
          <span className="text-zinc-500">Sequence B:</span>
          <input
            type="text"
            maxLength={6}
            value={seqB}
            onChange={(e) => setSeqB(e.target.value.toUpperCase())}
            className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 mt-1 text-white uppercase outline-none"
          />
        </div>
      </div>

      {/* Align Score Grid */}
      <div className="p-3 bg-zinc-950 border border-zinc-850 rounded-xl overflow-x-auto">
        {matrix.length > 0 && (
          <table className="mx-auto font-mono text-xs text-center border-collapse">
            <thead>
              <tr>
                <th className="p-1 border border-zinc-850 w-7 h-7" />
                <th className="p-1 border border-zinc-850 text-zinc-500 w-7 h-7" />
                {seqB.split('').map((char, idx) => (
                  <th key={idx} className="p-1 border border-zinc-850 text-purple-400 w-7 h-7">{char}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, rIdx) => (
                <tr key={rIdx}>
                  <td className="p-1 border border-zinc-850 text-purple-400 font-bold w-7 h-7">
                    {rIdx === 0 ? '' : seqA[rIdx - 1]}
                  </td>
                  {row.map((val, cIdx) => (
                    <td key={cIdx} className={`p-1 border border-zinc-850 w-7 h-7 text-zinc-300 ${val >= 0 ? 'text-emerald-400 font-black' : ''}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   7. Hospital Console Simulator (🏥)
   ========================================================================== */
function HospitalConsoleSimulator() {
  const [logs, setLogs] = useState<string[]>([
    "Initializing C++ Hospital Management System v1.4...",
    "All local ledger files successfully loaded from storage (hms_db.dat).",
    "Ready for patient coordination command input."
  ]);
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [disease, setDisease] = useState('General Checkup');
  const [doctor, setDoctor] = useState('Dr. Tayyab (Senior Data Advisor)');

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[HMS-SYS]: ${msg}`]);
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !age.trim()) {
      addLog("WARNING: Register command rejected due to incomplete fields.");
      return;
    }
    addLog(`Registering Patient "${patientName}" (Age: ${age}) with ${doctor} for "${disease}"...`);
    setTimeout(() => {
      addLog(`SUCCESS: Patient ID PAT-${Math.floor(1000 + Math.random() * 9000)} generated.`);
      addLog(`Ledger updated. Binary record written into slot hms_db.dat.`);
      setPatientName('');
      setAge('');
    }, 600);
  };

  const viewStaff = () => {
    addLog("Executing C++ Staff Shift Map query...");
    setTimeout(() => {
      addLog("---------------------------------------------");
      addLog("| Doctor Name   | Specialty         | Shift |");
      addLog("---------------------------------------------");
      addLog("| Dr. Tayyab    | Data & Analytics  | 09-17 |");
      addLog("| Dr. Jinnah    | General Medicine  | 14-22 |");
      addLog("| Dr. Sahiwal   | Cardiac Expert    | 00-08 |");
      addLog("---------------------------------------------");
      addLog("Query completed successfully in 0.04ms.");
    }, 300);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-purple-500/10 pb-4">
        <div>
          <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">C++ HMS Terminal Simulation</h4>
          <p className="text-xs text-zinc-500">Interactive patient entry & record management</p>
        </div>
        <button
          type="button"
          onClick={viewStaff}
          className="px-3.5 py-1.5 rounded-lg bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 text-purple-300 font-mono text-xs cursor-pointer transition-all"
        >
          View Shift Ledger
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-4 font-mono text-xs text-zinc-400">
          <div className="space-y-1.5">
            <label className="text-zinc-500 block uppercase tracking-wider">Patient Name</label>
            <input
              type="text"
              value={patientName}
              onChange={e => setPatientName(e.target.value)}
              placeholder="e.g. Ali Ahmed"
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-white outline-none focus:border-purple-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-zinc-500 block uppercase tracking-wider">Age</label>
              <input
                type="number"
                value={age}
                onChange={e => setAge(e.target.value)}
                placeholder="e.g. 24"
                className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-white outline-none focus:border-purple-500 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-500 block uppercase tracking-wider">Disease</label>
              <select
                value={disease}
                onChange={e => setDisease(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-white outline-none focus:border-purple-500 transition-all cursor-pointer"
              >
                <option value="General Checkup">Checkup</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedic">Orthopedic</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-zinc-500 block uppercase tracking-wider">Assigned Physician</label>
            <select
              value={doctor}
              onChange={e => setDoctor(e.target.value)}
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-white outline-none focus:border-purple-500 transition-all cursor-pointer"
            >
              <option value="Dr. Tayyab (Senior Data Advisor)">Dr. Tayyab (Senior Data Advisor)</option>
              <option value="Dr. Jinnah (General Medicine)">Dr. Jinnah (General Medicine)</option>
              <option value="Dr. Sahiwal (Cardiac Expert)">Dr. Sahiwal (Cardiac Expert)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold tracking-wide hover:from-purple-500 transition-all shadow-[0_4px_15px_rgba(139,92,246,0.2)] cursor-pointer"
          >
            Register Patient Slot
          </button>
        </form>

        {/* Live Simulator Log console */}
        <div className="flex flex-col h-60 bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden font-mono text-[11px] text-zinc-300">
          <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-zinc-500">
            <span>hms_runtime_output.log</span>
            <button
              type="button"
              onClick={() => setLogs(["Console cleared. Runtime active."])}
              className="text-[10px] text-zinc-600 hover:text-purple-400 transition-colors cursor-pointer"
            >
              Clear
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto space-y-1.5 leading-relaxed custom-scrollbar bg-black/40">
            {logs.map((log, i) => (
              <div key={i} className={log.includes("SUCCESS") ? "text-emerald-400" : log.includes("WARNING") ? "text-amber-500" : "text-zinc-400"}>
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   8. Bayes Diagnostic Calculator (🔬)
   ========================================================================== */
function BayesDiagnosticCalculator() {
  const [prior, setPrior] = useState<number>(0.01); // P(Disease)
  const [sensitivity, setSensitivity] = useState<number>(0.95); // P(Pos | Disease)
  const [specificity, setSpecificity] = useState<number>(0.90); // P(Neg | No Disease)

  // Math equations calculation:
  // P(Pos | No Disease) = 1 - Specificity
  const falsePositiveRate = 1 - specificity;
  
  // Total Probability P(Pos) = P(Pos|Disease)*P(Disease) + P(Pos|No Disease)*P(No Disease)
  const totalPositiveProb = (sensitivity * prior) + (falsePositiveRate * (1 - prior));
  
  // Posterior P(Disease | Pos) = (P(Pos | Disease) * P(Disease)) / P(Pos)
  const posterior = totalPositiveProb > 0 ? (sensitivity * prior) / totalPositiveProb : 0;

  return (
    <div className="space-y-6">
      <div className="border-b border-purple-500/10 pb-4">
        <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">Bayesian Medical Inference Engine</h4>
        <p className="text-xs text-zinc-500">Calculate P(Disease | Positive Diagnostic Test Result) step-by-step</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4 font-mono text-xs text-zinc-400">
          <div className="space-y-2">
            <div className="flex justify-between text-[11px]">
              <span className="uppercase tracking-wider">Prior Probability P(Disease)</span>
              <span className="text-purple-400 font-bold">{(prior * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.001"
              max="0.1"
              step="0.001"
              value={prior}
              onChange={e => setPrior(parseFloat(e.target.value))}
              className="w-full accent-purple-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-zinc-500">The base prevalence of the condition in the overall population.</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[11px]">
              <span className="uppercase tracking-wider">Sensitivity P(Positive | Disease)</span>
              <span className="text-purple-400 font-bold">{(sensitivity * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="0.999"
              step="0.005"
              value={sensitivity}
              onChange={e => setSensitivity(parseFloat(e.target.value))}
              className="w-full accent-purple-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-zinc-500">The probability that the diagnostic test correctly returns positive when condition is present.</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[11px]">
              <span className="uppercase tracking-wider">Specificity P(Negative | No Disease)</span>
              <span className="text-purple-400 font-bold">{(specificity * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="0.999"
              step="0.005"
              value={specificity}
              onChange={e => setSpecificity(parseFloat(e.target.value))}
              className="w-full accent-purple-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-zinc-500">The probability that the test correctly returns negative when condition is absent.</p>
          </div>
        </div>

        {/* Calculations / Probability Chart Output */}
        <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl space-y-4">
          <div className="text-center py-2">
            <span className="block text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-1">Posterior Probability P(Disease | Positive)</span>
            <span className="text-4xl font-extrabold font-mono text-emerald-400">
              {(posterior * 100).toFixed(2)}%
            </span>
          </div>

          {/* Graphical Bar */}
          <div className="space-y-1">
            <div className="h-3 w-full bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden flex animate-pulse">
              <div className="bg-emerald-500 transition-all duration-300" style={{ width: `${posterior * 100}%` }} />
              <div className="bg-zinc-800 flex-1" />
            </div>
            <div className="flex justify-between font-mono text-[9px] text-zinc-500">
              <span>0% (Low Risk)</span>
              <span>100% (High Risk)</span>
            </div>
          </div>

          {/* Mathematical breakdown */}
          <div className="border-t border-zinc-900/60 pt-3 font-mono text-[11px] text-zinc-400 space-y-1.5">
            <div className="flex justify-between">
              <span>False Positive Rate:</span>
              <span className="text-amber-500">{(falsePositiveRate * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span>Overall P(Positive Test):</span>
              <span className="text-purple-400">{(totalPositiveProb * 100).toFixed(2)}%</span>
            </div>
            <div className="bg-black/40 p-2.5 rounded-lg border border-purple-500/5 text-[10px] leading-relaxed text-zinc-500 mt-2">
              <span className="text-purple-300 block font-bold mb-1">Inference Insight:</span>
              Even with high sensitivity ({(sensitivity * 100).toFixed(0)}%), because the condition prevalence is low ({(prior * 100).toFixed(1)}%), a positive test result only yields a <span className="text-emerald-400 font-bold">{(posterior * 100).toFixed(1)}%</span> actual disease probability. This is the classical "False Positive Paradox".
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
