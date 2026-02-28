import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

import type { Project as ProjectType } from '@/libs/types'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Text } from './ui/Typography'

interface ProjectProps {
  project: ProjectType
}

const X_IN = 120

export const Project = ({ project }: ProjectProps) => {
  const cardAnim = useScrollAnimation('-40% 0px -40% 0px', X_IN, undefined, undefined, true)

  return (
    <motion.article
      ref={cardAnim.ref}
      initial={{ opacity: 0, x: X_IN }}
      animate={cardAnim.controls}
      className='py-4 border-b border-primary-orange last:border-none lg:flex lg:gap-4 xl:gap-8'
    >
      <div className='lg:flex-1'>
        <h2 className='mb-4 font-roboto text-2xl font-light md:text-3xl lg:mb-8'>
          {project.title}
        </h2>
        <a href={project.url} target='_blank' rel='noreferrer' className=''>
          <div className='rounded-lg overflow-hidden h-[180px] relative bg-primary-white dark:bg-primary-black desktop:h-[250px] my-4 '>
            <FaExternalLinkAlt className='absolute right-2.5 top-2.5 text-primary-black bg-primary-white text-xl dark:bg-primary-black dark:text-primary-white' />
            <picture className='w-full h-full block'>
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
      </div>

      <div className='lg:flex-1 lg:text-right'>
        <h3 className='text-primary-orange pt-2 text-lg font-semibold sm:text-xl'>
          {project.tagline}
        </h3>
        <div className='flex flex-wrap gap-1.5 my-2 lg:justify-end'>
          {project.techStack.map((tech: string) => (
            <p className='text-xs rounded-full bg-primary-orange px-3 py-1 font-bold' key={tech}>
              {tech}
            </p>
          ))}
        </div>
        <Text className='text-sm sm:text-base'>{project.description}</Text>
      </div>
    </motion.article>
  )
}
