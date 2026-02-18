import librixImageMobile from '@/assets/images/librix-m.png'
import librixImageDesktop from '@/assets/images/librix-d.png'
import rickImageMobile from '@/assets/images/rick.jpeg'
import maskedRunnerImage from '@/assets/images/masked-runner-tablet.png'
import type { Project } from '@/libs/types'

export const projectsData: Project[] = [
  {
    id: 0,
    title: 'Librix',
    tagline: 'Librix is a user based book exchange service.',
    description:
      'Librix is a user based book exchange service. We provide a REST API built with Express JS and MongoDB, for the storage of users, books, possible matches and chat intergration.',
    image_mobile: librixImageMobile,
    image_tablet: librixImageMobile,
    image_desktop: librixImageDesktop,
    techStack: ['MongoDb', 'React Native', 'Express'],
    url: 'https://github.com/Final-Project-X',
  },
  {
    id: 1,
    title: 'Rick Finder',
    tagline: 'Because Google doesn’t have enough Ricks.',
    description: `It’s like Google, but only for "Rick and Morty" characters. Wanna know if a guy’s alive, dead, or... uh, "Schrödinger’s"? Boom—this app’s got you covered.`,
    image_mobile: rickImageMobile,
    image_tablet: rickImageMobile,
    image_desktop: rickImageMobile,
    techStack: ['React', 'TypeScript', 'RestAPI'],
    url: 'https://rick-finder.onrender.com/',
  },
  {
    id: 2,
    title: 'Mask Runner',
    tagline: 'Global Game Jam 2026 - App with the theme of "MASK".',
    description: 'A game designed with the theme of MASKm using a 2d grid system.',
    image_mobile: maskedRunnerImage,
    image_tablet: maskedRunnerImage,
    image_desktop: maskedRunnerImage,
    techStack: ['React', 'TypeScript', 'ThreeJS'],
    url: 'https://masks.p6.gg/',
  },
]
