import type { ProjectDto } from './types'

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000/api'

export async function fetchProjects(): Promise<ProjectDto[]> {
  const res = await fetch(`${API_BASE}/projects/`)
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status}`)
  }
  return res.json()
}

export async function fetchProject(slug: string): Promise<ProjectDto> {
  const res = await fetch(`${API_BASE}/projects/${slug}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch project ${slug}: ${res.status}`)
  }
  return res.json()
}
