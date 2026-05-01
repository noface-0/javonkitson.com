import React, { useState } from 'react';

interface ProjectData {
  n: string;
  title: string;
  desc: string;
  stack: string[];
  year: string;
  repo?: string;
}

const PROJECTS: ProjectData[] = [
  {
    n: '01',
    title: 'TopoDiff',
    desc: 'Conditional latent diffusion model for topology optimization — generates optimal 3D material distributions in ~500ms, replacing 50-200 iterative FEM solves with a single forward pass. [coming soon]',
    stack: ['Python', 'PyTorch', 'Diffusers', 'VAE'],
    year: '2025',
    repo: 'https://github.com/noface-0/TopoDiff',
  },
  {
    n: '02',
    title: 'Simple Neural Architecture Search',
    desc: 'Framework for automated neural network design — searches the architecture space to find performant topologies without hand-tuning.',
    stack: ['Python', 'TensorFlow', 'PyTorch', 'Streamlit'],
    year: '2024',
    repo: 'https://github.com/noface-0/S-NAS',
  },
  {
    n: '03',
    title: 'Deep RL Stock Trading',
    desc: 'Ensemble trading system combining PPO/SAC agents, genetic algorithm portfolio selection, and FNN price prediction — achieved +89% ROI in backtests.',
    stack: ['Python', 'PyTorch', 'QuantConnect', 'Pandas'],
    year: '2024',
    repo: 'https://github.com/noface-0/deep-rl-trading',
  },
  {
    n: '04',
    title: 'Temporal Hierarchical Clustering',
    desc: 'Financial-instrument relationship analysis over time — clusters tickers by behavior and tracks how groupings evolve through market regimes.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    year: '2023',
    repo: 'https://github.com/noface-0/temporal-hierarchical-clustering',
  },
  {
    n: '05',
    title: 'Geoestimation',
    desc: 'Satellite-imagery building-footprint extraction — semantic segmentation pipeline that turns orthophotos into clean polygon outputs.',
    stack: ['Python', 'TensorFlow', 'EfficientNet', 'UNet'],
    year: '2022',
    repo: 'https://github.com/noface-0/geoestimation',
  },
  {
    n: '06',
    title: 'javonkitson.com',
    desc: "The site you're currently looking at.",
    stack: ['TypeScript', 'React', 'Next.js', 'CSS'],
    year: '2026',
    repo: 'https://github.com/noface-0/javonkitson.com',
  },
];

interface ProjectProps {
  p: ProjectData;
  open: boolean;
  onToggle: () => void;
}

function Project({ p, open, onToggle }: ProjectProps) {
  return (
    <>
      <div className="project" onClick={onToggle}>
        <span className="glyph"></span>
        <span className="idx">{p.n}</span>
        <div className="title-cell">
          <h3 className="title">{p.title}</h3>
          <span className="desc">{p.desc}</span>
        </div>
        <div className="stack">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <span className="year">{p.year}</span>
        <span className="arrow">{open ? '—' : '→'}</span>
      </div>
      <div className={'project-detail ' + (open ? 'open' : '')}>
        <span></span>
        <div className="body">
          <div className="dim">
            <span className="muted">›</span> readme:{' '}
            {p.repo ? (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="readme-link">
                a more thorough writeup lives on github
              </a>
            ) : (
              'a more thorough writeup lives on github'
            )}
            . <br/>
            <span className="muted"> tap any other row to switch/collapse.</span>
          </div>
        </div>
        <span className="mobile-spacer"></span>
        <div className="body">
          <div
            className="muted"
            style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}
          >
            year
          </div>
          <div style={{ marginBottom: 14 }}>{p.year}</div>
          <div
            className="muted"
            style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}
          >
            stack
          </div>
          <div>{p.stack.join(' · ')}</div>
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section" id="projects" data-screen-label="03 Projects">
      <div className="shell">
        <header className="section-head">
          <div className="section-num">
            <strong>§ 03</strong> selected work
          </div>
          <h2 className="section-title">
            Things I&apos;ve built — <span className="dim">six recent.</span>
          </h2>
        </header>

        <div className="projects-head">
          <span>№</span>
          <span>title / description</span>
          <span>stack</span>
          <span>year</span>
          <span style={{ textAlign: 'right' }}>open</span>
        </div>

        {PROJECTS.map((p, i) => (
          <Project key={p.n} p={p} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
        ))}
      </div>
    </section>
  );
}
