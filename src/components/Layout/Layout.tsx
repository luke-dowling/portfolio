import { Outlet } from "react-router-dom"

import { PageTransitionAnimation } from "@/Animations/PageTransitionAnimation"
import { Nav } from "@/components/Nav/Nav"
import { Footer } from "@/components/Footer/Footer"

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
