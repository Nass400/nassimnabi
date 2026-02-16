import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const iconMap = { Github, Linkedin, Mail } as const;

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-light/50 dark:text-text-dark/50">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-md text-text-light/50 dark:text-text-dark/50 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
