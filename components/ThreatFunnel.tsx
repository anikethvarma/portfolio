const TIERS = [
  { n: "61", title: "Tier 1 · Detection rules", text: "Every log line from automated intake", cls: "t1" },
  { n: "9", title: "Tier 2 · Cross-batch correlation rules", text: "Events linked across batches and over time", cls: "t2" },
  { n: "4", title: "Tier 3 · AI investigation agents", text: "Only for ambiguous traffic", cls: "t3" },
];

const AGENTS = ["Verdict", "Attacker intent", "MITRE ATT&CK mapping", "Triage"];

export default function ThreatFunnel() {
  return (
    <>
      <div className="tiers">
        {TIERS.map((t) => (
          <div key={t.cls} className={`tier ${t.cls}`}>
            <b>{t.n}</b>
            <span>
              <strong>{t.title}</strong>
              {t.text}
            </span>
          </div>
        ))}
      </div>
      <ul className="agents" aria-label="The four LangGraph agents">
        {AGENTS.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <div className="mono muted">Per-IP threat state persists across batches to surface low-and-slow attacks.</div>
    </>
  );
}
