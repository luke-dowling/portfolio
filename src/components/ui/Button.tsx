import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export const Button = () => {
  return (
    <motion.div className='flex justify-around mt-12 pb-12 tablet:justify-between tablet:px-4'>
      <button className='btn flex items-center gap-2'>
        {' '}
        <FiArrowLeft style={{ verticalAlign: 'middle' }} /> projects
      </button>

      <button className='btn flex items-center gap-2'>
        home <FiArrowRight style={{ verticalAlign: 'middle' }} />
      </button>
    </motion.div>
  )
}
