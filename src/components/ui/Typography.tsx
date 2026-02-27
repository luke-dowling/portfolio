import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import type { MotionProps } from 'framer-motion'

interface TextProps extends Pick<MotionProps, 'initial' | 'animate' | 'variants'> {
  children: ReactNode
  className?: string
}

export const Heading = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, className, initial, animate, variants }, ref) => {
    return (
      <motion.h2
        ref={ref}
        className={`${className} py-8 md:text-3xl lg:text-4xl`}
        variants={variants}
        initial={initial}
        animate={animate}
      >
        {children}
      </motion.h2>
    )
  },
)

export const Text = forwardRef<HTMLHeadingElement, TextProps>(
  ({ children, className, initial, animate, variants }, ref) => {
    return (
      <motion.p
        ref={ref}
        className={`${className} md:text-lg`}
        variants={variants}
        initial={initial}
        animate={animate}
      >
        {children}
      </motion.p>
    )
  },
)
