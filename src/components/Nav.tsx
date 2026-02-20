import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { RiMenu2Line } from 'react-icons/ri'
import { IoMdExit } from 'react-icons/io'

import { mobileNavContainerAnimation, navItemAnimation } from '@/Animations/navAnimation'
import { useTheme } from '@/hooks/useThemeContext.ts'
import { ThemeSwitch } from '@/components/ThemeSwitch'

interface ModalProps {
  handleClick: () => void
}

const Modal = ({ handleClick }: ModalProps) => {
  return (
    <>
      <motion.ul
        className='fixed w-[45vw] max-w-70 h-screen top-0 -right-3 bottom-0 z-10 flex flex-col justify-start items-end py-[10vh] pr-4 list-none bg-primary-black text-primary-white dark:bg-primary-white dark:text-primary-black'
        variants={mobileNavContainerAnimation}
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
        className='fixed w-full h-full top-0 left-0 z-[5] bg-transparent'
        onClick={handleClick}
      ></div>
    </>
  )
}

export const Nav = () => {
  const { theme } = useTheme()
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

        {isOpen ? <Modal handleClick={handleClick} /> : null}
      </div>

      {/* Desktop Nav */}
      <motion.ul
        className='hidden sm:flex sm:w-full sm:justify-between'
        variants={mobileNavContainerAnimation}
      >
        <div className='flex gap-3 sm:gap-4'>
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
