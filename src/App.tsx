import { Routes, Route } from 'react-router-dom'

import { Homepage } from '@/pages/Homepage'
import { Profile } from '@/pages/Profile'
import { Projects } from '@/pages/Projects'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'
import { Layout } from '@/components/Layout'

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
