import { API_BASE } from '.'
import type { ServiceDetailDto, ServiceListDto } from './serviceTypes'

export async function fetchServices(): Promise<ServiceListDto[]> {
  const res = await fetch(`${API_BASE}/services/`)
  if (!res.ok) {
    throw new Error(`Failed to fetch services: ${res.status}`)
  }
  return res.json()
}

export async function fetchService(slug: string): Promise<ServiceDetailDto> {
  const res = await fetch(`${API_BASE}/services/${slug}/`)
  if (!res.ok) {
    throw new Error(`Failed to fetch service ${slug}: ${res.status}`)
  }
  return res.json()
}
