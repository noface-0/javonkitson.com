import React from 'react';
import FlowField from './FlowField';

const TAGLINE = 'Building at the intersection of machine learning, infrastructure, and applied research.';

export default function Hero() {
  return (
    <section className="hero shell" data-screen-label="01 Hero">
      <div className="hero-left">
        <div className="hero-meta">
          <span className="k">role</span>
          <span>
            ai/ml hpc cluster engineer · nvidia
          </span>
          <span className="k">interests</span>
          <span>generative models · deep rl · computational finance · hpc infrastructure</span>
          <span className="k">based</span>
          <span>seattle, wa · dc metro</span>
          <span className="k">since</span>
          <span>2020</span>
        </div>
        <div className="hero-name">
          <h1>
            Javon
            <br />
            <span className="stroke">Kitson</span>
            <span className="accent">.</span>
          </h1>
          <p className="tagline">
            {TAGLINE}
            <span className="blink"></span>
          </p>
        </div>
      </div>
      <FlowField />
    </section>
  );
}
