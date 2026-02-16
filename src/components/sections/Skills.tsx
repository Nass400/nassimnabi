import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillCard } from '@/components/ui/SkillCard';
import { SKILLS } from '@/lib/constants';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
