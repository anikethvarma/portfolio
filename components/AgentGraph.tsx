"use client";

import { useEffect, useRef, useState } from "react";

type GraphNode = { id: string; x: number; y: number; label: string; r: number; hot?: boolean };
type Edge = [from: string, to: string, activity: string];
type Pulse = { edge: Edge; t: number; speed: number };

const NODES: GraphNode[] = [
  { id: "q", x: 0.1, y: 0.5, label: "Query", r: 9 },
  { id: "o", x: 0.36, y: 0.5, label: "Orchestrator", r: 16, hot: true },
  { id: "r", x: 0.63, y: 0.17, label: "Retriever", r: 10 },
  { id: "t", x: 0.66, y: 0.5, label: "Tools · MCP", r: 10 },
  { id: "m", x: 0.63, y: 0.83, label: "Memory", r: 10 },
  { id: "l", x: 0.89, y: 0.33, label: "Gemini", r: 12 },
  { id: "e", x: 0.89, y: 0.7, label: "Langfuse", r: 10 },
];

const EDGES: Edge[] = [
  ["q", "o", "routing query"],
  ["o", "r", "retrieving context"],
  ["o", "t", "calling a tool"],
  ["o", "m", "reading memory"],
  ["r", "l", "grounding the prompt"],
  ["t", "l", "returning tool result"],
  ["m", "l", "adding history"],
  ["l", "e", "logging the trace"],
];

const byId: Record<string, GraphNode> = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function AgentGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [span, setSpan] = useState(1);
  const [activity, setActivity] = useState({ from: "orchestrator", what: "routing query" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontVar = getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim();
    const font = `500 12px ${fontVar || "monospace"}`;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let pulses: Pulse[] = [];
    let raf = 0;
    let last = 0;
    let count = 1;

    const size = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "rgba(127,214,255,.22)";
      for (const [a, b] of EDGES) {
        ctx.beginPath();
        ctx.moveTo(byId[a].x * width, byId[a].y * height);
        ctx.lineTo(byId[b].x * width, byId[b].y * height);
        ctx.stroke();
      }
      for (const p of pulses) {
        const a = byId[p.edge[0]];
        const b = byId[p.edge[1]];
        const px = (a.x + (b.x - a.x) * p.t) * width;
        const py = (a.y + (b.y - a.y) * p.t) * height;
        ctx.fillStyle = "rgba(255,122,69,.25)";
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ff7a45";
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.font = font;
      ctx.textAlign = "center";
      for (const n of NODES) {
        const nx = n.x * width;
        const ny = n.y * height;
        ctx.fillStyle = "#141a33";
        ctx.strokeStyle = n.hot ? "#ff7a45" : "#7fd6ff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        if (n.hot) {
          ctx.fillStyle = "#ff7a45";
          ctx.beginPath();
          ctx.arc(nx, ny, 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = "#eef0f8";
        ctx.fillText(n.label, nx, ny + n.r + 17);
      }
    };

    const spawn = () => {
      const edge = EDGES[Math.floor(Math.random() * EDGES.length)];
      pulses.push({ edge, t: 0, speed: 0.006 + Math.random() * 0.006 });
      count += 1;
      setSpan(count);
      setActivity({ from: byId[edge[0]].label.toLowerCase(), what: edge[2] });
    };

    const loop = (ts: number) => {
      if (ts - last > 650 && pulses.length < 5) {
        spawn();
        last = ts;
      }
      for (const p of pulses) p.t += p.speed;
      pulses = pulses.filter((p) => p.t < 1);
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      size();
      draw();
    };

    size();
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(draw);

    if (still) {
      pulses = [
        { edge: EDGES[0], t: 0.5, speed: 0 },
        { edge: EDGES[4], t: 0.6, speed: 0 },
        { edge: EDGES[7], t: 0.4, speed: 0 },
      ];
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <figure
      className="graph"
      aria-label="Animated diagram of a multi-agent system: a query goes to an orchestrator, which calls a retriever, tools and memory, then Gemini, with Langfuse tracing every step"
    >
      <div className="bar mono">
        <span>agent_run.trace</span>
        <span>span {String(span % 1000).padStart(3, "0")}</span>
      </div>
      <canvas ref={canvasRef} />
      <figcaption className="foot mono">
        <b>{activity.from}</b> → {activity.what}
      </figcaption>
    </figure>
  );
}
