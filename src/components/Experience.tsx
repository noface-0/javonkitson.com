import React from 'react';

interface ExperienceItem {
  when: string;
  soon?: boolean;
  org: string;
  role: string;
  loc: string;
  bullets: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    when: 'May 2026 — Present',
    soon: true,
    org: 'NVIDIA',
    role: 'AI/ML HPC Cluster Engineer',
    loc: 'Seattle, WA',
    bullets: [
    ],
  },
  {
    when: 'May 2025 — May 2026',
    org: 'AeroVironment',
    role: 'Research Engineer III',
    loc: 'Germantown, MD',
    bullets: [
      'Architect and lead administrator for an AI/ML GPU cluster serving 100+ researchers; tuned SLURM scheduling and quotas to sustain 95%+ utilization across distributed workloads.',
      'Engineered multi-node training pipelines and a reproducible YOLOX benchmarking suite across 48 A6000 GPUs, enabling data-driven capacity planning.',
      'Built an enterprise dataset/model distribution system managing 500TB+ of training data — onboarding shrank from weeks to days.',
    ],
  },
  {
    when: 'Feb 2023 — May 2025',
    org: 'BlueHalo',
    role: 'Research Engineer III',
    loc: 'Germantown, MD',
    bullets: [
      'Administered a 48-GPU AI/ML cluster for 100+ researchers; deployed Prometheus/Grafana observability and tuned SLURM to maintain 30–100% utilization based on workload demand.',
      'Developed standardized distributed-training templates adopted by 10+ teams, cutting experiment setup time from days to hours.',
      'Fine-tuned and evaluated deep-learning models with MLflow tracking, then containerized and shipped to clients.',
    ],
  },
  {
    when: 'Jul 2020 — Feb 2023',
    org: 'Intelligent Automation Inc.',
    role: 'Software Engineer I/II',
    loc: 'Rockville, MD',
    bullets: [
      'Delivered full-stack features in React + Python (FastAPI) — UI components, REST endpoints, and data contracts used across multiple internal teams.',
      'Built GitLab CI pipelines with unit/integration/e2e tests, linters, and static security scans to improve release reliability.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience" data-screen-label="02b Experience">
      <div className="shell">
        <header className="section-head">
          <div className="section-num">
            <strong>§ 02</strong> experience
          </div>
          <h2 className="section-title">
            Five years of <span className="serif">GPU clusters,</span> distributed training, and the plumbing in
            between.
          </h2>
        </header>

        <div className="exp">
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            ./career.log
          </div>
          <div className="exp-list">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className={'exp-row' + (e.soon ? ' current' : '')}>
                <div className="exp-when">{e.soon ? <span className="now">{e.when}</span> : e.when}</div>
                <div className="exp-body">
                  <h3>
                    {e.org}
                    {e.soon && <span className="exp-soon">incoming</span>}
                  </h3>
                  <div className="role">{e.role}</div>
                  <ul>
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="exp-loc">{e.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
