import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your next project"
        />

        <ScrollReveal>
          <p className="text-text-light/60 dark:text-text-dark/60 mb-4 text-lg">
            I'm always open to new opportunities and interesting projects.
            Whether you need a full-stack engineer or want to discuss a collaboration,
            feel free to reach out.
          </p>

          <p className="flex items-center justify-center gap-2 text-sm text-text-light/50 dark:text-text-dark/50 mb-8">
            <MapPin className="w-4 h-4" />
            {SITE_CONFIG.location} — Open to EU relocation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={`mailto:${SITE_CONFIG.email}`} variant="primary" size="lg">
              <Mail className="w-5 h-5" />
              {SITE_CONFIG.email}
            </Button>
            <Button
              href={`https://github.com/${SITE_CONFIG.github}`}
              variant="outline"
              size="lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              href={`https://linkedin.com/in/${SITE_CONFIG.linkedin}`}
              variant="ghost"
              size="lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
