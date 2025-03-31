import React, { useContext } from 'react';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import { ThemeContext } from '../components/ThemeContext';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: 'Simple Neural Architecture Search',
      description: 'Framework for automated neural network design',
      stack: ['Python', 'TensorFlow', 'PyTorch', 'Streamlit'],
      link: 'https://github.com/noface-0/S-NAS'
    },
    {
      title: 'Temporal Hierarchical Clustering',
      description: 'Financial instrument relationship analysis over time',
      stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      link: 'https://github.com/noface-0/Temporal-Hierarchical-Clustering'
    },
    {
      title: 'MalwareSig',
      description: 'Malware signature identification using YARA rules',
      stack: ['Python', 'YARA', 'Cybersecurity'],
      link: 'https://github.com/noface-0/project-patrick-javon-malwaresig/tree/master'
    },
    {
      title: 'Reinforcement Learning Stock Trading',
      description: 'Soft Actor Critic Algorithm for trading optimization',
      stack: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
      link: '/AAI590Capstone.pdf'
    },
    {
      title: 'Geoestimation',
      description: 'Satellite imagery building footprint extraction',
      stack: ['Python', 'TensorFlow', 'EfficientNet', 'UNet'],
      link: 'https://github.com/noface-0/Geoestimation'
    },
    {
      title: 'Javonkitson.com',
      description: 'The website you\'re currently looking at',
      stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      link: 'https://github.com/noface-0/javonkitson.com'
    }
  ];

  return (
    <div className={`bg-${theme}-50 min-h-screen w-full flex flex-col`} style={{ minHeight: '100vh' }}>
      <Head>
        <title>Javon Kitson</title>
        <meta name="description" content="Javon Kitson's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`border-double border-4 border-${theme}-300 bg-${theme}-50 ${isMobile ? '' : 'overflow-hidden'} flex-grow flex flex-col `} style={{ minHeight: 'calc(100vh - 2px)' }}>
        {/* Header Row */}
        <div className="flex flex-wrap w-full">
          {/* Header - Name */}
          <div className={`font-serif text-3xl sm:text-4xl text-center text-${theme}-300 flex items-center justify-center w-full md:w-1/3 border-b-2 md:border-r-2 border-${theme}-300 p-1 py-2 h-auto min-h-[4rem] sm:h-20 bg-${theme}-50`}>
            Javon Kitson
          </div>

          {/* Header - Quote */}
          <div className={`font-serif md:text-3xl text-lg text-center text-${theme}-300 flex items-center justify-center w-full md:w-2/3 border-b-2 border-${theme}-300 p-1 py-2 h-auto min-h-[4rem] sm:h-20 bg-${theme}-50`}>
            {isMobile ? (
              <span className="text-sm">All Good Art is Science <br/> & <br/> All Good Science is Art</span>
            ) : (
              <>All Good Art is Science & All Good Science is Art</>
            )}
          </div>
        </div>
        
        {/* Content Row */}
        <div className="flex flex-wrap w-full flex-1" style={{ height: "calc(100% - 80px)" }}>
          {/* About Me and Resume Section */}
          <div className={`font-serif flex flex-col justify-between w-full md:w-1/3 md:border-r-2 border-${theme}-300 p-4 md:p-2 bg-${theme}-50 h-full`}>
            {/* About Me content */}
            <div>
              <blockquote className={`text-left text-sm sm:text-base text-${theme}-300`}>
                Hi, I&apos;m Javon. I&apos;m a Research Engineer based in the Washington DC Area.
                I received my Bachelor&apos;s from Loyola University Maryland in 2020, where I studied Computer Science and minored in Biomedical Physics.
                I graduated with a Master&apos;s degree in Applied Artificial Intelligence from the University of San Diego in 2024.
                Currently, I work as a Research Engineer III at BlueHalo, where I manage the company&apos;s AI/ML cluster and streamline GPU resource allocation for ML training.
                I specialize in training and fine-tuning high-performance machine learning models, building multi-node ML training pipelines, and automating infrastructure with Terraform.
              </blockquote>
              <br/>
              <blockquote className={`text-left text-sm sm:text-base text-${theme}-300`}>
                Outside of work, I enjoy making websites and applications to gather, analyze, and act on stock market data.
                I also enjoy growing vegetables and mushrooms, and I&apos;m a huge fan of the band Snarky Puppy.
              </blockquote>
            </div>
            
            {/* Resume Link */}
            <div className={`text-xl sm:text-2xl mt-auto text-${theme}-200 text-center font-serif mt-4 pt-4 border-t border-${theme}-300`}>
              <div className={`text-center text-${theme}-400`}>
                <a className="mailto" href="/JavonKResumev2.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className={`font-serif w-full md:w-2/3 border-${theme}-300 bg-${theme}-50 px-1 py-4 md:p-2 h-full`}>
            <div className={`${isMobile ? 'block' : 'flex flex-wrap justify-center md:justify-between'} gap-y-2 h-full w-full ${isMobile ? '' : 'overflow-y-auto'}`} >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}