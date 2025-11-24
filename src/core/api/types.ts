export type ServiceDto = {
  id: number
  title: string
}

export type ProjectImageDto = {
  id: number
  image: string
  order: number
}

export type ProjectPlanDto = {
  id: number
  title: string
  image: string
  order: number
}

export type ProjectDto = {
  id: number
  slug: string
  title: string
  description: string
  extra_description: string
  address: string
  period: string
  services: ServiceDto[]
  images: ProjectImageDto[]
  plans: ProjectPlanDto[]
}
