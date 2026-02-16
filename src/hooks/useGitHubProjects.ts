import { useState, useEffect } from 'react';
import { CURATED_PROJECTS, SITE_CONFIG } from '@/lib/constants';
import { fetchRepoStats } from '@/lib/github';
import type { EnrichedProject } from '@/types/project';

export function useGitHubProjects() {
  const [projects, setProjects] = useState<EnrichedProject[]>(CURATED_PROJECTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function enrichProjects() {
      try {
        const enriched = await Promise.all(
          CURATED_PROJECTS.map(async (project) => {
            try {
              const repoName = project.githubUrl.split('/').pop();
              if (!repoName) return project;
              const stats = await fetchRepoStats(SITE_CONFIG.github, repoName);
              return { ...project, stats };
            } catch {
              return project;
            }
          })
        );
        setProjects(enriched);
      } catch {
        setError('Failed to load GitHub stats');
      } finally {
        setLoading(false);
      }
    }

    enrichProjects();
  }, []);

  return { projects, loading, error };
}
