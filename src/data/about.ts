// data/aboutData.ts
import { CurrentActivity } from "../types/about";

export const personalInfo = {
  location: "Bhilai, India",
  description:
    "Building backend systems, distributed databases, and AI-powered tools. Pre-final year DSAI at IIT Bhilai with 9.18 CGPA. Coordinator of OpenLake and Captain of the AWS Cloud Club at IIT Bhilai. Five competitive internship selections across three organizations: LFX at RSTUF (OpenSSF, supply-chain security), thrice at MOSIP (digital identity), and OSDAG @ FOSSEE, IIT Bombay.",
};

export const bioData = {
  paragraphs: [
    "I'm a pre-final year student in Data Science and AI at IIT Bhilai with a CGPA of 9.18. I focus on backend systems, distributed systems, and building tools that solve real problems. My work spans from implementing network protocols from scratch to building credential-issuance infrastructure and LLM-powered retrieval tools.",
    "As Coordinator of OpenLake — the open-source society at IIT Bhilai — I led the organization for a year: setting technical roadmaps, organizing workshops and hackathons, and mentoring juniors into productive contributors. I also captain the AWS Cloud Club on campus, and spoke at DPG Dialogues '25 about contributing to digital public goods.",
    "I've been selected for competitive open-source programs five times: three selections at MOSIP through C4GT (Sprint '25, DMP '25 — picked from 4000+ applicants — and a project internship), where I built W3C Verifiable Credentials 2.0 revocation, ISO/IEC 18013-5 mDoc issuance, and the OpenID4VCI pre-authorized code flow in Inji Certify; a FOSSEE Summer Fellowship at IIT Bombay working on Osdag; and the Linux Foundation's LFX Mentorship through OpenSSF, where I'm currently working on the Repository Service for TUF (RSTUF) — custom signing-key support, delegation, and Kubernetes/Helm integration of the TUF Metadata Visualizer.",
    "On my own time I build systems that scratch the same itch: ACORDE (a local-first CRDT sync engine over libp2p), HalfLife (a temporal-aware RAG reranker published on PyPI), a from-scratch BitTorrent client in Go, Kudos (a token-economy social platform), and GitIntel (LLM digests of GitHub issue threads).",
    "When I'm not coding, I'm probably analyzing data, gaming (Minecraft, Pokemon), or organizing my knowledge in Obsidian.",
  ],
};

export const beyondCodeData = {
  content:
    "A data geek who can't resist analyzing patterns — whether it's personal activity tracking or game performance metrics. I organize everything in Obsidian with custom workflows. Outside of screens: Minecraft, Pokemon, coffee.",
};

export const getMockCurrentActivity = (): CurrentActivity => ({
  status: "building",
  project: "RSTUF (LFX Mentorship)",
  link: "https://github.com/repository-service-tuf",
  language: "Python + Kubernetes",
});

export const achievementsData = [
  "CGPA 9.18 @ IIT Bhilai (Data Science & AI)",
  "LFX Mentee — RSTUF, OpenSSF ('26)",
  "Triple Selection: MOSIP C4GT (Sprint + DMP + Intern)",
  "FOSSEE Summer Fellow @ IIT Bombay",
  "Captain @ AWS Cloud Club, IIT Bhilai",
  "Coordinator @ OpenLake (1 year)",
  "Winner, Trustathon — de.ci.phe.red lab",
  "Speaker @ DPG Dialogues '25",
  "Codeforces Specialist (1433)",
];

export const learningData = [
  "Supply-Chain Security (TUF)",
  "Distributed Consensus",
  "Database Internals",
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
    label: "Always up for coffee ☕",
    icon: "coffee" as const,
  },
];
