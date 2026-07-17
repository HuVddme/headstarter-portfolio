export const profile = {
  name: "Valentine Ezikeoha",
  firstName: "Valentine",
  roles: ["Software Engineer", "Problem Solver"],
  location: "Washington, D.C.",
  headshot: "/headshot.jpg",
  // Drop your resume PDF into the `public/` folder and point this to it.
  resume: "/resume.pdf",
  resumeFileName: "Valentine-Ezikeoha-Resume.pdf",
  about: [
    "I'm a software engineer driven by a genuine curiosity for AI/ML and full-stack development, and by the belief that technology can be a real force for change. I love the process of building, learning, and turning fresh ideas into solutions that tackle real-world problems."
  ],
};

export const experiences = [
  {
    role: "Undergraduate Researcher",
    company: "Howard University Research",
    location: "Washington, D.C.",
    period: "Sept 2025 – May 2026",
    points: [
      "Improved Alzheimer's prediction models by training ML models on acoustic-linguistic features, reducing RMSE by 25%+ over baseline.",
      "Engineered multimodal machine learning pipelines integrating speech audio and natural language features for robust multilingual inference.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Intuit",
    location: "Mountain View, CA",
    period: "May 2025 – Aug 2025",
    points: [
      "Developed scalable automation infrastructure for QuickBooks Online using TypeScript and Playwright, increasing test coverage across 40+ production user workflows.",
      "Engineered maintainable automation frameworks to validate complex role-based access control, reducing manual testing effort while improving software reliability.",
      "Collaborated with cross-functional engineering teams to translate customer feedback into production bug fixes and improved user experience.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Howard University Research",
    location: "Washington, D.C.",
    period: "Jun 2024 – Dec 2024",
    points: [
      "Optimized neural text-to-speech pipelines by improving multilingual audio preprocessing and text segmentation, reducing synthesis artifacts in long-form speech.",
      "Improved speech model accuracy by 20% by preprocessing audio data and extracting high-fidelity speaker embeddings for multilingual synthesis.",
    ],
  },
];

export const projects = [
  {
    name: "Buddy's Brain",
    icon: "brain",
    tagline: "Winner — BisonBytes AI Track Hackathon",
    description:
      "An AI-powered educational assistant that retrieves answers 3x faster through semantic vector search and GPT-4o integration, wrapped in an accessible, responsive React interface.",
    tech: ["React", "FastAPI", "Vercel"],
    href: "https://buddys-brain-alpha.vercel.app/",
  },
  {
    name: "FinBuddy",
    icon: "finance",
    tagline: "Financial literacy, made personal",
    description:
      "An interactive financial literacy app that uses an LLM API to deliver personalized financial advice, simplifying complex topics and increasing user engagement by 30%.",
    tech: ["Python", "React", "Vercel"],
    href: "https://finbuddy.vercel.app/",
  },
  {
    name: "RoboControl",
    icon: "robot",
    tagline: "Real-time robot control interface",
    description:
      "A web interface for controlling and monitoring a robot in real time, focused on a clean, responsive control panel and a smooth operator experience.",
    tech: ["React", "Vercel"],
    href: "https://robocontrol-g20.vercel.app/",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume", href: "/resume.pdf", external: true },
];

export const socials = [
  {
    id: "email",
    label: "Email",
    value: "valentineezikeoha@gmail.com",
    // Opens Gmail's compose window in a new tab (see note in Contact/Footer).
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=valentineezikeoha@gmail.com",
    icon: "email",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "valentine-ezikeoha",
    href: "https://www.linkedin.com/in/valentine-ezikeoha-46280424a/",
    icon: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    value: "HuVddme",
    href: "https://github.com/HuVddme",
    icon: "github",
  },
];
