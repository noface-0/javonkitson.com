import React, { useEffect, useRef } from 'react';

export default function FlowField() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const pre = preRef.current;
    if (!wrap || !pre) return;

    const RAMP = ' .,:;i1tfLCG08@';

    let cols = 0,
      rows = 0;
    let cw = 7.2,
      ch = 11;

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      const probe = document.createElement('span');
      probe.style.cssText =
        "position:absolute;visibility:hidden;font:11px 'JetBrains Mono',monospace;line-height:1;white-space:pre";
      probe.textContent = 'M'.repeat(50);
      pre.appendChild(probe);
      cw = probe.getBoundingClientRect().width / 50;
      ch = 11;
      pre.removeChild(probe);

      cols = Math.max(20, Math.floor((r.width - 24) / cw));
      rows = Math.max(10, Math.floor((r.height - 40) / ch));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - r.left) / r.width;
      mouseRef.current.y = (e.clientY - r.top) / r.height;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    const start = performance.now();

    const tick = () => {
      const t = (performance.now() - start) / 1000;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const active = mouseRef.current.active;

      let out = '';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const u = x / cols;
          const v = y / rows;

          const dx = u - (active ? mx : 0.5);
          const dy = v - (active ? my : 0.5);
          const d = Math.sqrt(dx * dx + dy * dy);

          const a =
            Math.sin(u * 6 + t * 0.4) +
            Math.cos(v * 5 - t * 0.3) +
            Math.sin(u * 3 + v * 4 + t * 0.6) * 0.7 +
            Math.cos(d * 14 - t * 1.4) * (active ? 1.2 : 0.6);

          let n = (a + 3) / 6;
          if (active) {
            const halo = Math.max(0, 0.32 - d) * 3.2;
            n += halo;
          }
          n = Math.max(0, Math.min(1, n));

          const idx = Math.floor(n * (RAMP.length - 1));
          out += RAMP[idx];
        }
        out += '\n';
      }

      pre.textContent = out;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="ascii" ref={wrapRef}>
      <pre ref={preRef}></pre>
    </div>
  );
}
