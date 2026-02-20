import { Nav } from '@/components/Nav'
import { Welcome } from '@/pages/Welcome'
import { Profile } from './pages/Profile'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { LogosAnimation } from './Animations/LogosAnimation'

export default function App() {
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
