import { Nav } from '@/components/Nav'
import { Welcome } from '@/components/sections/Welcome'
import { Profile } from '@/components/sections/Profile'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { LogosAnimation } from '@/Animations/LogosAnimation'

export default function Home() {
  return (
    <>
      <Nav />
      <Welcome />
      <Profile />
      <LogosAnimation />
      <Projects />
      <Contact />
    </>
  )
}
