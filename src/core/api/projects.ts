import type { ProjectDto } from './projectTypes'
import { API_BASE } from '.'

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
