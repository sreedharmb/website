// All personal content lives here so the pages stay easy to update.

export const profile = {
  name: 'Sreedhar M B',
  headline: 'Engineering Leader · Applied AI & Platform · Hands-on Builder',
  role: 'Chief Technology Officer at KNOLSKAPE',
  location: 'Bengaluru, India',
  email: 'sreedhar.badrim@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sreedharmb/',
    github: 'https://github.com/sreedharmb',
  },
  intro:
    'I build B2B SaaS and ship generative AI to production. For 13 years I have grown with KNOLSKAPE, from Software Engineer to CTO, and I still prototype AI applications with my own hands.',
  about: [
    'I am an engineering leader with 13 years of experience building B2B SaaS for Fortune 500 enterprises. At KNOLSKAPE I was promoted six times, from Software Engineer to Chief Technology Officer.',
    'Today I lead a 20+ person engineering, AI, data, DevOps and QA organisation through two engineering managers and five tech leads. I own the technology budget, vendor relationships and hiring, and I lead the company’s SOC 2, ISO 27001 and ISO 42001 (AI governance) programmes.',
    'I stay hands-on with generative AI. My teams ship LLM products to production (RAG, voice roleplay with streaming speech-to-text and text-to-speech, and agents), and I personally prototype AI applications. I also drive AI adoption beyond engineering: marketing at KNOLSKAPE now builds the company website with AI tools, and our internal agents save around 60 hours a week.',
    'Earlier, I proposed and built the company’s data analytics platform from scratch. It is now the core of the talent-analytics product we sell to customers.',
  ],
};

export const highlights = [
  { value: '13 yrs', label: 'building B2B SaaS for Fortune 500 enterprises' },
  { value: '6×', label: 'promoted, from Software Engineer to CTO' },
  { value: '20+', label: 'engineers across platform, AI, data, DevOps & QA' },
  { value: '30%', label: 'cloud cost cut with automated right-sizing' },
];

export type Role = {
  title: string;
  period: string;
  points: string[];
};

export const company = {
  name: 'KNOLSKAPE Solutions',
  blurb: 'B2B SaaS for learning & development and HR tech, serving Fortune 500 clients · Bengaluru',
};

export const roles: Role[] = [
  {
    title: 'Chief Technology Officer',
    period: 'Jul 2024 – Present',
    points: [
      'Lead 20+ engineers across platform, AI & data, DevOps, QA and IT through 2 engineering managers and 5 tech leads; work directly with the CEO on technology strategy.',
      'Cut cloud cost by 30% by automating GKE node and workload right-sizing with CAST AI, adopting committed-use discounts and moving stateless services to Cloud Run.',
      'Shipped LLM-powered products to Fortune 500 customers: an AI simulation engine, LLM-driven simulation authoring, personalised learning paths and voice-based AI roleplay (streaming STT → LLM → TTS).',
      'Drove company-wide AI adoption: marketing now maintains the company website with AI coding tools, cutting update time from 5 days to 5 hours.',
      'Built internal AI skills and agents, including brand-compliant slide-deck generation and a compliance guidance agent, saving ~60 hours per week.',
      'Set up the AI engineering practice: RAG pipelines (LlamaIndex, vector database), prompt standards, and quality checks with human review and A/B tests.',
      'Led SOC 2 Type II, ISO 27001 and GDPR compliance end to end; now leading ISO/IEC 42001 (AI management system) certification.',
      'Halved release cycle time by rebuilding the quality pipeline around automated testing, and rolled out Grafana/Prometheus observability, cutting incident response time by 40%.',
    ],
  },
  {
    title: 'Director of Engineering',
    period: 'Nov 2022 – Jul 2024',
    points: [
      'Grew engineering from 12 to 20+ engineers with 95% retention; introduced architecture reviews and engineering standards.',
      'Introduced vector database infrastructure, model evaluation pipelines and AI-aware delivery processes, enabling the company’s first LLM product launches in 2024.',
    ],
  },
  {
    title: 'Engineering Manager',
    period: 'Apr 2020 – Nov 2022',
    points: [
      'Managed 12 engineers delivering analytics and simulation products; ran hiring; introduced SonarQube-based code quality gates and Scrum.',
    ],
  },
  {
    title: 'Development Manager',
    period: 'Feb 2018 – Apr 2020',
    points: [
      'Proposed and built the central data analytics platform from scratch on a low budget (Kinesis Firehose, S3, Lambda, SQS, Airflow, PySpark, Postgres, Hasura GraphQL). It now powers customer-facing talent analytics.',
    ],
  },
  {
    title: 'Team Lead',
    period: 'Apr 2015 – Jan 2018',
    points: [
      'Led delivery of simulation products; built shared microservices (email, file upload, HTML-to-PDF) and moved the team from SVN to Git.',
    ],
  },
  {
    title: 'Software Engineer',
    period: 'Jun 2013 – Apr 2015',
    points: [
      'Built early simulation products: mathematical models of behavioural frameworks, canvas-based storytelling and gamification.',
    ],
  },
];

export type Project = {
  title: string;
  year: string;
  summary: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Voice AI roleplay',
    year: '2025 – 2026',
    summary:
      'A real-time voice roleplay prototype on Azure AI, combining an LLM with speech-to-text, text-to-speech and content-safety guardrails, built to inform a build-and-ship decision.',
    tags: ['Azure AI', 'LLM', 'STT / TTS', 'Guardrails'],
  },
  {
    title: 'AI chief of staff',
    year: '2025 – 2026',
    summary:
      'A personal chief-of-staff agent that prepares me for meetings, writes briefs and tracks follow-ups.',
    tags: ['Agents', 'LLM'],
  },
  {
    title: 'Product modernisation',
    year: '2025 – 2026',
    summary:
      'Re-imagined a legacy KNOLSKAPE product with LLM capabilities and migrated its JavaScript backend to TypeScript, built with AI coding tools.',
    tags: ['TypeScript', 'LLM', 'Claude Code'],
  },
  {
    title: 'Data analytics platform',
    year: '2018 – 2020',
    summary:
      'Designed and built KNOLSKAPE’s central analytics platform from scratch. It doubled ETL throughput and became the core of the customer-facing talent-analytics product.',
    tags: ['AWS', 'Airflow', 'PySpark', 'GraphQL'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Applied AI',
    items: ['LLM applications', 'RAG (LlamaIndex, vector DBs)', 'Agents', 'Evals', 'Prompt engineering', 'Streaming voice (STT/TTS)', 'Azure AI', 'Vertex AI', 'Claude Code'],
  },
  {
    group: 'Backend & Data',
    items: ['Python', 'TypeScript / Node.js', 'React', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Airflow', 'PySpark', 'Databricks'],
  },
  {
    group: 'Cloud & Ops',
    items: ['GCP (GKE, Cloud Run)', 'AWS', 'Kubernetes', 'Docker', 'CAST AI', 'Grafana', 'Prometheus'],
  },
  {
    group: 'Security & Compliance',
    items: ['SOC 2 Type II', 'ISO 27001', 'ISO/IEC 42001', 'GDPR'],
  },
  {
    group: 'Leadership',
    items: ['Org design', 'Hiring', 'Budget & vendor management', 'Executive & client communication'],
  },
];

export const education = {
  degree: 'M.S. (Integrated) Software Engineering',
  school: 'VIT University, Vellore',
  period: '2008 – 2013',
  note: 'Internships at Trimble (iOS, GPS & indoor navigation) and CDAC Hyderabad (computer vision).',
};
