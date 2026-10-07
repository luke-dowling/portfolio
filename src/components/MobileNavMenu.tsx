'use client'

import { motion } from 'framer-motion'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

import { mobileNavContainerAnimation, navItemAnimation } from '@/Animations/navAnimation'

interface MobileNavMenuProps {
  handleClick: () => void
}

export const MobileNavMenu = ({ handleClick }: MobileNavMenuProps) => {
  return (
    <>
      <motion.ul
        className='fixed w-[45vw] max-w-70 h-screen top-0 -right-3 bottom-0 z-10 flex flex-col justify-start items-end py-[10vh] pr-4 list-none bg-primary-black text-primary-white dark:bg-primary-white dark:text-primary-black'
        variants={mobileNavContainerAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.li className='py-4 px-3' variants={navItemAnimation}>
          <a onClick={handleClick} href='#profile'>
            profile
          </a>
        </motion.li>
        <motion.li className='py-4 px-3' variants={navItemAnimation}>
          <a onClick={handleClick} href='#projects'>
            projects
          </a>
        </motion.li>
        <motion.li className='py-4 px-3' onClick={handleClick} variants={navItemAnimation}>
          <a href='#contact'>contact</a>
        </motion.li>
        <motion.li className='py-4 px-3' variants={navItemAnimation}>
          <a href='https://github.com/luke-dowling' target='_blank' rel='noreferrer'>
            <FaGithubSquare />
          </a>
        </motion.li>
        <motion.li className='py-4 px-3' variants={navItemAnimation}>
          <a
            href='https://www.linkedin.com/in/luke-dowling-760840147/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
        </motion.li>
      </motion.ul>
      <div
        className='fixed w-full h-full top-0 left-0 z-5 bg-transparent'
        onClick={handleClick}
      ></div>
    </>
  )
}
