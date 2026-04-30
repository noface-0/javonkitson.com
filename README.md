# javonkitson.com

Personal portfolio website of Javon Kitson — AI/ML HPC Cluster Engineer, specializing in high-performance infrastructure and distributed training systems.

## Overview

Professional portfolio website built with Next.js and TypeScript, featuring a terminal-inspired design aesthetic. The site showcases my experience in AI/ML infrastructure, GPU cluster architecture, and research projects in generative models and deep reinforcement learning.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** JetBrains Mono, Instrument Serif

## Features

- **Terminal-Inspired Design** — Clean, monospace aesthetic with custom typography
- **Theme Toggle** — Seamless switching between light (Paper) and dark (Ink) modes
- **Server-Side Rendering** — Optimized performance with Next.js SSR
- **Responsive Layout** — Optimized for all devices from mobile to ultrawide displays
- **Interactive Animations** — Live ASCII flow field with mouse tracking

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/noface-0/javonkitson.com.git
cd javonkitson.com

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
javonkitson.com/
├── public/
│   ├── favicon.ico
│   ├── JavonKResumev4.pdf
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── FlowField.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Projects.tsx
│   │   ├── ThemeContext.tsx
│   │   └── Topbar.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
├── next.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Updating Content

- **Experience:** Edit `src/components/Experience.tsx`
- **Projects:** Edit `src/components/Projects.tsx`
- **About Section:** Edit `src/components/About.tsx`
- **Contact Info:** Edit `src/components/Contact.tsx`

### Theme Colors

Theme colors are defined in `src/styles/globals.css` using CSS variables:

```css
:root {
  --bg: #f7f1ea;        /* Light background */
  --ink: #3a2e3a;       /* Text color */
  --accent: oklch(...); /* Accent color */
}

[data-theme="ink"] {
  --bg: #1a141a;        /* Dark background */
  --ink: #f7f1ea;       /* Light text */
}
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

- **Email:** javonkitson@gmail.com
- **GitHub:** [@noface-0](https://github.com/noface-0)
- **LinkedIn:** [javonkitson](https://linkedin.com/in/javonkitson)

---
