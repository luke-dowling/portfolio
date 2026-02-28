import aurekaImageMobile from '@/assets/images/aureka.webp'
import librixImageMobile from '@/assets/images/librix-m.png'
import librixImageDesktop from '@/assets/images/librix-d.png'
import rickImageMobile from '@/assets/images/rick.jpeg'
import maskedRunnerImage from '@/assets/images/masked-runner-tablet.png'
import type { Project } from '@/libs/types'

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'aureka',
    tagline: 'Your AI Research Assistant',
    description:
      'aureka’s research environment supports archivists and librarians, academics, and journalists in their work with audio and video recordings using artificial intelligence.',
    image_mobile: aurekaImageMobile,
    image_tablet: aurekaImageMobile,
    image_desktop: aurekaImageMobile,
    techStack: ['Next.js', 'JavaScript', 'Docker'],
    url: 'https://www.aureka.ai/',
  },
  {
    id: 2,
    title: 'Masked Runner',
    tagline: 'Keep running. Keep your mask on.',
    description:
      'MASKED RUNNER is a fast-paced 3D endless runner where every second counts. Dodge waves of obstacles, outrun enemies, and grab power-ups: speed boosts, healing potions, and immunity, to survive as long as you can. How far will you go before the mask comes off?',
    image_mobile: maskedRunnerImage,
    image_tablet: maskedRunnerImage,
    image_desktop: maskedRunnerImage,
    techStack: ['React', 'TypeScript', 'ThreeJS'],
    url: 'https://masks.p6.gg/',
  },
  {
    id: 3,
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
    id: 4,
    title: 'Librix',
    tagline: 'Exchange books easily.',
    description:
      'Librix is a prototype for a user based book exchange service. We provide a REST API built with Express JS and MongoDB, for the storage of users, books, possible matches and chat integration.',
    image_mobile: librixImageMobile,
    image_tablet: librixImageMobile,
    image_desktop: librixImageDesktop,
    techStack: ['MongoDb', 'React Native', 'Express'],
    url: 'https://github.com/Final-Project-X',
  },
]
