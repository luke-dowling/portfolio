import { motion, useInView } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { useRef } from 'react'

import { nameAnimation, jobTitleAnimation, hrAnimation } from '@/Animations/homeAnimations.js'

export const Welcome = () => {
  const h1Ref = useRef(null)
  const isH1InView = useInView(h1Ref)

  return (
    <section
      id='home'
      className='page-container pt-10 h-screen relative sm:flex sm:flex-col sm:justify-center'
    >
      <motion.h1
        ref={h1Ref}
        className='pt-[18vh] leading-tight whitespace-pre-line wrap-break-word w-[10ch] sm:pt-10 sm:w-auto sm:text-center sm:text-7xl md:tracking-wide'
        {...nameAnimation}
      >
        Luke Dowling<span>.</span>
      </motion.h1>
      <div className='mt-8 w-1/2 ml-auto sm:my-8 sm:mx-auto sm:w-full'>
        <motion.hr className='border border-primary-orange' {...hrAnimation} />
        <motion.p
          className='leading-relaxed whitespace-pre-line wrap-break-word w-[10ch] sm:p-0 sm:w-auto sm:text-center sm:text-2xl'
          {...jobTitleAnimation}
        >
          Website Developer
        </motion.p>
      </div>

      <motion.div
        className='flex gap-1 absolute bottom-20 left-1/2 -translate-x-1/2 -rotate-90 animate-fade-pulse sm:hidden'
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
  )
}
