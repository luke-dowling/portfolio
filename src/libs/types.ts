export type Theme = 'light' | 'dark'

type Technology =
  | 'React'
  | 'React Native'
  | 'Express'
  | 'MongoDb'
  | 'TypeScript'
  | 'JavaScript'
  | 'RestAPI'
  | 'Styled Components'
  | 'ThreeJS'

export interface Project {
  id: number
  title: string
  tagline: string
  description: string
  image_mobile: string
  image_tablet: string
  image_desktop: string
  techStack: Technology[]
  url: string
}
