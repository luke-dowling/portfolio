import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { Project } from '@/components/Project'
import { projectsData } from '@/libs/data'
import { Heading } from '@/components/ui/Typography'

const titleContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const letterVariant = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

const dotVariant = {
  initial: { opacity: 0, y: 40, scale: 1.6 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const, delay: 0.05 },
  },
}

export const Projects = () => {
  const h1Ref = useRef(null)
  const isInView = useInView(h1Ref, { margin: '0px 0px -40% 0px', once: true })

  return (
    <section id='projects' className='page-container overflow-x-hidden'>
      <Heading
        ref={h1Ref}
        variants={titleContainer}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
      >
        {'Projects'.split('').map((char, i) => (
          <motion.span key={i} variants={letterVariant} style={{ color: 'inherit' }}>
            {char}
          </motion.span>
        ))}
        <motion.span variants={dotVariant}>.</motion.span>
      </Heading>

      <div className='flex flex-col gap-12'>
        {projectsData.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
