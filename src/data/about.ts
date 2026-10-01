// data/aboutData.ts
import { CurrentActivity, Track } from "../types/about";

export const personalInfo = {
  location: "Bhilai, India",
  description:
    "Building backend systems, distributed databases, and AI-powered tools. Final-year DSAI at IIT Bhilai with 9.16 CGPA. Software Engineer Intern at Emergent as a Polaris Fellow. Led OpenLake (open-source society at IIT Bhilai) as Coordinator. Selected for LFX at RSTUF (supply-chain security), three MOSIP cohorts (digital identity), and OSDAG @ FOSSEE/IIT Bombay; interned at HSBC Technology India.",
};

export const bioData = {
  paragraphs: [
    "I'm a final-year student in Data Science and AI at IIT Bhilai with a CGPA of 9.16, currently spending my seventh semester in Bengaluru as a Polaris Fellow at Emergent, working on agent infrastructure: replay and evaluation tooling for agent runs and browser-testing tools for the agent runtime. I focus on backend systems, distributed systems, and building tools that solve real problems. My work spans from implementing network protocols from scratch to building microservices platforms and LLM-powered analysis tools.",
    "As Coordinator of OpenLake — the open-source society at IIT Bhilai — I led the organization for a year, setting technical roadmaps for active projects, organizing workshops and hackathons, and mentoring juniors into productive contributors.",
    "I've completed multiple competitive open-source selections: three consecutive MOSIP cohorts through C4GT (Sprint, DMP and Project), with 11 merged PRs into Inji Certify covering W3C BitString Status List revocation, ISO/IEC 18013-5 mDoc issuance, and the OpenID4VCI Pre-Authorized Code flow; a FOSSEE Summer Fellowship at IIT Bombay working on OSDAG; and the Linux Foundation's LFX Mentorship Program through OpenSSF, where I built role-specific online keys for custom TUF delegations across the Repository Service for TUF (RSTUF) worker, API and CLI. Before Emergent I spent the summer of 2026 as an intern at HSBC Technology India in Pune.",
    "My own projects include ACORDE (a CRDT-based distributed data sync engine with libp2p), Agent-Control-Plane (a durable execution coordinator for fleets of AI agents), HalfLife (temporal reranking for RAG, on PyPI as halflife-rag), a from-scratch BitTorrent client in Go, and a disk-backed B+ tree in C++.",
    "When I'm not coding, I'm probably analyzing data, gaming (Minecraft, Pokemon), or organizing my knowledge in Obsidian.",
  ],
};

export const journeyData = {
  paragraphs: [
    "I got into programming during 11th and 12th grade with Python, and the logical problem-solving clicked immediately. By the time I entered IIT Bhilai in 2023, I was hooked on competitive programming — grinding C/C++ on Codeforces.",
    "Second semester, I discovered web development and went from console applications to full-stack apps. The summer after first year covered a library automation internship at IBITF, exploring ElectronJS, picking up Flutter, and reading through OSTEP.",
    "Third semester, I learned Go and built AcadMap for our campus. Joining OpenLake opened my eyes to open-source culture. I studied Deep Learning, learned Docker, and started thinking about systems at scale.",
    "Fourth semester brought my first MOSIP selection through C4GT — enterprise development, Spring Boot, and production-grade systems. I was also named Coordinator of OpenLake and started building my BitTorrent client from scratch.",
    "Summer after second year, I interned at FOSSEE (IIT Bombay) while doing my second MOSIP selection. Built the BitTorrent client to completion, started reading about distributed systems, and wrote CI/CD templates for the organization.",
    "Third year brought my third MOSIP cohort, ACORDE, HalfLife and Agent-Control-Plane. In summer 2026 I interned at HSBC in Pune, did the LFX mentorship at RSTUF in the evenings, and was selected as one of 10 Polaris Fellows. Now in my final year at 9.16 CGPA, I'm at Emergent in Bengaluru working on agent infrastructure.",
  ],
};

export const skillsData = [
  {
    title: "Systems Programming",
    description:
      "Go, C/C++ — building protocols (BitTorrent), distributed systems (ACORDE with libp2p/CRDTs), and data structures (B+ Trees) from scratch.",
  },
  {
    title: "Backend Development",
    description:
      "Next.js, FastAPI, Node.js, NestJS — microservices with gRPC, REST APIs, PostgreSQL, and Supabase.",
  },
  {
    title: "Database Systems",
    description:
      "PostgreSQL, MongoDB, SQLite, Neo4j — schema design through building indexes and query optimizers from scratch.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "LLMs, RAG pipelines, meta-learning, semantic search — practical ML with vector databases and knowledge graphs.",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Docker, CI/CD pipelines, GitHub Actions — standardized templates across organization repositories.",
  },
  {
    title: "Open Source",
    description:
      "Led OpenLake (IIT Bhilai) as Coordinator. Technical roadmaps, workshops, mentoring, org-wide automation.",
  },
];

export const beyondCodeData = {
  content:
    "A data geek who can't resist analyzing patterns — whether it's personal activity tracking or game performance metrics. I organize everything in Obsidian with custom workflows. Outside of screens: Minecraft, Pokemon, coffee.",
};

export const getMockCurrentActivity = (): CurrentActivity => ({
  status: "building",
  project: "agent infra @ Emergent",
  link: "https://emergent.sh",
  language: "Go + TypeScript + Python",
});

export const getMockCurrentTrack = (): Track => ({
  name: "Weightless",
  artist: "Marconi Union",
  album: "Ambient Soundscapes",
  isPlaying: true,
});

export const achievementsData = [
  "CGPA 9.16 @ IIT Bhilai (Data Science & AI)",
  "Coordinator @ OpenLake (1 year)",
  "Polaris Fellow 2026 (1 of 10) @ Emergent",
  "LFX Mentee @ RSTUF, OpenSSF",
  "Three MOSIP C4GT cohorts, 11 merged PRs",
  "FOSSEE Summer Fellow @ IIT Bombay",
  "BitTorrent Client from scratch in Go",
  "ISO/IEC 18013-5 mDoc implementation at MOSIP",
];

export const learningData = [
  "Distributed Consensus",
  "Database Internals",
  "Rust Systems Programming",
  "Advanced RAG Systems",
];

export const quickLinksData = [
  {
    href: "https://github.com/amaydixit11",
    label: "GitHub Profile",
    icon: "github" as const,
    external: true,
  },
  {
    href: "https://codeforces.com/profile/amaydixit11",
    label: "Codeforces",
    icon: "code" as const,
    external: true,
  },
  {
    label: "Always up for coffee \u2615",
    icon: "coffee" as const,
  },
];
