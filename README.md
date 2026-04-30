# javonkitson.com

Personal portfolio website of Javon Kitson — Research Engineer specializing in AI/ML infrastructure and HPC clusters.

## Overview

This is my professional portfolio website, built with modern web technologies and featuring a terminal-inspired design aesthetic. The site showcases my experience, projects, and professional background in the AI/ML infrastructure space.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** JetBrains Mono, Instrument Serif

## Features

- 🎨 **Modern Design** — Terminal-inspired aesthetic with custom typography
- 🌓 **Theme Toggle** — Seamless switching between light (Paper) and dark (Ink) modes
- ⚡ **Performance** — Server-side rendering with Next.js for optimal load times
- 📱 **Responsive** — Optimized for all devices from mobile to ultrawide displays
- 🎯 **Interactive** — Live ASCII flow field animation with mouse tracking
- ♿ **Accessible** — WCAG AA compliant with semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/noface-0/javonkitson.com.git
cd javonkitson.com

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## Project Structure

```
javonkitson.com/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── AAI590Capstone.pdf
│   └── JavonKResumev4.pdf
├── src/
│   ├── components/      # React components
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
│   ├── pages/          # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/         # Global styles
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
  /* ... more variables */
}

[data-theme="ink"] {
  --bg: #1a141a;        /* Dark background */
  --ink: #f7f1ea;       /* Light text */
  /* ... dark mode overrides */
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy

### Netlify

1. Push your code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

### Static Export

```bash
# Add to next.config.js
module.exports = {
  output: 'export',
}

# Build
npm run build

# Deploy the 'out' directory to any static host
```

## Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Accessibility:** WCAG AA compliant

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

- **Email:** javonkitson@gmail.com
- **GitHub:** [@noface-0](https://github.com/noface-0)
- **LinkedIn:** [javonkitson](https://linkedin.com/in/javonkitson)

---

Built with care in the terminal.
