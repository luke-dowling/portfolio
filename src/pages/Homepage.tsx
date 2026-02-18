import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useRef } from 'react'

import { nameAnimation, jobTitleAnimation } from '@/Animations/homeAnimations.js'
import { LogosAnimation } from '@/components/LogosAnimation'

export const Homepage = () => {
  const h1Ref = useRef(null)
  const isH1InView = useInView(h1Ref)

  return (
    <div className='snap-y snap-mandatory pt-10 page-container'>
      <section className='h-screen relative snap-start sm:h-auto sm:snap-none'>
        <motion.h1
          ref={h1Ref}
          className='pt-[18vh] leading-tight whitespace-pre-line wrap-break-word w-[10ch] sm:pt-10 sm:w-auto'
          {...nameAnimation}
        >
          Luke Dowling<span>.</span>
        </motion.h1>
        <motion.div className='mt-10 w-1/2 ml-auto sm:my-8 sm:w-3/5' {...jobTitleAnimation}>
          <hr className='border border-primary-orange sm:w-55' />
          <p className='pt-2 leading-relaxed whitespace-pre-line wrap-break-word w-[10ch] sm:p-0 sm:w-auto'>
            <span>Website</span> <span>Developer</span>
          </p>
        </motion.div>
        <motion.div
          className='hidden sm:block sm:relative'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <LogosAnimation />
        </motion.div>
        <motion.div
          className='flex gap-1 absolute bottom-24 left-1/2 -translate-x-1/2 -rotate-90 animate-fade-pulse sm:hidden'
          initial={{ opacity: 0 }}
          animate={{
            opacity: isH1InView ? 1 : 0,
          }}
          transition={{
            duration: isH1InView ? 1 : 0.2,
            delay: isH1InView ? 1 : 0,
          }}
        >
          <FiArrowLeft style={{ fontSize: '1.8rem', verticalAlign: 'middle' }} />
          <p>more about me</p>
        </motion.div>
      </section>
      <section className='snap-end sm:snap-none'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Hey there<span>.</span>
        </motion.h2>
        <motion.div
          className='my-12 tracking-wide sm:my-8'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className='font-bold'>
            I'm Luke, a <span className='border border-primary-orange px-1'>Website Developer</span>
          </p>
          <p>
            I'm a full stack web developer based in Hamburg, passionate about building modern,
            responsive websites and web applications.
          </p>
        </motion.div>
        <motion.div
          className='flex justify-around mt-12 pb-12 sm:justify-between sm:px-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Link to='/contact'>
            <button className='btn flex items-center gap-2'>
              <FiArrowLeft style={{ verticalAlign: 'middle' }} /> contact
            </button>
          </Link>
          <Link to='/profile'>
            <button className='btn flex items-center gap-2'>
              profile <FiArrowRight style={{ verticalAlign: 'middle' }} />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
