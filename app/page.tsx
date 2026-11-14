import AgentGraph from "@/components/AgentGraph";
import ProjectCase from "@/components/ProjectCase";
import SecureRagSim from "@/components/SecureRagSim";
import ThreatFunnel from "@/components/ThreatFunnel";
import { featured, job, journey, moreProjects, profile, proof, stack, stats } from "@/lib/data";

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="top">
        <div className="wrap">
          <a className="brand" href="#top">
            aniketh<i>.</i>varma
          </a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#proof">Research</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="live mono">{profile.status}</span>
            <h1>
              {profile.name} <span>{profile.tagline}</span>
            </h1>
            <p>{profile.intro}</p>
            <div className="cta">
              <a className="btn hot" href="#work">See the work</a>
              <a className="btn" href={profile.links.github}>GitHub</a>
              <a className="btn" href={profile.links.linkedin}>LinkedIn</a>
              <a className="btn" href={profile.links.leetcode}>LeetCode</a>
            </div>
          </div>
          <AgentGraph />
        </div>
        <div className="wrap">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="work">
          <div className="wrap">
            <SectionHead
              eyebrow="Selected work"
              title="Systems, shown as systems"
              sub="Each case study opens with how it works. Try the first one."
            />

            <ProjectCase {...featured.secureRag}>
              <SecureRagSim />
            </ProjectCase>

            <ProjectCase {...featured.aegisNet}>
              <ThreatFunnel />
            </ProjectCase>

            <h3 className="sub">More projects</h3>
            <div className="grid2">
              {moreProjects.map((p) => (
                <article className="mini" key={p.title}>
                  <div className="hub">
                    {p.hub.nodes.map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                    <span className="c">{p.hub.center}</span>
                  </div>
                  <span className="kind mono">{p.kind}</span>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <a className="repo" href={p.repo}>Repository →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <SectionHead eyebrow="Experience" title="The full agent lifecycle" />
            <div className="where">
              <h3>{job.title}</h3>
              <span className="mono">{job.meta}</span>
            </div>
            <div className="life">
              {job.lifecycle.map((s, i) => (
                <div key={s.name}>
                  <i className="mono">{String(i + 1).padStart(2, "0")}</i>
                  <b>{s.name}</b>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
            <ol className="journey" aria-label="Career timeline">
              {journey.map((j) => (
                <li key={j.when} className={j.now ? "now" : undefined}>
                  <time>{j.when}</time>
                  <b>{j.title}</b>
                  <span>{j.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stack">
          <div className="wrap">
            <SectionHead eyebrow="Stack" title="From orchestration down to infrastructure" />
            <div className="stack">
              {stack.map((l) => (
                <div className="layer" key={l.layer}>
                  <h3>{l.layer}</h3>
                  <ul className="chips">
                    {l.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof">
          <div className="wrap">
            <SectionHead eyebrow="Research and credentials" title="Published and certified" />
            <div className="proof">
              {proof.map((p) => (
                <div className="card" key={p.title}>
                  <div className={p.accent ? "badge h" : "badge"}>{p.badge}</div>
                  <div>
                    <b>{p.title}</b>
                    <span>{p.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h2>
            Building with agents? <span>Let&apos;s talk.</span>
          </h2>
          <div className="contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.links.linkedin}>linkedin.com/in/anikethvarma</a>
            <a href={profile.links.github}>github.com/anikethvarma</a>
          </div>
        </div>
      </footer>
    </>
  );
}
