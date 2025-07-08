import { Palette, Code, Apple, BookOpen, Heart, Palmtree, PenTool } from 'lucide-react';

export const pillsData = [
  {
    text: 'creative',
    icon: Palette,
    initialRotation: -8,
    initialX: '20%',
    initialY: '90%',
  },
  {
    text: 'code girl',
    icon: Code,
    initialRotation: 12,
    initialX: '60%',
    initialY: '90%',
  },
  {
    text: 'ex-teacher',
    icon: Apple,
    initialRotation: -15,
    initialX: '30%',
    initialY: '90%',
  },
  {
    text: 'book obsessed',
    icon: BookOpen,
    initialRotation: 8,
    initialX: '80%',
    initialY: '90%',
  },
  {
    text: 'motion lover',
    icon: Heart,
    initialRotation: -12,
    initialX: '50%',
    initialY: '87%',
  },
  {
    text: 'brazilian',
    icon: Palmtree,
    initialRotation: 15,
    initialX: '20%',
    initialY: '80%',
  },
  {
    text: 'digital illustrator',
    icon: PenTool,
    initialRotation: -6,
    initialX: '20%',
    initialY: '60%',
  },
];

export const pillsPositions = [
  { left: '10%', top: '65%' },
  { left: '25%', top: '65%' },
  { left: '40%', top: '65%' },
  { left: '10%', top: '78%' },
  { left: '25%', top: '78%' },
  { left: '40%', top: '78%' },
  { left: '25%', top: '91%' },
];

export const pillsPositionsCompact = [
  { left: '-10%', top: '1%' },   // creative 
  { left: '70%', top: '5%' },   // code girl
  { left: '80%', top: '-10%' },  // ex-teacher
  { left: '85%', top: '40%' },  // book obsessed
  { left: '20%', top: '20%' },  // motion lover
  { left: '60%', top: '55%' },  // brazilian
  { left: '-15%', top: '60%' },  // digital illustrator
];
