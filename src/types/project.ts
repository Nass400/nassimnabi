import type { RepoStats } from './github';

export interface ProjectDocs {
  about: string;
  installation: string;
  usage: string;
  features?: string;
  websiteUrl?: string;
}

export interface CuratedProject {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  docs?: ProjectDocs;
}

export interface EnrichedProject extends CuratedProject {
  stats?: RepoStats;
}
