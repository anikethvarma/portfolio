// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Aniketh Varma",
  fullName: "Aniketh Varma Mudunuri",
  status: "AI Engineer at TCS · India",
  tagline: "builds agents that ship.",
  intro:
    "Multi-agent systems and RAG applications with Google ADK, LangGraph and Gemini, taken from prototype through evaluation to containerized deployment.",
  email: "anikethvarma9@gmail.com",
  links: {
    github: "https://github.com/anikethvarma",
    linkedin: "https://www.linkedin.com/in/anikethvarma/",
    leetcode: "https://leetcode.com/anikethvarma",
  },
};

export const stats = [
  { value: "40", label: "public repositories on GitHub" },
  { value: "5", label: "agent frameworks used in practice" },
  { value: "2", label: "Springer publications in deep learning and NLP" },
  { value: "2", label: "certifications: Google Cloud and Anthropic" },
];

export const featured = {
  secureRag: {
    kind: "PERMISSION-AWARE RAG",
    title: "HR SecureRAG",
    summary:
      "An HR and compensation assistant that answers only from documents the employee is allowed to read. Access control runs at every stage, and the LLM is never called when nothing authorized survives.",
    points: [
      "Seven-step pipeline on every query, from JWT identity to an immutable audit log.",
      "OpenFGA relationship-based access control, checked before and after vector search.",
      "Stale permissions caught by comparing ACL versions in Redis against each chunk.",
    ],
    tags: ["FastAPI", "OpenFGA", "Qdrant", "Redis", "PostgreSQL", "OpenRouter"],
    repo: "https://github.com/anikethvarma/SecureRag",
  },
  aegisNet: {
    kind: "NETWORK THREAT ANALYSIS",
    title: "CyberDef (AegisNet)",
    summary:
      "An AI-powered network threat analysis platform that detects, correlates and investigates security events.",
    points: [
      "Three-tier pipeline: 61 detection rules, 9 cross-batch correlation rules, then AI investigation only for ambiguous traffic.",
      "Four specialized LangGraph agents for verdicts, attacker intent, MITRE ATT&CK mapping and triage.",
      "Per-IP threat state tracked over time to catch persistent, low-and-slow attacks that single alerts miss.",
      "Automated log intake and APIs for analysis, daily threat summaries, rollups and case management.",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "LangChain", "Ollama", "PostgreSQL", "pgvector", "Pandas"],
    repo: "https://github.com/anikethvarma/CyberDef",
  },
};

export const moreProjects = [
  {
    kind: "LEGAL KNOWLEDGE BASE",
    title: "Legal Wiki",
    summary:
      "Turns case documents into a structured, cross-referenced wiki at ingest time, so answers come from compiled synthesis instead of raw chunks.",
    hub: { nodes: ["ingest", "merge", "cross-ref"], center: "pre-compiled wiki" },
    repo: "https://github.com/anikethvarma/LegalWiki",
  },
  {
    kind: "ACCELERATOR",
    title: "Reusable Deep Agent",
    summary: "A starter for Deep Agents projects with pluggable tools, subagents and model configuration.",
    hub: { nodes: ["tools", "subagents", "models"], center: "deep agent" },
    repo: "https://github.com/anikethvarma/reusable-deepagent",
  },
  {
    kind: "MULTI-AGENT",
    title: "Hospital Agent",
    summary: "A hospital assistant with separate patient and doctor views, backed by a memory agent.",
    hub: { nodes: ["patient", "doctor", "memory"], center: "agent team + SQLite" },
    repo: "https://github.com/anikethvarma/Hospital_Agent",
  },
  {
    kind: "RAG",
    title: "RAG Playground",
    summary: "A containerized sandbox for trying retrieval and embedding setups.",
    hub: { nodes: ["embed", "retrieve", "compare"], center: "Dockerized sandbox" },
    repo: "https://github.com/anikethvarma/RAG-Playground",
  },
];

export const job = {
  title: "AI Engineer, Tata Consultancy Services",
  meta: "Mumbai · Jul 2025 to present",
  lifecycle: [
    { name: "Build", text: "Agents on Google ADK and Gemini with tool calling, memory and multi-step workflows" },
    { name: "Orchestrate", text: "Specialized agents coordinated with LangGraph and CrewAI" },
    { name: "Compare", text: "LangChain, LangGraph, CrewAI and Deep Agents assessed per use case" },
    { name: "Observe", text: "Tracing, monitoring and evaluation with Langfuse" },
    { name: "Extend", text: "Reusable Claude Skills that standardize workflows" },
    { name: "Ship", text: "Agent applications containerized with Docker" },
  ],
};

export const journey = [
  { when: "2020", title: "B.Tech, Computer Science", text: "Vishnu Institute of Technology, CGPA 8.5" },
  { when: "2022", title: "Frontend Intern, ReadOn", text: "Led the FredoInvest site build in React from Figma designs" },
  { when: "2023", title: "First Springer paper", text: "Ensemble deep learning for heart disease prediction" },
  { when: "2024", title: "Second paper, graduation", text: "Multimodal summarization with T5" },
  { when: "2025 → now", title: "AI Engineer, TCS", text: "Agentic AI on Google Cloud", now: true },
];

export const stack = [
  { layer: "Agents and orchestration", items: ["Google ADK", "LangGraph", "LangChain", "CrewAI", "Deep Agents"] },
  { layer: "Protocols and extensions", items: ["Model Context Protocol", "Claude Skills"] },
  { layer: "Models", items: ["Gemini", "Claude", "Ollama"] },
  { layer: "Retrieval and data", items: ["RAG", "Qdrant", "pgvector", "PostgreSQL"] },
  { layer: "Observability", items: ["Langfuse"] },
  { layer: "Platform and languages", items: ["Google Cloud", "Docker", "FastAPI", "Python", "TypeScript"] },
];

export const proof = [
  {
    badge: "'23",
    accent: true,
    title: "Enhancing Heart Disease Prediction Through a Heterogeneous Ensemble DL Models",
    meta: "IC4S 2023 · Springer",
  },
  {
    badge: "'24",
    accent: true,
    title: "Multi-model Summarization on Extending T5 Transformer for Text, Audio, and Images",
    meta: "IC4S 2024 · Springer",
  },
  {
    badge: "GC",
    title: "Google Cloud Certified Specialist Partner: Agent Development and Deployment",
    meta: "Google Cloud",
  },
  { badge: "CL", title: "Claude Certification: Developer Foundations", meta: "Anthropic" },
];
