import { FaCodepen, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='page-container border-t-2 border-primary-orange/40 dark:text-primary-white text-primary-black mt-18'>
      <div className='px-3 py-5 flex flex-col gap-3 md:flex-row md:justify-between md:items-center md:py-6'>
        <h3>@{new Date().getFullYear()} luke-dowling</h3>
        <div className='flex gap-1.5 text-2xl md:gap-3'>
          <a
            href='https://github.com/luke-dowling'
            target='_blank'
            rel='noreferrer'
            className='hover:text-primary-orange'
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/luke-dowling-760840147/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-primary-orange'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://codepen.io/luke-dowling'
            target='_blank'
            rel='noreferrer'
            className='hover:text-primary-orange'
          >
            <FaCodepen />
          </a>
          <a
            href='https://www.instagram.com/lukedowling93/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-primary-orange'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
