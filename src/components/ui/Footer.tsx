import { FaCodepen, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='relative w-full tablet:w-screen tablet:left-[calc(-50vw+50%)] border-t-2 border-primary-orange/40 dark:text-primary-white text-primary-black mt-18'>
      <div className='px-3 py-5 flex flex-col gap-3 tablet:max-w-[650px] tablet:mx-auto tablet:flex-row tablet:justify-between tablet:p-5 desktop:max-w-[850px]'>
        <h3>@2025 luke-dowling</h3>
        <div className='flex gap-1.5 text-2xl tablet:gap-3 desktop:gap-4'>
          <a href='https://github.com/luke-dowling' target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/luke-dowling-760840147/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
          <a href='https://codepen.io/luke-dowling' target='_blank' rel='noreferrer'>
            <FaCodepen />
          </a>
          <a href='https://www.instagram.com/lukedowling93/' target='_blank' rel='noreferrer'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
