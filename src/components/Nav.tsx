import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { RiMenu2Line } from 'react-icons/ri'
import { IoMdExit } from 'react-icons/io'
import { Link } from 'react-router-dom'

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
        className='fixed w-[55vw] max-w-70 h-screen top-0 -right-3 bottom-0 z-10 flex flex-col justify-start items-center py-[10vh] list-none'
        style={{ backgroundColor: 'var(--bg-offset)', color: 'var(--text-offset)' }}
        variants={mobileNavContainerAnimation}
      >
        <motion.li className='py-4 px-3' variants={navItemAnimation}>
          <Link onClick={handleClick} to='/'>
            home
          </Link>
        </motion.li>
        <motion.li className='py-4 px-3' variants={navItemAnimation}>
          <Link onClick={handleClick} to='/profile'>
            profile
          </Link>
        </motion.li>
        <motion.li className='py-4 px-3' variants={navItemAnimation}>
          <Link onClick={handleClick} to='/projects'>
            projects
          </Link>
        </motion.li>
        <motion.li className='py-4 px-3' onClick={handleClick} variants={navItemAnimation}>
          <Link to='/contact'>contact</Link>
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
      className='fixed z-50 top-0 left-3 right-3 w-[calc(100vw-24px)] mx-auto pt-5'
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* mobile Nav */}
      <div className='block lg:hidden flex justify-between items-center'>
        <Link to='/'>lukeDowling</Link>
        <motion.div
          className='flex text-[3.5rem] gap-3 cursor-pointer'
          style={{ color: isOpen ? 'var(--text-offset) ' : 'var(--text)' }}
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
        className='hidden lg:flex lg:w-full lg:justify-between'
        variants={mobileNavContainerAnimation}
      >
        <div className='flex gap-3 lg:gap-4'>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <Link
              to='/'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              home
            </Link>
          </motion.li>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <Link
              to='/profile'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              profile
            </Link>
          </motion.li>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <Link
              to='/projects'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              projects
            </Link>
          </motion.li>
          <motion.li className='list-none p-0.5' variants={navItemAnimation}>
            <Link
              to='/contact'
              className='block transition-transform duration-300 ease-in-out hover:scale-110'
            >
              contact
            </Link>
          </motion.li>
        </div>
        <div className='flex gap-3 lg:gap-4'>
          <motion.li variants={navItemAnimation} className='flex gap-3 lg:gap-4'>
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
