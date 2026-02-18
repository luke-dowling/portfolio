import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useRef } from 'react'

import type { Project as ProjectType } from '@/libs/types'
import { projectsData } from '@/libs/data'

const xOffset = 100
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
    display: 'block',
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
    display: 'none',
  }),
}

interface ProjectProps {
  currentProjectId: number
  setProject: (newId: number, newDirection?: number) => void
  direction: number
  project: ProjectType
}

export const Project = ({ currentProjectId, setProject, direction, project }: ProjectProps) => {
  const hasPaginated = useRef(false)

  function checkIdIsValid(newId: number) {
    if (newId === -1) return projectsData.length - 1
    if (newId === projectsData.length) return 0
    return newId
  }

  function detectPaginationGesture(
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset }: { offset: { x: number } },
  ) {
    if (hasPaginated.current) return
    let newId = currentProjectId
    const threshold = xOffset / 2

    if (offset.x < -threshold) {
      newId = currentProjectId + 1
    } else if (offset.x > threshold) {
      newId = currentProjectId - 1
    }

    if (newId !== currentProjectId) {
      hasPaginated.current = true
      // check new id is within bounds
      newId = checkIdIsValid(newId)
      setProject(newId, offset.x < 0 ? 1 : -1)
    }
  }

  return (
    <motion.div className='relative h-[500px]'>
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentProjectId}
          className='absolute top-0'
          data-page={currentProjectId}
          variants={variants}
          initial='enter'
          animate='active'
          exit='exit'
          drag='x'
          onDrag={detectPaginationGesture}
          onDragStart={() => (hasPaginated.current = false)}
          onDragEnd={() => (hasPaginated.current = true)}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          custom={direction}
        >
          <motion.h2
            className='my-16 mb-8 font-roboto text-base font-light whitespace-nowrap'
            // variants={projectsItemAnimation}
          >
            {project.title}
          </motion.h2>

          <Link to={project.url} target='_blank' rel='noreferrer'>
            <motion.div
              // variants={projectsItemAnimation}
              className='rounded-lg overflow-hidden h-[180px] relative bg-[var(--bg)] desktop:h-[250px] desktop:my-8'
            >
              <FaExternalLinkAlt className='absolute right-2.5 top-2.5 text-primary-white bg-primary-black text-xl dark:bg-primary-white dark:text-primary-black' />{' '}
              <picture>
                <source media='(min-width: 768px)' srcSet={project.image_desktop} />
                <source media='(max-width: 768px)' srcSet={project.image_mobile} />
                <img
                  className='w-full h-full object-contain object-center block'
                  src={project.image_mobile}
                  alt={`${project.title} project cover image`}
                />
              </picture>
            </motion.div>
          </Link>

          <motion.h3
            className='text-primary-orange pt-4 text-lg'
            // variants={projectsItemAnimation}
          >
            {project.tagline}
          </motion.h3>
          <div className='flex gap-1.5'>
            {project.techStack.map((tech: string) => {
              return (
                <p
                  className='text-xs rounded-full bg-primary-orange px-3 py-1 font-bold'
                  key={tech}
                >
                  {tech}
                </p>
              )
            })}
          </div>
          <motion.p
            className='text-xs'
            // variants={projectsItemAnimation}
          >
            {project.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
