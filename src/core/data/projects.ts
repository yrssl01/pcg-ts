export type ProjectSlug =
  | 'admin-building'
  | 'business-center'
  | 'medical-center'
  | 'tiens-office'
  | 'press-club'

export type Project = {
  slug: ProjectSlug
  title: string
  subtitle?: string
  shortDescription: string
  extraDescription: string
  address?: string
  period?: string
  services: string[]
}

export const projects: Project[] = [
  {
    slug: 'admin-building',
    title: 'Административное здание',
    shortDescription:
      'Ультрасовременное административное здание, выполненное с учетом современных архитектурных тенденций и актуальных строительных решений.',
    extraDescription:
      'Проект разработан с применением технологии информационного моделирования, что позволяет максимально точно координировать все этапы строительства, минимизировать риски и оптимизировать сроки.',
    address: 'г. Алматы, Медеуский район, Кульджинский тракт',
    period: 'Начало строительства ожидается к 3-му кварталу 2025г.',
    services: [
      'Управление проектом',
      'Разработка ПСД',
      'Авторский и технический надзор',
      'Строительно-монтажные работы',
    ],
  },
]

export function getProjectBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return projects.find((p) => p.slug === slug)
}
