import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  stack, 
  link 
}) => {
  const { theme } = useContext(ThemeContext);

  // Define hover styles to ensure they work properly with dynamic theme values
  const cardStyle = {
    transition: 'all 0.3s ease'
  };

  const titleStyle = {
    transition: 'color 0.3s ease'
  };

  return (
    <div 
      onClick={() => window.open(link, "_blank")} 
      className={`group cursor-pointer relative text-center font-serif text-3xl text-${theme}-50 
                 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 
                 border-transparent border-2 border-single my-4 px-2 mx-auto w-full overflow-hidden 
                 md:mx-0 md:my-2 md:px-2 xl:w-[31%] lg:w-[48%] md:w-[48%] h-auto min-h-[16rem] 
                 max-h-none md:max-h-[22rem] rounded-lg`}
      style={cardStyle}
    >
      <blockquote 
        className={`text-left font-serif text-xl sm:text-2xl text-${theme}-50 group-hover:text-${theme}-400 pt-2`}
        style={titleStyle}>
        {title}
      </blockquote>
      <blockquote className={`text-left font-serif text-base sm:text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
        {description}
      </blockquote>
      <blockquote className={`text-left font-serif text-sm sm:text-base md:text-lg p-2 text-${theme}-300 group-hover:text-gray-900 mt-4 mb-2`}>
        Software Stack:
        <br/> {stack.join(', ')}
      </blockquote>
    </div>
  );
};

export default ProjectCard;