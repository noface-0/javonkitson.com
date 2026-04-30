import React from 'react';

const ITEMS = [
  'now — ai/ml hpc cluster engineer @ nvidia',
  'researching — diffusion models for topology optimization',
  'studying — financial engineering & international relations',
  'building — deep rl trading systems',
  'optimizing — distributed training pipelines at scale',
  'growing — vegetables & oyster mushrooms',
  'listening — snarky puppy, on repeat',
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((t, i) => (
          <span key={i}>
            <span className="bullet">◆</span>
            &nbsp;&nbsp;{t}
          </span>
        ))}
      </div>
    </div>
  );
}
