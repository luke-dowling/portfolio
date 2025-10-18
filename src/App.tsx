import { Routes, Route } from 'react-router-dom'

import { Homepage } from '@/pages/Homepage/Homepage.tsx'
import { Profile } from '@/pages/Profile/Profile'
import { Projects } from '@/pages/Projects/Projects.tsx'
import { Contact } from '@/pages/Contact/Contact.tsx'
import { NotFound } from '@/pages/NotFound/NotFound.tsx'
import { Layout } from '@/components/Layout/Layout'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='profile' element={<Profile />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
