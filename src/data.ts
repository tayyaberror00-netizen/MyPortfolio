import { TechItem, Milestone, Project, EducationStage, CertificationItem, AcademicProject, ExtraCurricular } from './types';

export const PERSONAL_INFO = {
  name: "Muhammad Tayyab Younas",
  title: "Data Scientist & Full-Stack Developer",
  location: "M.A. Jinnah Road, Okara, Punjab, Pakistan",
  mobile: "+92-320-7878081",
  email: "younastayyab973@gmail.com",
  cgpa: "4.0 / 4.0",
  linkedin: "https://www.linkedin.com/in/tayyab-younas-05b068389",
  github: "https://github.com/younastayyab973-arch",
  academicMotto: "Bridging the gap between advanced mathematical probability and highly interactive animated web applications."
};

export const TECH_STACK: TechItem[] = [
  // Coding Languages
  { id: '1', name: 'Python', shortName: 'PY', category: 'Backend', role: 'Machine Learning & Analytics', color: 'from-blue-500 to-yellow-500' },
  { id: '2', name: 'JavaScript', shortName: 'JS', category: 'Frontend', role: 'Interactive Systems', color: 'from-yellow-400 to-amber-500' },
  { id: '3', name: 'SQL', shortName: 'SQ', category: 'Backend', role: 'Database Queries', color: 'from-sky-400 to-blue-700' },
  { id: '4', name: 'C++', shortName: 'C+', category: 'Backend', role: 'System Programming', color: 'from-indigo-400 to-blue-600' },
  { id: '5', name: 'C Language', shortName: 'C', category: 'Backend', role: 'Procedural Logic', color: 'from-zinc-400 to-zinc-600' },
  { id: '6', name: 'HTML & CSS', shortName: 'H5', category: 'Frontend', role: 'Structural Styling', color: 'from-orange-500 to-purple-600' },

  // Software & Ecosystem
  { id: '7', name: 'VS Code', shortName: 'VS', category: 'Tools', role: 'Core IDE Environment', color: 'from-blue-500 to-sky-600' },
  { id: '8', name: 'Adobe Creative', shortName: 'CC', category: 'Tools', role: 'Visual Illustration', color: 'from-red-500 to-pink-600' },
  { id: '9', name: 'Microsoft Office', shortName: 'MS', category: 'Tools', role: 'Documentation & Sheets', color: 'from-orange-600 to-amber-600' },
  { id: '10', name: 'Wix Editor', shortName: 'WX', category: 'Tools', role: 'No-Code Assembly', color: 'from-zinc-100 to-zinc-400' },
  { id: '11', name: 'Replit', shortName: 'RP', category: 'Tools', role: 'Cloud Environment', color: 'from-red-400 to-orange-500' },

  // Core Competencies
  { id: '12', name: 'AI Technologies', shortName: 'AI', category: 'Frontend', role: 'Predictive Inference', color: 'from-purple-500 to-pink-500' },
  { id: '13', name: 'AR Technologies', shortName: 'AR', category: 'Frontend', role: 'Augmented Projections', color: 'from-fuchsia-500 to-indigo-500' },
  { id: '14', name: 'WordPress', shortName: 'WP', category: 'Tools', role: 'CMS Development', color: 'from-blue-600 to-cyan-500' },
  { id: '15', name: 'Animated UI', shortName: 'UI', category: 'Frontend', role: 'Interactive Motion', color: 'from-purple-600 to-indigo-600' }
];

export const EDUCATION: EducationStage[] = [
  {
    period: "Present (Semester-2)",
    degree: "BS Mathematics with Data Science",
    institution: "COMSATS University Islamabad, Sahiwal Campus",
    score: "4.0 / 4.0 CGPA"
  },
  {
    period: "Sep 2023 – Aug 2025",
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Punjab Group of Colleges, Okara",
    score: "1098 / 1100 Marks"
  },
  {
    period: "Aug 2021 – July 2023",
    degree: "Matriculation in Biological Sciences",
    institution: "Govt. M.C. High School, Okara",
    score: "1003 / 1100 Marks"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    date: "May 2026",
    title: "How to Start Your Journey as an International Reviewer: Practical Tips & Insights – HEC & Emerald Publishing"
  },
  {
    date: "July 2025",
    title: "Participation in Table Tennis Tournament (Khelta Punjab Provisional Level Sports Tournament)"
  },
  {
    date: "Feb 2025",
    title: "1st Position in Table Tennis Tournament (District Level) – BISE Sahiwal"
  },
  {
    date: "July 2024",
    title: "1st Position in Essay Writing Competition – BISE Sahiwal"
  },
  {
    date: "Jan 2024",
    title: "Certificate of Excellence – Quaid‑e‑Azam Scouts Military Exam, Pakistan"
  }
];

export const EXPERIENCE_TIMELINE: Milestone[] = [
  {
    id: 'm1',
    year: 'Jun 2026',
    title: 'SurvAI Developer (Predictive Risk Modeling)',
    company: 'SurvAI Systems',
    responsibilities: [
      'Engineered a custom Naive Bayes predictive machine to assess micro-business survival probability coordinates.',
      'Developed data-generation systems evaluating risks based on multivariate distribution equations.',
      'Refined analytics performance inside VS Code using advanced Python probability libraries.'
    ],
    toolsUsed: ['Python', 'NumPy', 'Pandas', 'SciPy', 'JSON', 'VS Code']
  },
  {
    id: 'm2',
    year: 'April 2026',
    title: 'Diabetes Risk Pattern-Matcher Architect',
    company: 'Health Statistics Platform',
    responsibilities: [
      'Programmed a Streamlit web application applying Bayes\' Theorem for pattern-matching user diagnostic features.',
      'Evaluated cumulative density curves under normal distribution algorithms mapped to historical research.',
      'Visualized risk profiles using high-fidelity Plotly matrices.'
    ],
    toolsUsed: ['Python', 'Streamlit', 'Plotly', 'NumPy', 'Pandas', 'SciPy', 'VS Code']
  },
  {
    id: 'm3',
    year: 'Feb 2026',
    title: 'Project Leader & Core Developer',
    company: 'FoodLion Delivery',
    responsibilities: [
      'Built a responsive web interface highlighting real-time food models and dynamic transition patterns.',
      'Integrated Hugging Face API pipelines with client-side interactive JS states.',
      'Coordinated the deployment and assembly process.'
    ],
    toolsUsed: ['JavaScript', 'CSS', 'VS Code', 'HTML', 'Wix', 'Hugging Face']
  },
  {
    id: 'm4',
    year: 'Jan 2026',
    title: 'AI Virtual Space Project Leader',
    company: 'Vital Hub Systems',
    responsibilities: [
      'Formulated an intelligent AI writing companion optimized for health gadgets commerce.',
      'Created a Virtual 3D client-facing sandbox environment simulating active device inputs.',
      'Connected responsive HTML widgets with cloud inference pipelines.'
    ],
    toolsUsed: ['JavaScript', 'CSS', 'VS Code', 'HTML', 'Wix', 'Hugging Face']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    emoji: '📊',
    title: 'SurvAI Survival Engine',
    description: 'A predictive micro-business engine leveraging Naive Bayes probability modeling and multivariate random variable generators to assess and simulate business survival thresholds across industry sectors.',
    tags: ['Python', 'NumPy', 'SciPy', 'Predictive Engine'],
    codeUrl: 'https://github.com/younastayyab973-arch/micro_business_predictor',
    liveUrl: '#live-survai',
    objective: 'Develop a Naive Bayes predictive engine and data-generation system to assess and evaluate micro-business survival risk using advanced probability distributions.',
    toolsUsed: ['Python', 'NumPy', 'Pandas', 'SciPy', 'JSON', 'VS Code']
  },
  {
    id: 'p2',
    emoji: '🧠',
    title: 'Diabetes Risk Pattern-Matcher',
    description: 'An educational statistical web app applying Bayes\' Theorem and Gaussian Normal Distributions to cross-reference user health diagnostics with historical research datasets and plot curve fits.',
    tags: ['Python', 'Streamlit', 'Plotly', 'SciPy'],
    codeUrl: 'https://github.com/younastayyab973-arch/diabetes-risk-matcher',
    liveUrl: '#live-diabetes',
    objective: 'Build an educational statistical web application that applies Bayes\' Theorem and normal distributions to match health data patterns against historical research datasets.',
    toolsUsed: ['Python', 'Streamlit', 'Plotly', 'NumPy', 'Pandas', 'SciPy', 'VS Code']
  },
  {
    id: 'p3',
    emoji: '🦁',
    title: 'FoodLion Realtime Delivery',
    description: 'An interactive favorite food delivery site featuring full-stack layout components, asynchronous client-side state transitions, and real-time food display representations using Hugging Face.',
    tags: ['JavaScript', 'Hugging Face', 'HTML5', 'CSS3'],
    codeUrl: 'https://github.com/younastayyab973-arch/FoodLion-Fullstack',
    liveUrl: '#live-foodlion',
    objective: 'Build a favorite food delivery site that show realtime food model.',
    toolsUsed: ['JavaScript', 'CSS', 'VS Code', 'HTML', 'Wix', 'Hugging Face']
  },
  {
    id: 'p4',
    emoji: '⚡',
    title: 'Vital Hub Health Gadgets',
    description: 'An intelligent AI writing companion and Virtual 3D client-facing sandbox environment simulating active device inputs and health store metrics.',
    tags: ['JavaScript', 'Hugging Face', 'Wix', '3D Sandbox'],
    codeUrl: 'https://github.com/younastayyab973-arch/VitalHub',
    liveUrl: '#live-vitalhub',
    objective: 'Create an AI writing assistant and Virtual 3D environment for my health gadgets stores.',
    toolsUsed: ['JavaScript', 'CSS', 'VS Code', 'HTML', 'Wix', 'Hugging Face']
  },
  {
    id: 'p5',
    emoji: '🏥',
    title: 'Hospital Management System',
    description: 'A robust medical console ledger engineered in C++ utilizing Object-Oriented structures, class encapsulations, and binary file handling for data storage.',
    tags: ['C++', 'OOP', 'Data Structures', 'Console UI'],
    codeUrl: 'https://github.com/younastayyab973-arch/Hospital-Management-System-CPP-1',
    liveUrl: '#live-hms',
    objective: 'Create a robust C++ console application utilizing object-oriented programming to handle hospital data records, scheduling, and transactions.',
    toolsUsed: ['C++', 'VS Code', 'OOP', 'File Handling']
  },
  {
    id: 'p6',
    emoji: '🔬',
    title: 'Bayes Theorem Diagnostic',
    description: 'A specialized diagnostic system executing posterior probability math calculations to analyze and match medical path records with target vectors.',
    tags: ['Python', 'Bayesian Inference', 'Data Analysis'],
    codeUrl: 'https://github.com/younastayyab973-arch/Bayes-Theorem-Medical-Diagnostic-Python',
    liveUrl: '#live-bayes-med',
    objective: 'Build a Python application executing advanced Bayes\' Theorem formulas to classify and diagnose medical risk scenarios.',
    toolsUsed: ['Python', 'NumPy', 'Pandas', 'VS Code']
  },
  {
    id: 'p7',
    emoji: '🌌',
    title: 'Substance Dualism Research',
    description: 'Authored philosophical defense arguing the human brain acts as an instrument for an immaterial soul, synthesizing Avicenna\'s Floating Man proof with analytical frameworks.',
    tags: ['Philosophy', 'Neuroscience', 'Theology', 'Research'],
    codeUrl: 'https://github.com/younastayyab973-arch/substance-dualism-paper',
    liveUrl: '#live-dualism',
    objective: 'Authored a comprehensive philosophical and theological defense arguing that the human brain functions as an instrument for an immaterial soul rather than the generator of consciousness.',
    toolsUsed: ['Analytical Philosophy', 'Avicenna Framework', 'Scriptural Texts']
  },
  {
    id: 'p8',
    emoji: '⚖️',
    title: 'Constitutional Dilemma Analysis',
    description: 'Structural policy review analyzing socioeconomic gaps in Pakistan\'s constitutional economic justice mandates. Synthesizes Shariat FSC Riba rulings and proposes reforms.',
    tags: ['Policy', 'Islamic Finance', 'Constitutional Law'],
    codeUrl: 'https://github.com/younastayyab973-arch/constitutional-dilemma-review',
    liveUrl: '#live-dilemma',
    objective: 'Conducted a structural policy review examining the legal and socio-economic gaps between Pakistan\'s constitutional mandates for Islamic economic justice and current financial implementations.',
    toolsUsed: ['Policy Review', 'Legal Analysis', 'Riba Rulings Evaluation']
  }
];

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    period: "Spring 2026",
    title: "Substance Dualism Research Paper",
    role: "Primary Researcher",
    objective: "Authored a comprehensive philosophical and theological defense arguing that the human brain functions as an instrument for an immaterial soul rather than the generator of consciousness.",
    coreFocus: "Evaluated the \"explanatory gap\" and transmission theories by synthesizing Western analytic frameworks with Avicenna’s Floating Man thought experiment and Islamic scriptural texts."
  },
  {
    period: "Spring 2026",
    title: "Constitutional Dilemma Analysis",
    role: "Policy Researcher",
    objective: "Conducted a structural policy review examining the legal and socio-economic gaps between Pakistan's constitutional mandates for Islamic economic justice and current financial implementations.",
    coreFocus: "Analyzed the decades-long legal evolution of Federal Shariat Court rulings on Riba, identified structural vulnerabilities in the Zakat and Ushr systems, and proposed actionable legislative reforms."
  }
];

export const EXTRA_CURRICULARS: ExtraCurricular[] = [
  {
    period: "Nov 2020 – Present",
    organization: "Shoukat Ali Table Tennis Academy",
    details: [
      "Active member of sports society and table tennis team for 6 years.",
      "Coordinated cricket tournaments and athletics for 2 years.",
      "Highly passionate about cricket and table tennis."
    ]
  }
];
