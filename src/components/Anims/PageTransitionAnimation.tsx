import { motion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { Footer } from '@/components/Footer/Footer'

interface PageProps {
  children: ReactNode
}

export const PageTransitionAnimation = ({ children }: PageProps) => {
  const location = useLocation()

  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    pageRef.current!.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <div ref={pageRef}>
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
