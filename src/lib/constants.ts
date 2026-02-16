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
    title: 'Nass Keys',
    slug: 'nass-keys',
    description:
        'A lightweight Linux hotkey manager that allows you to map key combinations to commands, text, or key sequences—including sequential or simultaneous key presses—without manual setup. Perfect for automating repetitive tasks.',
    techStack: ['shell', 'python'],
    githubUrl: 'https://github.com/Nass400/nass-keys',
    featured: true,
    docs: {
      about: {
        blocks: [
          {
            type: 'paragraph',
            content:
                'Nass Keys is a lightweight Linux hotkey manager built with Shell and Python. It lets you map any key combination to commands, text snippets, or key sequences without editing config files manually.'
          },
          {
            type: 'image',
            src: '/docs/nass-keys/overview.png',
            alt: 'Nass Keys CLI overview',
            caption: 'Nass Keys CLI in action'
          },
          {
            type: 'paragraph',
            content:
                'Whether you need to launch apps, type boilerplate text, or trigger complex key sequences, Nass Keys handles it all from a simple CLI interface.'
          }
        ]
      },
      features: {
        blocks: [
          {
            type: 'list',
            items: [
              'Map key combos to shell commands, text, or key sequences',
              'Supports sequential (seq) and simultaneous (sim) key presses',
              'Simple CLI interface for adding, listing, and removing hotkeys',
              'Runs as a background daemon',
              'Lightweight with minimal dependencies',
              'Works on any Linux desktop environment'
            ]
          }
        ]
      },
      installation: {
        blocks: [
          {
            type: 'paragraph',
            content: 'Clone the repository:'
          },
          {
            type: 'code',
            language: 'bash',
            content: 'git clone https://github.com/Nass400/nass-keys.git\ncd nass-keys'
          },
          {
            type: 'paragraph',
            content: 'Run the install script:'
          },
          {
            type: 'code',
            language: 'bash',
            content: 'chmod +x install.sh\n./install.sh'
          },
          {
            type: 'paragraph',
            content:
                'This will install the required Python dependencies, set up the CLI, and initialize the background daemon.'
          }
        ]
      },
      usage: {
        blocks: [
          { type: 'paragraph', content: 'Add a new hotkey:' },
          { type: 'code', language: 'bash', content: 'nass-keys add' },
          {
            type: 'paragraph',
            content:
                'You will be prompted to press your desired key combination, then choose whether to map it to a command, text, or key sequence.'
          },
          {
            type: 'image',
            src: '/docs/nass-keys/add-hotkey.png',
            alt: 'Adding a hotkey',
            caption: 'Interactive hotkey binding prompt'
          },
          { type: 'paragraph', content: 'List all hotkeys:' },
          { type: 'code', language: 'bash', content: 'nass-keys list' },
          {
            type: 'image',
            src: '/docs/nass-keys/list-hotkeys.png',
            alt: 'Hotkey list output',
            caption: 'Example output of configured hotkeys'
          },
          { type: 'paragraph', content: 'Remove a hotkey:' },
          { type: 'code', language: 'bash', content: 'nass-keys remove' },
          { type: 'paragraph', content: 'Apply or start the daemon:' },
          { type: 'code', language: 'bash', content: 'nass-keys start\nnass-keys apply' },
          {
            type: 'video',
            src: '/docs/nass-keys/demo.mp4',
            caption: 'Full workflow demo: add, list, and use a hotkey'
          },
          {
            type: 'paragraph',
            content:
                'Hotkey Command Formats:'
          },
          {
            type: 'list',
            items: [
              'Sequential: seq:key1,key2 — Press keys in order, e.g., seq:F11,F12',
              'Simultaneous: sim:key1,key2 — Press keys together, e.g., sim:F11,F12',
              'Text: text:string — Automatically types text, e.g., text:Hello world!',
              'Command: cmd:utility — Executes terminal commands, e.g., cmd:gnome-terminal',
              'Direct Bash command — Runs any shell command, e.g., xdg-open ~/Docs'
            ]
          }
        ]
      },
      configuration: {
        blocks: [
          {
            type: 'paragraph',
            content:
                'All hotkey definitions are stored in ~/.config/my_hotkeys.conf. Example configuration:'
          },
          {
            type: 'code',
            language: 'bash',
            content: '# Sequential keys\nCtrl+Alt+R : seq:F11,F12\n\n# Type text\nCtrl+Alt+U : text:Hello world!\n\n# Run a command\nCtrl+Alt+N : cmd:gnome-terminal'
          },
          {
            type: 'paragraph',
            content:
                'Comments starting with # are ignored, making it easy to organize your shortcuts.'
          }
        ]
      },
      proTips: {
        blocks: [
          {
            type: 'list',
            items: [
              'Delays: Use "sleep" in sequential keys, e.g., seq:F11,sleep 0.1,F12',
              'X11 Requirement: Ensure you run an X11 session (common on Ubuntu, Mint, Fedora)',
              'Use simple, memorable key combinations for productivity'
            ]
          }
        ]
      },
      dependencies: {
        blocks: [
          {
            type: 'list',
            items: [
              'xbindkeys: Detect keyboard shortcuts',
              'xdotool: Simulate mouse and keyboard input',
              'xvkbd: Handle virtual keyboard text entry'
            ]
          }
        ]
      },
      license: {
        blocks: [
          {
            type: 'paragraph',
            content:
                'This project is open-source and free to use, modify, and distribute.'
          }
        ]
      }
    }
  },
  {
    title: 'Guard app',
    slug: 'guard-app',
    description:
      'Medical Student Shift Scheduler, where future doctors can organize and schedule their working shifts and staff.',
    techStack: ['React.js', 'Node.js', 'Render.js'],
    githubUrl: 'https://github.com/Nass400/guard-app',
    featured: true,
    docs: {
      about: {
        blocks: [
          { type: 'paragraph', content: 'Guard App is a shift scheduling platform designed for medical students and hospital staff. It simplifies the process of organizing on-call shifts, managing team availability, and coordinating schedules across departments.' },
          { type: 'image', src: '/docs/guard-app/dashboard.png', alt: 'Guard App dashboard', caption: 'Main scheduling dashboard' },
          { type: 'paragraph', content: 'Built with React.js on the frontend and Node.js on the backend.' },
        ],
      },
      features: {
        blocks: [
          { type: 'list', items: [
            'Interactive shift calendar with drag-and-drop scheduling',
            'Role-based access for admins and staff members',
            'Automatic conflict detection for overlapping shifts',
            'Team overview dashboard',
            'Notification system for shift changes',
            'Responsive design for mobile and desktop',
          ] },
          { type: 'video', src: '/docs/guard-app/features-walkthrough.mp4', caption: 'Features walkthrough' },
        ],
      },
      installation: {
        blocks: [
          { type: 'paragraph', content: 'Clone the repository:' },
          { type: 'code', language: 'bash', content: 'git clone https://github.com/Nass400/guard-app.git\ncd guard-app' },
          { type: 'paragraph', content: 'Install dependencies:' },
          { type: 'code', language: 'bash', content: 'npm install' },
          { type: 'paragraph', content: 'Set up environment variables by copying the example env file:' },
          { type: 'code', language: 'bash', content: 'cp .env.example .env' },
          { type: 'paragraph', content: 'Start the development server:' },
          { type: 'code', language: 'bash', content: 'npm run dev' },
        ],
      },
      usage: {
        blocks: [
          { type: 'paragraph', content: 'Once the app is running, log in with your credentials or create a new account. From the dashboard you can:' },
          { type: 'list', items: [
            'View the shift calendar for your department',
            'Create and assign shifts by clicking on a date',
            'Swap shifts with other team members',
            'Export your schedule',
          ] },
          { type: 'image', src: '/docs/guard-app/shift-calendar.png', alt: 'Shift calendar view', caption: 'Calendar with assigned shifts' },
        ],
      },
    },
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
