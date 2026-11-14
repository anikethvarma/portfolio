# Aniketh Varma: Portfolio

Next.js (App Router, TypeScript) portfolio for an AI Engineer.

## Edit content
All text, projects, stats and links live in `lib/data.ts`.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com: Add New → Project → Import the repo. Vercel detects Next.js automatically.
3. Click Deploy.

Or from this folder: `npx vercel` then `npx vercel --prod`.

## Structure
```
app/layout.tsx        fonts, metadata
app/page.tsx          page sections
app/globals.css       all styles
components/AgentGraph.tsx    animated hero agent graph (client)
components/SecureRagSim.tsx  interactive 7-step pipeline (client)
components/ThreatFunnel.tsx  AegisNet three-tier funnel
components/ProjectCase.tsx   case-study layout
lib/data.ts           content
```
