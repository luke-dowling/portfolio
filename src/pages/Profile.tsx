import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import headshot from '@/assets/images/headshot.jpg'
import { layoutAnimation, itemAnimation } from '@/Animations/layoutAnimation'

export const Profile = () => {
  return (
    <div className='min-h-screen'>
      <motion.div variants={layoutAnimation}>
        <motion.h1 className='desktop:mb-4' variants={itemAnimation}>
          Profile<span>.</span>
        </motion.h1>

        <div className='desktop:flex desktop:flex-row-reverse desktop:items-start'>
          <motion.div
            variants={itemAnimation}
            className='flex flex-col items-center gap-1.5 my-12 desktop:min-w-[350px] desktop:my-4 desktop:flex-col desktop:justify-start'
          >
            <div className='block w-[150px] h-[150px] rounded-full border-2 border-primary-orange overflow-hidden desktop:w-[200px] desktop:h-[275px] desktop:rounded'>
              <img
                className='mt-[-15px] desktop:mt-0'
                src={headshot}
                alt={`Luke Dowling's headshot`}
              />
            </div>
            <h2 className='text-primary-orange text-2xl'>Luke 👨‍💻🕺</h2>
            <p className='font-extralight text-xs desktop:text-[12px]'>
              web_dev / creative_coder / tap_dancer
            </p>
          </motion.div>

          <div>
            <motion.p className='desktop:text-justify' variants={itemAnimation}>
              I’m a fullstack web developer passionate about building creative, user-focused
              applications that make a real impact.
            </motion.p>
            <motion.p variants={itemAnimation}>
              I love exploring new technologies, experimenting with ideas, and writing clean,
              maintainable code.
            </motion.p>
            <motion.p variants={itemAnimation}>
              Before stepping into the world of software engineering, I was a performer— so I might
              just be the only developer you’ll meet who can tap dance 😉
            </motion.p>
            <motion.p className='my-12' variants={itemAnimation}>
              Peace & code ✌️
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={itemAnimation}
          className='flex justify-around mt-12 pb-12 tablet:justify-between tablet:px-4'
        >
          <Link to='/'>
            <button className='btn flex items-center gap-2'>
              {' '}
              <FiArrowLeft style={{ verticalAlign: 'middle' }} /> home
            </button>
          </Link>
          <Link to='/projects'>
            <button className='btn flex items-center gap-2'>
              projects <FiArrowRight style={{ verticalAlign: 'middle' }} />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
