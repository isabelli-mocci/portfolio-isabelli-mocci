import type { ProjectItem } from './projectItem';

export const projectsData: ProjectItem[] = [
  {
    id: '1',
    title: 'Web3 Design Agency.',
    firmName: 'WEOS',
    imageUrl: 'https://via.placeholder.com/600x400?text=Web3+Agency+Preview',
    technologies: ['REACT', 'TYPESCRIPT', 'TAILWIND', 'THREE.JS'],
    description:
      "This web application is designed to assist companies in managing the careers of their employees. The platform evaluates both hard skills (technical abilities) and soft skills (interpersonal skills), providing insights into employees' readiness for promotions and identifying the steps needed for professional development. This is a very detailed description of the project and its features, demonstrating how comprehensive the application is.",
    myRole: [
      'Interactive Design: Incorporated smooth animations and transitions to maintain user engagement, leveraging modern design and animation concepts.',
      'Lottie Asset Integration: Added dynamic animations to enhance interactions making the experience more entertaining.',
    ],
    toolsUsed: [
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Illustrator', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'After Effects', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg' },
    ],
    moreImages: [
      'https://via.placeholder.com/800x600?text=Web3+Detail+Image+1',
      'https://via.placeholder.com/800x600?text=Web3+Detail+Image+2',
    ],
    codeLink: 'https://github.com/your-repo/web3-agency',
    websiteLink: 'https://web3-agency.your-site.com',
  },
  {
    id: '2',
    title: 'Employee Career Mgmt.',
    firmName: 'HR SOLUTIONS',
    imageUrl: 'https://via.placeholder.com/600x400?text=HR+Project+Preview',
    technologies: ['NODE.JS', 'EXPRESS', 'MONGODB', 'REACT'],
    description:
      'A robust full-stack application for human resources management, focusing on employee career progression. It includes features for skill assessment, performance reviews, and personalized development plans. The system helps identify skill gaps and recommends training modules, fostering continuous growth within the organization and improving overall team performance.',
    myRole: [
      'Backend Development: Designed and implemented RESTful APIs for data management and user authentication.',
      'Frontend Integration: Connected React components with backend services, ensuring a seamless user experience.',
      'Database Management: Configured and optimized MongoDB for efficient data storage and retrieval.',
    ],
    toolsUsed: [
      { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Postman', iconUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    ],
    moreImages: ['https://via.placeholder.com/800x600?text=HR+Detail+Image+1'],
    codeLink: 'https://github.com/your-repo/hr-project',
    websiteLink: 'https://hr-project.your-site.com',
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    firmName: 'SHOPIFY CLONE',
    imageUrl: 'https://via.placeholder.com/600x400?text=E-Commerce+Preview',
    technologies: ['NEXT.JS', 'REACT', 'TAILWIND', 'NODE.JS'],
    description:
      'A scalable e-commerce platform with real-time inventory, payment integration, and user-friendly admin dashboard. Features include product search, reviews, and order tracking.',
    myRole: [
      'Fullstack Development: Built both frontend and backend, ensuring seamless integration.',
      'Payment Integration: Implemented Stripe for secure transactions.',
    ],
    toolsUsed: [
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Stripe', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg' },
      { name: 'Jest', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    ],
    moreImages: [
      'https://via.placeholder.com/800x600?text=E-Commerce+Detail+1',
      'https://via.placeholder.com/800x600?text=E-Commerce+Detail+2',
    ],
    codeLink: 'https://github.com/your-repo/ecommerce-platform',
    websiteLink: 'https://ecommerce.your-site.com',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    firmName: 'FREELANCE',
    imageUrl: 'https://via.placeholder.com/600x400?text=Portfolio+Preview',
    technologies: ['REACT', 'TYPESCRIPT', 'TAILWIND', 'VITE'],
    description:
      'A personal portfolio to showcase projects, skills, and contact information. Features include a blog, dark mode, and responsive design.',
    myRole: [
      'UI/UX Design: Created a modern, accessible, and responsive interface.',
      'Content Management: Developed a simple CMS for blog posts.',
    ],
    toolsUsed: [
      { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      { name: 'Netlify', iconUrl: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
      { name: 'Markdown', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg' },
    ],
    moreImages: [
      'https://via.placeholder.com/800x600?text=Portfolio+Detail+1',
      'https://via.placeholder.com/800x600?text=Portfolio+Detail+2',
    ],
    codeLink: 'https://github.com/your-repo/portfolio',
    websiteLink: 'https://portfolio.your-site.com',
  },
  {
    id: '5',
    title: 'Task Manager App',
    firmName: 'PRODUCTIVITY INC.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Task+Manager+Preview',
    technologies: ['REACT NATIVE', 'TYPESCRIPT', 'FIREBASE'],
    description:
      'A mobile app for task management with push notifications, real-time sync, and offline support. Users can create, edit, and organize tasks efficiently.',
    myRole: [
      'Mobile Development: Built cross-platform app using React Native.',
      'Cloud Integration: Used Firebase for authentication and data storage.',
    ],
    toolsUsed: [
      { name: 'React Native', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Expo', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
    ],
    moreImages: [
      'https://via.placeholder.com/800x600?text=Task+Manager+Detail+1',
      'https://via.placeholder.com/800x600?text=Task+Manager+Detail+2',
    ],
    codeLink: 'https://github.com/your-repo/task-manager',
    websiteLink: 'https://taskmanager.your-site.com',
  },
];
