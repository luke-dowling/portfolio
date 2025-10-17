import { motion } from "framer-motion"
import { useEffect, useRef, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

import { useTheme } from "@/hooks/useThemeContext"
import { Footer } from "@/components/Footer/Footer"

interface PageProps {
  children: ReactNode
}

export const PageTransitionAnimation = ({ children }: PageProps) => {
  const { theme } = useTheme()
  const location = useLocation()

  const pageRef = useRef<HTMLDivElement>(null)

  // Update visibility based on scroll direction
  useEffect(() => {
    pageRef.current!.scrollIntoView({ behavior: "smooth" })
  }, [location])

  return (
    <div className={theme} ref={pageRef}>
      <motion.div
        className={`container container-dark`}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {children}
        <Footer />
      </motion.div>
    </div>
  )
}
