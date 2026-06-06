import React from 'react';

export default function About() {
  return (
    <section className="section" id="about" data-screen-label="02 About">
      <div className="shell">
        <header className="section-head">
          <div className="section-num">
            <strong>§ 01</strong> about
          </div>
          <h2 className="section-title">
            An engineer building at the intersection of <span className="serif">ML infrastructure</span> and research.
          </h2>
        </header>

        <div className="about">
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            ./about.md
          </div>

          <div>
            <p>
              Hi, I&apos;m <span className="serif">Javon</span>. I&apos;m an AI/ML infrastructure engineer, recently relocated
              from the Washington DC metro to Seattle. I studied Computer Science with a Biomedical Physics minor at
              Loyola University Maryland (2020) and earned my Master&apos;s in Applied Artificial Intelligence
              from the University of San Diego (2024).
            </p>
            <p>
              My work sits at the intersection of machine learning and high-performance infrastructure.
              For the past five years at <span className="serif">BlueHalo</span>, <span className="serif">AeroVironment</span>,
              and now <span className="serif">NVIDIA</span>, I&apos;ve architected GPU clusters for 100+ researchers,
              tuning SLURM schedulers, scaling distributed training, and building systems that enable large-scale
              ML experimentation. I also pursue independent research projects in generative models and deep reinforcement learning.
            </p>
            <p>
              Outside of work, I research value investing strategies, grow vegetables and oyster mushrooms,
              and I&apos;m a huge fan of <span className="serif">Snarky Puppy</span>.
            </p>
          </div>

          <aside className="about-side">
            <h4>elsewhere</h4>
            <ul>
              <li>
                <span className="k">site</span>
                <span>javonkitson.com</span>
              </li>
              <li>
                <span className="k">github</span>
                <span>noface-0</span>
              </li>
              <li>
                <span className="k">linkedin</span>
                <span>javon-k-1b4127160</span>
              </li>
            </ul>

            <h4>currently</h4>
            <ul>
              <li>
                <span className="k">researching</span>
                <span>diffusion models · deep rl</span>
              </li>
              <li>
                <span className="k">building</span>
                <span>systematic trading systems</span>
              </li>
              <li>
                <span className="k">growing</span>
                <span>oyster mushrooms</span>
              </li>
            </ul>

            <h4>stack of choice</h4>
            <ul>
              <li>
                <span className="k">ml/research</span>
                <span>pytorch · diffusers · mlflow</span>
              </li>
              <li>
                <span className="k">languages</span>
                <span>python · C · typescript</span>
              </li>
              <li>
                <span className="k">hpc/infra</span>
                <span>slurm · torchrun · nccl · aws</span>
              </li>
              <li>
                <span className="k">quant</span>
                <span>quantconnect · ib api · greeks</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}