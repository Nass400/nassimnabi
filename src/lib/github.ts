import type { GitHubRepo, RepoStats } from '@/types/github';

const GITHUB_API = 'https://api.github.com';

export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`
  );
  if (!response.ok) throw new Error('Failed to fetch repos');
  return response.json();
}

export async function fetchRepoStats(owner: string, repo: string): Promise<RepoStats> {
  const response = await fetch(`${GITHUB_API}/repos/${owner}/${repo}`);
  if (!response.ok) throw new Error(`Failed to fetch stats for ${repo}`);
  const data: GitHubRepo = await response.json();
  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
    language: data.language,
  };
}
