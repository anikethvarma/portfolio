"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type StepState = "" | "on" | "block" | "skip";

const STEPS = [
  "JWT identity",
  "OpenFGA whitelist",
  "Filtered vector search",
  "Per-chunk ACL recheck",
  "Fail-closed gate",
  "LLM generation",
  "Audit log",
];

const ALLOWED: ReactNode[] = [
  "Token verified. user_id, tenant_id and department come from the JWT, never the request body.",
  "OpenFGA lists every document this employee can read.",
  "Qdrant filters by tenant and whitelist before similarity search.",
  "Each chunk is rechecked. Chunks with a stale ACL version are dropped.",
  "Authorized chunks survive, so the query continues.",
  "Chunks go to the LLM in a delimited context block.",
  <><b className="ok">Answered.</b> An immutable audit row is written.</>,
];

const DENIED: ReactNode[] = [
  "Token verified. Identity comes from the JWT.",
  "OpenFGA returns no readable documents for this question.",
  "Vector search runs inside an empty whitelist.",
  "No chunks pass the recheck.",
  <><b className="no">Gate closed.</b> Zero chunks survived, so a safe refusal is returned.</>,
  "",
  <><b className="no">Refused, no LLM call made.</b> The refusal is still written to the audit log.</>,
];

const EMPTY: StepState[] = STEPS.map(() => "");

export default function SecureRagSim() {
  const [states, setStates] = useState<StepState[]>(EMPTY);
  const [message, setMessage] = useState<ReactNode>("Seven steps run on every query. Pick a user above to watch one.");
  const [mode, setMode] = useState<"ok" | "no" | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const run = (allowed: boolean) => {
    if (timer.current) clearTimeout(timer.current);
    setMode(allowed ? "ok" : "no");
    const next: StepState[] = [...EMPTY];
    setStates([...next]);
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 620;
    const lines = allowed ? ALLOWED : DENIED;
    let i = 0;

    const step = () => {
      if (!allowed && i === 5) {
        next[5] = "skip";
        i = 6;
      }
      if (i >= STEPS.length) return;
      next[i] = !allowed && i === 4 ? "block" : "on";
      setStates([...next]);
      setMessage(lines[i]);
      i += 1;
      timer.current = setTimeout(step, delay);
    };
    step();
  };

  return (
    <>
      <div className="sim-controls" role="group" aria-label="Simulate a query">
        <button type="button" aria-pressed={mode === "ok"} onClick={() => run(true)}>
          ▶ Run as authorized employee
        </button>
        <button type="button" aria-pressed={mode === "no"} onClick={() => run(false)}>
          ▶ Run with no access
        </button>
      </div>
      <ol className="steps">
        {STEPS.map((label, i) => (
          <li key={label} className={states[i]}>
            <i>{String(i + 1).padStart(2, "0")}</i>
            <b>{label}</b>
          </li>
        ))}
      </ol>
      <div className="sim-out" aria-live="polite">
        {message}
      </div>
    </>
  );
}
