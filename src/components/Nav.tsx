'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { RiMenu2Line } from 'react-icons/ri'
import { IoMdExit } from 'react-icons/io'

import { navContainerAnimation, navItemAnimation } from '@/Animations/navAnimation'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { MobileNavMenu } from '@/components/MobileNavMenu'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className='nav fixed z-50 top-0 left-0 right-0 mx-auto px-3 py-4
    bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white'
    >
      {/* mobile Nav */}
      <div className='flex sm:hidden justify-between items-center'>
        <a href='#home'>lukeDowling</a>
        <motion.div
          className={`flex text-[3.5rem] gap-3 cursor-pointer ${isOpen ? 'text-primary-white dark:text-primary-black' : 'text-primary-black dark:text-primary-white'}`}
        >
          <ThemeSwitch />
          {!isOpen ? (
            <RiMenu2Line onClick={handleClick} />
          ) : (
            <IoMdExit
              style={{ fontSize: '35px', zIndex: 30, position: 'relative' }}
              onClick={handleClick}
            />
          )}
        </motion.div>

        <AnimatePresence>
          {isOpen ? <MobileNavMenu handleClick={handleClick} /> : null}
        </AnimatePresence>
      </div>

      {/* Desktop Nav */}
      <motion.ul
        className='hidden sm:flex sm:w-full sm:justify-between'
        variants={navContainerAnimation}
        initial='initial'
        animate='animate'
      >
        <div className='flex gap-3 sm:gap-4'>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <a
              href='#home'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              cd ~
            </a>
          </motion.li>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <a
              href='#profile'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              profile
            </a>
          </motion.li>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <a
              href='#projects'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              projects
            </a>
          </motion.li>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <a
              href='#contact'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              contact
            </a>
          </motion.li>
        </div>
        <div className='flex gap-3 sm:gap-4'>
          <motion.li variants={navItemAnimation} className='flex gap-3 sm:gap-4'>
            <ThemeSwitch />
            <a
              href='https://github.com/luke-dowling'
              target='_blank'
              rel='noreferrer'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              <FaGithubSquare />
            </a>
            <a
              href='https://www.linkedin.com/in/luke-dowling-760840147/'
              target='_blank'
              rel='noreferrer'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              <FaLinkedin />
            </a>
          </motion.li>
        </div>
      </motion.ul>
    </nav>
  )
}
