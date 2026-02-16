import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { SITE_CONFIG } from '@/lib/constants';
import { Layers, Users, Rocket, Globe } from 'lucide-react';
import profileImg from '@/assets/nn.png';

const highlights = [
  {
    icon: Layers,
    title: 'Full-Stack Architecture',
    description: 'Building end-to-end applications with React, Node.js, NestJS, and microservices patterns.',
  },
  {
    icon: Rocket,
    title: 'Real-Time Systems',
    description: 'WebSocket messaging, WebRTC video calling, and event-driven architectures at scale.',
  },
  {
    icon: Users,
    title: 'Mentorship & Code Quality',
    description: 'Leading code reviews, mentoring junior developers, and enforcing TDD methodologies.',
  },
  {
    icon: Globe,
    title: 'Frontend Modernization',
    description: 'Migrating legacy codebases to modern React architectures with TypeScript and scalable patterns.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Engineer, problem solver, and team player"
        />

        <div className="grid lg:grid-cols-[280px_1fr_1fr] md:grid-cols-[240px_1fr] gap-10 items-start">
          {/* Profile photo */}
          <ScrollReveal className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
                <img
                  src={profileImg}
                  alt="Nassim Nabi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-56 h-56 md:w-64 md:h-64 rounded-2xl border-2 border-primary/10 -z-10" />
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-text-light/70 dark:text-text-dark/70 leading-relaxed">
              <p>{SITE_CONFIG.bio}</p>
              <p>
                I hold an Engineering Degree in Computer Science from ENISO (Sousse, Tunisia).
                My experience spans from architecting microservices and building ERP platforms
                to developing real-time communication systems with WebRTC and WebSockets.
              </p>
              <p>
                Based in {SITE_CONFIG.location}, I'm open to international opportunities. Outside
                of work, I enjoy playing piano, football, camping, and contributing to open source.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {['Arabic (Native)', 'French (C1)', 'English (B2/C1)'].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-md"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Highlight cards */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1 + 0.2}>
                <div className="flex gap-4 p-4 rounded-lg bg-surface-light dark:bg-surface-dark border border-black/5 dark:border-white/5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
