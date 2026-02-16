import type { CuratedProject } from '@/types/project';

export const SITE_CONFIG = {
  name: 'Nassim Nabi',
  title: 'Full-Stack Software Engineer',
  email: 'nassimnabi@outlook.com',
  github: 'Nass400',
  linkedin: 'nassim-nabi',
  bio: `Full-Stack Software Engineer with 4 years of experience in modern web technologies and scalable architecture. I specialize in React, TypeScript, and Node.js, with a proven track record in frontend modernization, real-time systems, and mentoring developers.`,
  resumeUrl: '/nass_resumer.pdf',
  location: 'Tunis, Tunisia',
};

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  techStack: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'Hexagone SAS',
    role: 'Frontend Developer',
    location: 'Tunis, Tunisia',
    period: 'Sep 2023 — Present',
    bullets: [
      'Develop and maintain web application features using React.js, TypeScript, jQuery, and Vanilla JavaScript',
      'Migrated legacy TWIG templates to React.js, improving scalability and code maintainability',
      'Mentor junior developers and conduct code reviews to maintain quality standards',
      'Customize open-source projects (Spectrum, GrapesJS, CKEditor) to meet business requirements',
    ],
    techStack: ['React.js', 'TypeScript', 'jQuery', 'GrapesJS', 'CKEditor'],
  },
  {
    company: 'Olacube',
    role: 'Full-Stack Developer',
    location: 'Tunis, Tunisia',
    period: 'Aug 2022 — Mar 2023',
    bullets: [
      'Developed ERP system for maintenance company, streamlining workflow and increasing efficiency by 40%',
      'Implemented secure authentication and role-based access control for data protection',
      'Created intuitive interface for task management, scheduling, and team communication',
      'Established CI/CD pipelines using Docker to automate testing and deployment',
    ],
    techStack: ['Angular', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    company: 'ODAS Services',
    role: 'Full-Stack Developer',
    location: 'Tunis, Tunisia',
    period: 'Feb 2022 — Aug 2022',
    bullets: [
      'Architected microservices-based application using React.js, Node.js, and NestJS',
      'Designed database schemas and built RESTful APIs with PostgreSQL and MongoDB',
      'Developed real-time chat system with WebSockets and WebRTC for video communication',
      'Applied Test-Driven Development methodology to ensure code quality and reliability',
    ],
    techStack: ['React.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'WebRTC'],
  },
];

export const CURATED_PROJECTS: CuratedProject[] = [
  {
    title: 'Nass keys',
    description:
      'A lightweight Linux hotkey manager that allows you to map key combinations to commands, text, or key sequences—including sequential or simultaneous key presses—without manual setup. Perfect for automating repetitive tasks.',
    techStack: ['shell', 'python'],
    githubUrl: 'https://github.com/Nass400/nass-keys',
    featured: true,
  },
  {
    title: 'Guard app',
    description:
      'Medical Student Shift Scheduler, where future doctors can organize and schedule their working shits and staff.',
    techStack: ['React.js', 'Node.js', 'Render.js'],
    githubUrl: 'https://github.com/Nass400/guard-app',
    featured: true,
  },
];

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Angular', level: 80 },
      { name: 'Redux / React Hooks', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'jQuery', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'NestJS', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'Microservices', level: 82 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 83 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'Real-Time & DevOps',
    skills: [
      { name: 'WebSockets / Socket.io', level: 88 },
      { name: 'WebRTC', level: 80 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD Pipelines', level: 78 },
      { name: 'Git / GitHub', level: 92 },
      { name: 'RabbitMQ', level: 72 },
    ],
  },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: `https://github.com/${SITE_CONFIG.github}`, icon: 'Github' as const },
  { name: 'LinkedIn', url: `https://linkedin.com/in/${SITE_CONFIG.linkedin}`, icon: 'Linkedin' as const },
  { name: 'Email', url: `mailto:${SITE_CONFIG.email}`, icon: 'Mail' as const },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
