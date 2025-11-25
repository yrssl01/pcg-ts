export type ServiceListDto = {
  id: number
  slug: string
  title: string
  icon: string | null
  has_detail_page: boolean
}

export type ServiceBlockImageDto = {
  id: number
  image: string
  caption: string
  order: number
}

export type ServiceBlockDto = {
  id: number
  title: string
  body: string
  order: number
  images: ServiceBlockImageDto[]
}

export type ServiceImageDto = {
  id: number
  image: string
  caption: string
  order: number
}

export type ServiceDetailDto = {
  id: number
  slug: string
  title: string
  description: string
  icon: string | null
  has_detail_page: boolean
  blocks: ServiceBlockDto[]
  images: ServiceImageDto[]
}
