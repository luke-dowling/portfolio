import { Outlet } from 'react-router-dom'

import { PageTransitionAnimation } from '@/components/PageTransitionAnimation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/ui/Footer'

export interface LayoutProps {
  ref?: React.RefObject<HTMLDivElement | null>
  classList?: string
}

export const Layout = ({ ref, classList }: LayoutProps) => {
  return (
    <PageTransitionAnimation>
      <Nav />
      <Outlet />
    </PageTransitionAnimation>
  )
}
