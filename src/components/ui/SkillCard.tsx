import { motion } from 'framer-motion';
import type { SkillGroup } from '@/lib/constants';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

interface SkillCardProps {
  group: SkillGroup;
  index: number;
}

export function SkillCard({ group, index }: SkillCardProps) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-black/5 dark:border-white/5">
        <h3 className="text-lg font-semibold mb-4 text-primary">{group.category}</h3>
        <div className="space-y-3">
          {group.skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-text-light/50 dark:text-text-dark/50 font-mono text-xs">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + i * 0.05,
                    ease: 'easeOut',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
