import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';
import { HeroScene } from '@/components/three/HeroScene';
import { FadeIn } from '@/components/motion/FadeIn';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const iconMap = { Github, Linkedin, Mail } as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroScene />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <FadeIn delay={0.2}>
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wide">
            Hello, I'm
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">{SITE_CONFIG.name}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-text-light/70 dark:text-text-dark/70 mb-6">
            {SITE_CONFIG.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-text-light/60 dark:text-text-dark/60 max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
            I build scalable web applications with React, TypeScript, and Node.js.
            Experienced in real-time systems, microservices, and frontend modernization.
          </p>
        </FadeIn>

        <FadeIn delay={1.0}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button href="#contact" variant="primary" size="md">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button href={SITE_CONFIG.resumeUrl} variant="outline" size="md">
              <FileText className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={1.2}>
          <div className="flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-full border border-black/10 dark:border-white/10 hover:border-primary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="w-6 h-6 text-text-light/40 dark:text-text-dark/40" />
        </a>
      </motion.div>
    </section>
  );
}
