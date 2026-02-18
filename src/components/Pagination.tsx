import { projectsData } from '@/libs/data'
import { AnimatePresence, motion } from 'framer-motion'

interface PaginationProps {
  currentProjectId: number
  setProject: (newId: number, newDirection?: number) => void
}

export const Pagination = ({ currentProjectId, setProject }: PaginationProps) => {
  return (
    <AnimatePresence>
      <div className='flex justify-around gap-1.5 py-4 tablet:justify-center tablet:gap-12 desktop:pt-20'>
        {projectsData.map(project => (
          <Dot
            key={project.id}
            onClick={() => setProject(project.id)}
            isSelected={project.id === currentProjectId}
          />
        ))}
      </div>
    </AnimatePresence>
  )
}

interface DotProps {
  isSelected: boolean
  onClick: () => void
}

function Dot({ isSelected, onClick }: DotProps) {
  return (
    <div onClick={onClick}>
      <div className='w-5 h-5 rounded-full bg-primary-orange relative cursor-pointer'>
        {isSelected && (
          <motion.div
            className='absolute w-10 h-10 top-[-10px] left-[-10px] border border-primary-orange rounded-full p-4'
            layoutId='highlight'
          />
        )}
      </div>
    </div>
  )
}
