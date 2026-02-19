import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import emailjs from 'emailjs-com'

import { nameAnimation, jobTitleAnimation } from '@/Animations/homeAnimations.js'
import { LogosAnimation } from '@/components/LogosAnimation'
import { Footer } from '@/components/ui/Footer'
import { Project } from '@/components/Project'
import { Pagination } from '@/components/Pagination'
import { projectsData } from '@/libs/data'
import { useContactForm, type ContactFormData } from '@/hooks/useFormValidation'
import headshot from '@/assets/images/headshot.jpg'

// ─── Contact Modal ────────────────────────────────────────────────────────────

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({ setIsOpen }: ModalProps) {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className='bg-primary-white dark:bg-primary-black text-primary-black dark:text-primary-white p-8 rounded-lg shadow-lg max-w-md'>
        <h1>Thanks for the mail!</h1>
        <p>I'll get back to you as soon as possible.</p>
        <button onClick={() => setIsOpen(false)} className='btn mt-4'>
          Close
        </button>
      </div>
    </motion.div>
  )
}

// ─── Single Page ──────────────────────────────────────────────────────────────

export const SinglePage = () => {
  // ── Projects state ──────────────────────────────────────────────────────────
  const [[currentProjectId, direction], setCurrentProjectId] = useState([0, 0])
  const [selectedProject, setSelectedProject] = useState(projectsData[currentProjectId])

  function setProject(newProjectId: number, newDirection?: number) {
    if (!newDirection) newDirection = newProjectId - currentProjectId
    setCurrentProjectId([newProjectId, newDirection])
    setSelectedProject(projectsData[newProjectId])
  }

  // ── Contact form state ──────────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useContactForm()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string>('')
  const formRef = useRef<HTMLFormElement>(null)
  const formValues = watch()

  const onSubmit = handleSubmit(async (data: ContactFormData) => {
    try {
      setSubmitError('')
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID!,
        import.meta.env.VITE_TEMPLATE_ID!,
        formRef.current!,
        import.meta.env.VITE_USER_ID!,
      )
      setIsOpen(true)
      reset()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitError('Failed to send message. Please try again.')
    }
  })

  const getFieldStatus = (fieldName: keyof ContactFormData) => {
    const hasError = !!errors[fieldName]
    const hasValue = formValues[fieldName]?.length > 0
    const isValid = hasValue && !hasError
    return { hasError, hasValue, isValid, className: hasError ? 'error' : isValid ? 'valid' : '' }
  }

  // ── Scroll hint visibility ───────────────────────────────────────────────────
  const h1Ref = useRef(null)
  const isH1InView = useInView(h1Ref)

  return (
    <div className='page-container'>
      {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section id='home' className='section-block relative'>
        <motion.h1
          ref={h1Ref}
          className='leading-tight whitespace-pre-line wrap-break-word w-[10ch] sm:w-auto'
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
          className='sm:relative'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <LogosAnimation />
        </motion.div>

        {/* Mobile scroll hint */}
        <motion.div
          className='flex gap-1 absolute bottom-8 left-1/2 -translate-x-1/2 -rotate-90 animate-fade-pulse sm:hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: isH1InView ? 1 : 0 }}
          transition={{
            duration: isH1InView ? 1 : 0.2,
            delay: isH1InView ? 1 : 0,
          }}
        >
          <FiArrowLeft style={{ fontSize: '1.8rem', verticalAlign: 'middle' }} />
          <p>scroll down</p>
        </motion.div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section className='section-block'>
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
      </section>

      {/* ── Profile ───────────────────────────────────────────────────────── */}
      <section id='profile' className='section-block scroll-mt-16'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className='desktop:mb-4'
        >
          Profile<span>.</span>
        </motion.h1>

        <div className='desktop:flex desktop:flex-row-reverse desktop:items-start'>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className='flex flex-col items-center gap-1.5 my-12 desktop:min-w-[350px] desktop:my-4 desktop:flex-col desktop:justify-start'
          >
            <div className='block w-[150px] h-[150px] rounded-full border-2 border-primary-orange overflow-hidden desktop:w-[200px] desktop:h-[275px] desktop:rounded'>
              <img
                className='mt-[-15px] desktop:mt-0'
                src={headshot}
                alt="Luke Dowling's headshot"
              />
            </div>
            <h2 className='text-primary-orange text-2xl'>Luke 👨‍💻🕺</h2>
            <p className='font-extralight text-xs desktop:text-[12px]'>
              web_dev / creative_coder / tap_dancer
            </p>
          </motion.div>

          <div>
            <motion.p
              className='desktop:text-justify'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              I'm a fullstack web developer passionate about building creative, user-focused
              applications that make a real impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              I love exploring new technologies, experimenting with ideas, and writing clean,
              maintainable code.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Before stepping into the world of software engineering, I was a performer— so I might
              just be the only developer you'll meet who can tap dance 😉
            </motion.p>
            <motion.p
              className='my-12'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Peace & code ✌️
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <section id='projects' className='section-block scroll-mt-16'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Projects<span>.</span>
        </motion.h1>

        <div className='projects-container'>
          <Project
            currentProjectId={currentProjectId}
            direction={direction}
            setProject={setProject}
            project={selectedProject}
          />
          <Pagination currentProjectId={currentProjectId} setProject={setProject} />
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section id='contact' className='section-block scroll-mt-16'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className='desktop:mb-4'
        >
          Hello<span>.</span>
        </motion.h1>

        <div className='desktop:flex desktop:items-start desktop:gap-[75px]'>
          <div>
            <motion.p
              className='desktop:pt-4 desktop:text-justify'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              I would love to hear your thoughts on my site or let me know if you are interested in
              collaborating.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Either way, thanks for looking through and till next time 👋
            </motion.p>
          </div>

          <motion.form
            onSubmit={onSubmit}
            ref={formRef}
            className='pt-12 desktop:min-w-[325px] desktop:pt-0'
            noValidate
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Name */}
            <div className='relative'>
              <motion.input
                type='text'
                placeholder='Name'
                {...register('name')}
                className='block w-full border-b border-primary-black dark:border-primary-white mb-8 leading-8 focus:border-none desktop:text-xl desktop:my-4'
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span
                  id='name-error'
                  className='absolute bottom-[-1.7em] text-xs pl-1.5 text-error-red'
                  role='alert'
                >
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className='relative'>
              <motion.input
                type='email'
                placeholder='Email'
                {...register('email')}
                className='block w-full border-b border-primary-black dark:border-primary-white mb-8 leading-8 focus:border-none desktop:text-xl desktop:my-4'
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span
                  id='email-error'
                  className='absolute bottom-[-1.7em] text-xs pl-1.5 text-error-red'
                  role='alert'
                >
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className='relative'>
              <motion.textarea
                placeholder='Message'
                {...register('message')}
                className='block w-full border-b border-primary-black dark:border-primary-white mb-8 leading-8 focus:border-none desktop:text-xl desktop:my-4'
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                rows={2}
              />
              {errors.message && (
                <span
                  id='message-error'
                  className='absolute bottom-[-1.7em] text-xs pl-1.5 text-error-red'
                  role='alert'
                >
                  {errors.message.message}
                </span>
              )}
            </div>

            {submitError && (
              <div className='border border-error-red' role='alert'>
                <span className='text-error-red'>{submitError}</span>
              </div>
            )}

            <div className='flex justify-center mb-8 desktop:justify-start'>
              <motion.button
                type='submit'
                disabled={isSubmitting}
                className='btn flex items-center gap-2'
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Submit <FaArrowRight style={{ verticalAlign: 'middle' }} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
        <Footer />
      </section>
    </div>
  )
}
