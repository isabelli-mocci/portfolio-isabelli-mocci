// path: src/components/SkillsSection.tsx

import React from 'react';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import { Zap, Sparkle } from 'lucide-react';

import CSS from '../assets/icons/skills/css/CSS';
import Express from '../assets/icons/skills/express/Express';
import Figma from '../assets/icons/skills/figma/Figma';
import Framer from '../assets/icons/skills/framer/Framer';
import Git from '../assets/icons/skills/git/Git';
import GitHub from '../assets/icons/skills/github/Github';
import HTML5 from '../assets/icons/skills/html5/Html5';
import JavaScript from '../assets/icons/skills/javascript/Javascript';
import NextJS from '../assets/icons/skills/nextdotjs/Nextdotjs';
import NodeJS from '../assets/icons/skills/nodedotjs/Nodedotjs';
import Npm from '../assets/icons/skills/npm/Npm';
import ReactJS from '../assets/icons/skills/react/React';
import TailwindCSS from '../assets/icons/skills/tailwindcss/Tailwindcss';
import TypeScript from '../assets/icons/skills/typescript/Typescript';
import Vite from '../assets/icons/skills/vite/Vite';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skillsList: Skill[] = [
  { name: 'React', icon: <ReactJS /> },
  { name: 'Next.js', icon: <NextJS /> },
  { name: 'TypeScript', icon: <TypeScript /> },
  { name: 'JavaScript', icon: <JavaScript /> },
  { name: 'Tailwind CSS', icon: <TailwindCSS /> },
  { name: 'Express', icon: <Express /> },
  { name: 'Node.js', icon: <NodeJS /> },
  { name: 'Vite', icon: <Vite /> },
  { name: 'Git', icon: <Git /> },
  { name: 'GitHub', icon: <GitHub /> },
  { name: 'NPM', icon: <Npm /> },
  { name: 'Framer', icon: <Framer /> },
  { name: 'Figma', icon: <Figma /> },
  { name: 'HTML', icon: <HTML5 /> },
  { name: 'CSS', icon: <CSS /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id='skills'
      className='flex flex-col justify-center items-center min-h-[90vh] h-auto px-4 relative overflow-visible z-10'
      style={{ minHeight: '90vh', height: 'auto' }}
    >
      <div>
        <span
          className='absolute top-1/2 left-0 w-8 h-8 rounded-full pointer-events-none'
          style={{
            background: 'radial-gradient(circle, #000 0%, to transparent 70%)',
            filter: 'blur(8px)',
            transform: 'translateY(-50%)',
            animation: 'light-dot-move 15s infinite alternate',
          }}
        />
      </div>

      <style>{`
        @keyframes light-dot-move {
          0% { left: 0; }
          100% { left: calc(100% - 2rem); }
        }
      `}</style>

      <div className='max-w-7xl mx-auto z-10 relative flex flex-col justify-center items-center h-full'>
        <h2 className='text-center text-4xl md:text-5xl mb-4 tracking-tight flex items-center gap-2'>
          <span className='inline-block align-middle text-text-green animate-spinSlow'>
            <Sparkle className='w-8 h-8 inline-block' />
          </span>
          <span>Techs & Tools</span>
          <span className='inline-block align-middle text-text-green animate-bounce'>
            <Zap className='w-8 h-8 inline-block' />
          </span>
        </h2>

        <p className='text-text-gray text-center font-medium md:text-lg mb-20 max-w-xl mx-auto'>
          The technologies and tools that I use to create websites.
        </p>

        <motion.div
          className='w-full grid grid-cols-5 grid-rows-3 gap-6 md:gap-8 px-2 md:px-0 flex-1 items-stretch'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {skillsList.map(skill => (
            <motion.div
              key={skill.name}
              variants={item}
              className='flex flex-col items-center justify-end p-2 md:p-3 rounded-3xl transition-all duration-300 group relative z-10'
              animate={false}
              layout
              layoutRoot
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
