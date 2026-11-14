import type { ReactNode } from "react";

type Props = {
  kind: string;
  title: string;
  summary: string;
  points?: string[];
  tags: string[];
  repo: string;
  children: ReactNode;
};

export default function ProjectCase({ kind, title, summary, points, tags, repo, children }: Props) {
  return (
    <article className="proj">
      <div className="body">
        <div className="txt">
          <span className="kind mono">{kind}</span>
          <h3>{title}</h3>
          <p>{summary}</p>
          {points && (
            <ul className="points">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
          <ul className="tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a className="repo" href={repo}>
            View repository →
          </a>
        </div>
        <div className="viz">{children}</div>
      </div>
    </article>
  );
}
