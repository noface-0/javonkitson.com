import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return (
    <footer className="footer shell">
      <div>© {year} javon kitson</div>
      <div style={{ textAlign: 'center' }}>designed in the terminal · built with care</div>
      <div className="right">
        v3.0 · last edit {date}
      </div>
    </footer>
  );
}
