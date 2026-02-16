import { ScrollReveal } from '@/components/motion/ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-light/60 dark:text-text-dark/60 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
