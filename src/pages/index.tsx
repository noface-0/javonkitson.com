import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Topbar from '../components/Topbar';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Hero contains FlowField (canvas-style ASCII renderer w/ ResizeObserver + RAF).
// Client-only render keeps SSR clean.
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });

export default function HomePage() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () => {
      const now = new Date();

      // PST/PDT time
      const pstTime = now.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      // EST/EDT time
      const estTime = now.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      return `${pstTime} pst · ${estTime} est`;
    };
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Head>
        <title>Javon Kitson — Research Engineer</title>
      </Head>
      <Topbar time={time} />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <div id="work"></div>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
