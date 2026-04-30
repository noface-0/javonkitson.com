import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

interface TopbarProps {
  time: string;
}

export default function Topbar({ time }: TopbarProps) {
  const { theme, setTheme } = useContext(ThemeContext);
  const isInk = theme === 'ink';

  return (
    <div className="topbar">
      <div className="left">
        <span>
          <span className="dot"></span>
          &nbsp;&nbsp;nvidia · may 2026
        </span>
        <span className="muted">seattle, wa</span>
      </div>
      <div className="center">Javon Kitson</div>
      <div className="right">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#work">work</a>
        <a href="/JavonKResumev4.pdf" target="_blank" rel="noreferrer">
          resume ↗
        </a>
        <button
          type="button"
          className={'theme-toggle' + (isInk ? ' is-ink' : '')}
          aria-label={isInk ? 'switch to light mode' : 'switch to dark mode'}
          aria-pressed={isInk}
          onClick={() => setTheme(isInk ? 'light' : 'ink')}
        >
          <span className="icon-bg" aria-hidden="true">
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
            </svg>
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </span>
          <span className="knob" aria-hidden="true">
            {isInk ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
              </svg>
            )}
          </span>
        </button>
        <span className="muted" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {time}
        </span>
      </div>
    </div>
  );
}
