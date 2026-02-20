import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import type { MotionProps } from 'framer-motion'

interface PageHeadingProps extends Pick<MotionProps, 'initial' | 'animate' | 'variants'> {
  children: ReactNode
  className?: string
}

export const PageHeading = forwardRef<HTMLHeadingElement, PageHeadingProps>(
  ({ children, className, initial, animate, variants }, ref) => {
    return (
      <motion.h1
        ref={ref}
        className={`pb-8 ${className}`}
        variants={variants}
        initial={initial}
        animate={animate}
      >
        {children}
      </motion.h1>
    )
  },
)
