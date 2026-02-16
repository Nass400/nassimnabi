import type { RepoStats } from './github';

export interface CuratedProject {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface EnrichedProject extends CuratedProject {
  stats?: RepoStats;
}
