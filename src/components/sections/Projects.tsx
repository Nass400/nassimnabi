import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useGitHubProjects } from '@/hooks/useGitHubProjects';
import { Loader2 } from 'lucide-react';

export function Projects() {
  const { projects, loading } = useGitHubProjects();

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);
    console.log(featured,other)
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built"
        />

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        {/* Featured */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Other */}
        {other.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {other.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i + featured.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
