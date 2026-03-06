const words = [
  { text: 'exploring', imgPath: '/images/ideas.svg' },
  { text: 'learning', imgPath: '/images/concepts.svg' },
  { text: 'solving', imgPath: '/images/ideas.svg' },
  { text: 'growing', imgPath: '/images/concepts.svg' },
  { text: 'creating', imgPath: '/images/ideas.svg' }
]

const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];



const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];


const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];


const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];

const timelineData = [
  {
    year: "2025",
    title: "Senior Developer",
    description: "Led development of scalable web applications and high-performance frontend architectures.",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    description: "Built reusable UI components and improved app performance by 30%.",
  },
  {
    year: "2021",
    title: "Intern",
    description: "Assisted in developing internal tools and learned agile methodologies.",
  },
];

const myProjects = [
  {
    id: "network-behavior-intelligence",
    title: 'Network Behavior Intelligence',
    subtitle: 'An exploratory system for behavioral network analysis',
    intent: 'Exploring how network behavior patterns can be learned, interpreted, and monitored in real time.',
    description: 'This project analyzes live network traffic to understand how a network normally behaves and highlights meaningful deviations using a combination of signal processing, machine learning, and contextual reasoning.',
    story: `This project began as a simple anomaly detection experiment during a hackathon, where I trained a basic machine learning model on network traffic metrics.

What started as a proof-of-concept quickly raised deeper questions:

• Why do some "anomalies" look suspicious but are actually harmless?
• How can a system understand structure in network behavior, not just volume spikes?
• Can anomaly detection be made interpretable, not just reactive?

Over time, I rebuilt the system end-to-end — refining data collection, introducing behavioral KPIs, adding contextual filters, and designing a dashboard that explains why the system believes something is normal or unusual.

This project reflects that evolution from model-centric thinking to system-level intelligence.`,
    whatBuilt: `I built a system that watches live network traffic and tries to understand how the network behaves, not just how busy it is.
Instead of looking at raw packets or payloads, it summarizes traffic into simple behavioral signals like flow patterns, packet rates, and diversity.

On top of that, I trained an unsupervised baseline model that learns what normal looks like for a given network.
Anything unusual is checked again using context rules so normal browsing or streaming doesn't get flagged.

The dashboard is meant to explain what's happening in plain terms, not just show alerts.
The focus is on sustained, structural changes, not random spikes.`,
    systemSteps: [
      {
        title: 'Live Traffic Capture',
        description: 'Network traffic is observed in real time using Tshark, extracting packet metadata without inspecting payloads.'
      },
      {
        title: 'Behavioral Windowing',
        description: 'Packets are aggregated into short time windows to summarize network behavior rather than individual packets.'
      },
      {
        title: 'KPI Feature Extraction',
        description: 'Each window is converted into behavioral metrics such as packet rate, flow count, protocol balance, and entropy.'
      },
      {
        title: 'Baseline Learning (Unsupervised ML)',
        description: 'An autoencoder learns what "normal" traffic looks like for this specific network without labeled attack data.'
      },
      {
        title: 'Anomaly Scoring',
        description: 'Deviations from the learned baseline are quantified using reconstruction error rather than fixed thresholds.'
      },
      {
        title: 'Persistence Filtering',
        description: 'Only sustained deviations across multiple windows are considered, reducing sensitivity to short spikes.'
      },
      {
        title: 'Contextual Interpretation',
        description: 'Rule-based filters distinguish benign activity (browsing, streaming) from structurally suspicious patterns.'
      },
      {
        title: 'Risk Assessment & Visualization',
        description: 'Interpretable risk levels and explanations are generated and visualized as a live behavioral timeline.'
      }
    ],
    techUsedList: ['Python', 'FastAPI', 'PyTorch', 'Wireshark', 'Tshark', 'Next.js', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Unsupervised Learning', 'Network Telemetry'],
    github: 'https://github.com/Pratishtha-sh/Network-Behavior-Intelligence',
    images: [
      { url: '/images/network-analyser/Screenshot 2026-01-16 163613.png', caption: '' },
      { url: '/images/network-analyser/Screenshot 2026-01-16 155149.png', caption: '' },
      { url: '/images/network-analyser/Screenshot 2026-01-16 163719.png', caption: '' },
      { url: '/images/network-analyser/Screenshot 2026-01-16 163730.png', caption: '' }
    ],
    logo: '/images/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    }
  },
  {
    id: 'medbuddy',
    title: 'MedBuddy',
    subtitle: 'An AI-powered healthcare chatbot for reliable medical information',
    intent: 'Exploring how generative AI and retrieval systems can provide trustworthy, context-aware answers to health-related questions.',
    whatBuilt: `I built MedBuddy, an AI-powered medical assistant that answers healthcare-related questions using trusted medical knowledge rather than relying only on a language model’s internal data.

The system retrieves relevant information from a curated medical knowledge base derived from The Gale Encyclopedia of Medicine, then uses a language model to generate clear, contextual responses.

Instead of directly generating answers, the chatbot uses Retrieval-Augmented Generation (RAG) so responses stay grounded in verified medical information and reduce hallucinations.

The goal was to create a conversational tool that explains medical topics clearly while providing quick access to reliable healthcare knowledge.`,
    systemSteps: [
      {
        title: 'Knowledge Base Preparation',
        description: 'Medical content from The Gale Encyclopedia of Medicine is processed into structured documents used as the chatbot’s knowledge source.'
      },
      {
        title: 'Embedding Creation',
        description: 'Each document is converted into vector embeddings using sentence-transformer models to capture semantic meaning.'
      },
      {
        title: 'Vector Search',
        description: 'Embeddings are stored in a FAISS vector database, enabling fast similarity search when a user asks a question.'
      },
      {
        title: 'Query Retrieval',
        description: 'The user’s question is embedded and matched against the database to retrieve the most relevant medical passages.'
      },
      {
        title: 'Context-Aware Generation',
        description: 'The retrieved context is passed to the Mistral-7B-Instruct model, which generates responses grounded in the provided medical information.'
      },
      {
        title: 'Interactive Chat Interface',
        description: 'A Streamlit-based interface allows users to ask health-related questions and receive context-aware answers in real time.'
      }
    ],
    techUsedList: ['LangChain', 'Mistral-7B-Instruct', 'Hugging Face Transformers', 'FAISS Vector Store', 'Sentence Transformers', 'Streamlit', 'Retrieval-Augmented Generation (RAG)'],
    github: 'https://github.com/Pratishtha-sh/Medbuddy',
    images: [
      { url: '/images/spotlight5.png', caption: '' },
      { url: '/images/spotlight4.png', caption: '' }
    ],
    logo: '/images/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    }
  }
];

const certifications = [
  {
    title: "Vision Language Models (VLM) Bootcamp",
    issuer: "OpenCV University",
    certificateUrl: "/certificates/VLM Bootcamp Certificate  OpenCV.pdf",
    category: "default"
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    certificateUrl: "/certificates/Azure AI Fundamentals.pdf",
    category: "default"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    certificateUrl: "/certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
    category: "default"
  },
  {
    title: "Artificial Intelligence with Python (Training Completion)",
    issuer: "Coincent.ai",
    certificateUrl: "/certificates/Training Completion certificate.pdf",
    category: "default"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn",
    certificateUrl: "/certificates/Introduction to AI.pdf",
    category: "more"
  },
  {
    title: "What is Generative AI?",
    issuer: "LinkedIn",
    certificateUrl: "/certificates/CertificateOfCompletion_What Is Generative AI.pdf",
    category: "more"
  },
  {
    title: "Artificial Intelligence with Python (Participation)",
    issuer: "E-Cell IIT Madras",
    certificateUrl: "/certificates/Certification of Participation Artificial Intelligence and Python.pdf",
    category: "more"
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  timelineData,
  myProjects,
  certifications,
};

