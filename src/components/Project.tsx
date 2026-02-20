import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

import type { Project as ProjectType } from '@/libs/types'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ProjectProps {
  project: ProjectType
}

const X_IN = 120

export const Project = ({ project }: ProjectProps) => {
  const cardAnim = useScrollAnimation('-40% 0px -40% 0px', X_IN, true)

  return (
    <motion.div
      ref={cardAnim.ref}
      initial={{ opacity: 0, x: X_IN }}
      animate={cardAnim.controls}
      className='py-4 border-b border-primary-black/10 dark:border-primary-white/10 last:border-none'
    >
      <h2 className='mb-4 font-roboto text-2xl font-light'>{project.title}</h2>

      <a href={project.url} target='_blank' rel='noreferrer'>
        <div className='rounded-lg overflow-hidden h-[180px] relative bg-primary-white dark:bg-primary-black desktop:h-[250px] my-4'>
          <FaExternalLinkAlt className='absolute right-2.5 top-2.5 text-primary-white bg-primary-black text-xl dark:bg-primary-white dark:text-primary-black' />
          <picture>
            <source media='(min-width: 768px)' srcSet={project.image_desktop} />
            <source media='(max-width: 768px)' srcSet={project.image_mobile} />
            <img
              className='w-full h-full object-contain object-center block'
              src={project.image_mobile}
              alt={`${project.title} project cover image`}
            />
          </picture>
        </div>
      </a>

      <h3 className='text-primary-orange pt-2 text-lg'>{project.tagline}</h3>
      <div className='flex flex-wrap gap-1.5 my-2'>
        {project.techStack.map((tech: string) => (
          <p className='text-xs rounded-full bg-primary-orange px-3 py-1 font-bold' key={tech}>
            {tech}
          </p>
        ))}
      </div>
      <p className='text-xs'>{project.description}</p>
    </motion.div>
  )
}
