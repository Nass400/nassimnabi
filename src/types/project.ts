import type { RepoStats } from './github';

export type DocBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'code'; content: string; language?: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string; caption?: string };

export interface DocSection {
  blocks: DocBlock[];
}

export interface ProjectDocs {
  about: DocSection;
  installation: DocSection;
  usage: DocSection;
  configuration?: DocSection;
  proTips?: DocSection;
  dependencies?: DocSection;
  license?: DocSection;
  features?: DocSection;
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
