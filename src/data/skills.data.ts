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
  { name: 'React', icon: React.createElement(ReactJS), category: 'frontend', url: 'https://react.dev/' },
  { name: 'Next.js', icon: React.createElement(NextJS), category: 'frontend', url: 'https://nextjs.org/' },
  { name: 'TypeScript', icon: React.createElement(TypeScript), category: 'language', url: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', icon: React.createElement(JavaScript), category: 'language', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
  { name: 'Tailwind CSS', icon: React.createElement(TailwindCSS), category: 'styling', url: 'https://tailwindcss.com/' },
  { name: 'Express', icon: React.createElement(Express), category: 'backend', url: 'https://expressjs.com/pt-br/' },
  { name: 'Node.js', icon: React.createElement(NodeJS), category: 'backend', url: 'https://nodejs.org/pt' },
  { name: 'Vite', icon: React.createElement(Vite), category: 'tooling', url: 'https://vite.dev/' },
  { name: 'Git', icon: React.createElement(Git), category: 'tooling', url: 'https://git-scm.com/' },
  { name: 'GitHub', icon: React.createElement(GitHub), category: 'tooling', url: 'https://github.com/' },
  { name: 'NPM', icon: React.createElement(Npm), category: 'tooling', url: 'https://www.npmjs.com/' },
  { name: 'Framer', icon: React.createElement(Framer), category: 'design', url: 'https://www.framer.com/' },
  { name: 'Figma', icon: React.createElement(Figma), category: 'design', url: 'https://www.figma.com/' },
  { name: 'HTML', icon: React.createElement(HTML5), category: 'language', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
  { name: 'CSS', icon: React.createElement(CSS), category: 'styling', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
] as const;
