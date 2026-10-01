import { ProjectsData } from "@/types/projects";

export const projectsData: ProjectsData = {
  projects: [
    {
      id: 1,
      name: "Kudos",
      description:
        "Token-based social platform replacing likes with a scarce token economy to incentivize quality content.",
      longDescription:
        "A microservices-based social platform that replaces traditional engagement metrics with a limited, transferable token supply. Features an MLFQ scheduling-inspired feed algorithm, progressive taxation on token accumulation, and economic incentives for genuine content curation. Built with Next.js frontend, Go/Node.js microservices, PostgreSQL, and gRPC inter-service communication.",
      tags: ["TypeScript", "Next.js", "Go", "Node.js", "PostgreSQL", "gRPC", "Microservices"],
      github: "https://github.com/amaydixit11/Kudos",
      status: "In Development",
      type: "Full Stack",
      startDate: "2025",
      category: "Social Media",
      highlights: [
        "Token economy with progressive taxation",
        "MLFQ-inspired feed ranking algorithm",
        "Microservices architecture with gRPC",
        "Scarce-signal engagement model",
      ],
    },
    {
      id: 2,
      name: "ACORDE",
      description:
        "Local-first peer-to-peer data sync engine with CRDTs and end-to-end encryption.",
      longDescription:
        "Always-Available Conflict-free Offline-first Replicated Distributed Data Synchronization Engine. Built with Go and libp2p, uses CRDTs for automatic conflict resolution in distributed environments. Features XChaCha20-Poly1305 content encryption, SQLite for local persistence, and robust peer discovery. Designed for offline-first apps needing reliable sync without centralized coordination.",
      tags: ["Go", "SQLite", "libp2p", "CRDT", "Cryptography", "Distributed Systems"],
      github: "https://github.com/amaydixit11/acorde",
      status: "Beta",
      type: "Systems",
      startDate: "2025",
      category: "Distributed Systems",
      highlights: [
        "CRDT-based conflict resolution",
        "XChaCha20-Poly1305 encryption",
        "libp2p peer-to-peer networking",
        "Offline-first architecture",
      ],
    },
    {
      id: 3,
      name: "BitTorrent Client",
      description:
        "Custom BitTorrent protocol client built from scratch in Go with P2P file sharing.",
      longDescription:
        "From-scratch implementation of the BitTorrent protocol in Go, handling metadata exchange, peer handshaking, piece selection, choking/unchoking strategies, and tracker communication. Implements BEP-3 and BEP-23 compact peer lists, with tests and CI covering bencode, the handshake layout, wire-message framing and info-hash derivation. Peer discovery is tracker-based.",
      tags: ["Go", "Networking", "P2P", "BEP", "Protocols"],
      github: "https://github.com/amaydixit11/BitTorrentClient",
      status: "Complete",
      type: "Systems",
      startDate: "2025",
      category: "Distributed Systems",
      highlights: [
        "Full BEP protocol implementation",
        "Custom choking/unchoking algorithms",
        "Tested with CI, including a fuzz target for the decoder",
        "Concurrent piece downloading",
      ],
    },
    {
      id: 12,
      name: "Agent-Control-Plane",
      description:
        "Durable execution coordinator for fleets of isolated AI agents, with no LLM in the control loop.",
      longDescription:
        "A deterministic control plane between an LLM orchestrator and worker agents running in isolated containers. Task state lives in a file-backed vault; workers claim tasks atomically, hold them under lease and heartbeat contracts, and crashed workers are detected by lease expiry and their tasks re-queued. The control plane is stateless, so it restarts without losing work. Modeled on the Kubernetes controller plus etcd pattern.",
      tags: ["Go", "Docker", "Distributed Systems", "AI Agents"],
      github: "https://github.com/amaydixit11/Agent-Control-Plane",
      status: "In Development",
      type: "Systems",
      startDate: "2026",
      category: "Distributed Systems",
      highlights: [
        "Atomic task claiming via rename",
        "Lease and heartbeat failure recovery",
        "Stateless, restartable control plane",
        "Human-readable file-backed state",
      ],
    },
    {
      id: 4,
      name: "GitIntel",
      description:
        "Context-aware GitHub intelligence engine that extracts hidden decisions from issues and PRs using LLMs.",
      longDescription:
        "Transforms messy GitHub discussion threads into structured, developer-ready digests. Uses GraphQL to extract issues, PRs, and reviews across a repository, then applies LLM analysis to identify key architectural decisions, rejected alternatives, and constraints buried in comment threads. Features D3.js visualizations for dependency graphs and decision timelines.",
      tags: ["FastAPI", "Python", "GraphQL", "OpenAI", "D3.js", "LLM"],
      github: "https://github.com/amaydixit11/GitIntel",
      demo: "https://gitintel.vercel.app",
      status: "Beta",
      type: "DevTools",
      startDate: "2025",
      category: "AI & ML",
      highlights: [
        "LLM-powered GitHub thread analysis",
        "GraphQL-based repository introspection",
        "D3.js decision dependency graphs",
        "Structured digest generation",
      ],
    },
    {
      id: 5,
      name: "AcadMap",
      description:
        "Crowd-sourced course resource platform for IIT Bhilai students with Next.js and Supabase.",
      longDescription:
        "Community platform where IIT Bhilai students share course materials, past papers, lab notes, and study resources. Features course-based organization, upvote/downvote quality ranking, and role-based access control. Built with Next.js 15 App Router, TypeScript, Supabase backend, and Tailwind CSS with shadcn/ui components.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
      github: "https://github.com/amaydixit11/acadmap",
      demo: "https://acadmap.vercel.app",
      status: "Live",
      type: "Full Stack",
      startDate: "2024",
      category: "Web Applications",
      highlights: [
        "Used by IIT Bhilai student community",
        "Course-based resource organization",
        "Role-based access control",
        "Quality ranking system",
      ],
    },
    {
      id: 6,
      name: "MetaIndex",
      description:
        "ML-based adaptive index selection using meta-learning to optimize database query performance.",
      longDescription:
        "Research project on how machine learning can dynamically optimize database index selection based on query patterns and data characteristics. Uses meta-learning to predict optimal index configurations for given workloads, adapting to changing query distributions. Evaluated on standard database benchmarks against traditional cost-based optimizer approaches.",
      tags: ["Python", "Machine Learning", "Database Systems", "Meta-Learning", "Research"],
      github: "https://github.com/amaydixit11/MetaIndex",
      status: "Research",
      type: "Research",
      startDate: "2025",
      category: "AI & ML",
      highlights: [
        "Meta-learning for index selection",
        "Adaptive workload-aware optimization",
        "Benchmark evaluation on standard datasets",
        "Comparison with traditional cost-based optimizers",
      ],
    },
    {
      id: 7,
      name: "HalfLife",
      description:
        "Temporal reranking middleware for RAG, published on PyPI as halflife-rag.",
      longDescription:
        "A drop-in reranking layer that makes RAG retrieval time-aware, even when documents carry no timestamps. Applies explicit half-life decay over retrieved chunks and fuses it with vector similarity, so time-sensitive queries stop surfacing stale context. +191% on fresh-intent queries. Installable with pip install halflife-rag.",
      tags: ["Python", "RAG", "Reranking", "Vector Search", "PyPI"],
      github: "https://github.com/amaydixit11/HalfLife",
      demo: "https://pypi.org/project/halflife-rag/",
      status: "Live",
      type: "Library",
      startDate: "2026",
      category: "AI & ML",
      highlights: [
        "Published on PyPI (halflife-rag)",
        "+191% on fresh-intent queries",
        "Half-life decay fused with vector similarity",
        "Tests and CI",
      ],
    },
    {
      id: 8,
      name: "RAGfolio",
      description:
        "Retrieval-Augmented Generation system for intelligent document querying and knowledge extraction.",
      longDescription:
        "RAG system enabling intelligent document processing and querying. Combines vector embeddings, semantic search, and LLM generation to answer questions from personal document collections. Features document chunking strategies, embedding optimization, context window management, and retrieval pipeline tuning for grounded responses.",
      tags: ["Python", "RAG", "LLM", "Vector DB", "Embeddings"],
      status: "Active",
      type: "Research",
      startDate: "2025",
      category: "AI & ML",
      highlights: [
        "Advanced chunking and embedding strategies",
        "Context-aware retrieval pipeline",
        "Grounded LLM generation",
        "Document processing automation",
      ],
    },
    {
      id: 9,
      name: "Relix",
      description:
        "Privacy-first personal knowledge base built on ACORDE, syncing across devices without a cloud.",
      longDescription:
        "The reference application on top of ACORDE: markdown notes, [[wikilinks]], a backlink graph, daily logs and full-text search, with offline-first storage and peer-to-peer encrypted sync across devices. No cloud provider and no accounts.",
      tags: ["TypeScript", "ACORDE", "Local-first", "P2P Sync"],
      github: "https://github.com/amaydixit11/Relix",
      status: "Alpha",
      type: "Full Stack",
      startDate: "2026",
      category: "Productivity",
      highlights: [
        "Built on the ACORDE sync engine",
        "Wikilinks and backlink graph",
        "Full-text search",
        "Peer-to-peer encrypted sync",
      ],
    },
    {
      id: 10,
      name: "B+ Tree Implementation",
      description:
        "Disk-backed B+ tree index in C++ with mmap I/O: 346K inserts/sec, 1.85M reads/sec.",
      longDescription:
        "A disk-based B+ tree built to scale beyond RAM. mmap I/O, 4KB pages, 256-page batch allocation, and adaptive 2/3 splitting for sequential loads. Insertion with node splitting, deletion with sibling borrowing and merging, point queries and range scans over a leaf-level linked list. Verified against a 6GB index with 95% of the data on disk.",
      tags: ["C++", "Data Structures", "Databases", "mmap"],
      github: "https://github.com/amaydixit11/B-Tree",
      status: "Complete",
      type: "Systems",
      startDate: "2025",
      category: "Database Internals",
      highlights: [
        "Node splitting and sibling borrowing",
        "Leaf-level linked list for range queries",
        "346K inserts/sec, 1.85M reads/sec",
        "Verified on a 6GB index, 95% on disk",
      ],
    },
    {
      id: 11,
      name: "Pokedle",
      description:
        "Pokemon-themed daily guessing game with animated reveals and streak tracking.",
      longDescription:
        "Daily Pokemon guessing game where players identify a random Pokemon through progressive hints. Features animated reveals, streak tracking, shareable results in Wordle-style emoji grids, and a curated Pokemon database. Responsive design optimized for mobile.",
      tags: ["React", "TypeScript", "Game", "CSS Animations"],
      github: "https://github.com/amaydixit11/pokedle",
      demo: "https://pokedle.vercel.app",
      status: "Live",
      type: "Game",
      startDate: "2024",
      category: "Web Applications",
      highlights: [
        "Daily rotating Pokemon challenges",
        "Animated reveal sequences",
        "Streak tracking system",
        "Mobile-optimized responsive design",
      ],
    },
  ],
  stats: {
    totalProjects: 12,
    publicRepos: 78,
    contributions: 1200,
    languages: 9,
  },
};
