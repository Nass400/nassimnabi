import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { EXPERIENCES } from '@/lib/constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and what I've built"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-primary/20" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-8 top-1 w-3 h-3 -translate-x-[5.5px] rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                  />

                  <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-black/5 dark:border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-text-light/50 dark:text-text-dark/50">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-text-light/65 dark:text-text-dark/65 leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
