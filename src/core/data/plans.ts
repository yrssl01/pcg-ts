export type ProjectPlanRoom = {
  id: number
  name: string
  area: number
}

export type ProjectPlan = {
  title: string
  image: string
  rooms: ProjectPlanRoom[]
}
