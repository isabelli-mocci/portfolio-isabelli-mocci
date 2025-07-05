import React from 'react';
import type { SkillData } from '../types/skills.types';
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

export const createSkillsData = (): readonly SkillData[] => [
  { name: 'React', icon: React.createElement(ReactJS), category: 'frontend' },
  { name: 'Next.js', icon: React.createElement(NextJS), category: 'frontend' },
  { name: 'TypeScript', icon: React.createElement(TypeScript), category: 'language' },
  { name: 'JavaScript', icon: React.createElement(JavaScript), category: 'language' },
  { name: 'Tailwind CSS', icon: React.createElement(TailwindCSS), category: 'styling' },
  { name: 'Express', icon: React.createElement(Express), category: 'backend' },
  { name: 'Node.js', icon: React.createElement(NodeJS), category: 'backend' },
  { name: 'Vite', icon: React.createElement(Vite), category: 'tooling' },
  { name: 'Git', icon: React.createElement(Git), category: 'tooling' },
  { name: 'GitHub', icon: React.createElement(GitHub), category: 'tooling' },
  { name: 'NPM', icon: React.createElement(Npm), category: 'tooling' },
  { name: 'Framer', icon: React.createElement(Framer), category: 'design' },
  { name: 'Figma', icon: React.createElement(Figma), category: 'design' },
  { name: 'HTML', icon: React.createElement(HTML5), category: 'language' },
  { name: 'CSS', icon: React.createElement(CSS), category: 'styling' },
] as const;
