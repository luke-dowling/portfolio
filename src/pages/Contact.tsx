import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { layoutAnimation, itemAnimation } from '@/Animations/layoutAnimation'
import { useContactForm, type ContactFormData } from '@/hooks/useFormValidation'
import { Footer } from '@/components/ui/Footer'
import { PageHeading } from '@/components/ui/Heading'

export const Contact = () => {
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

      // open modal
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

    return {
      hasError,
      hasValue,
      isValid,
      className: hasError ? 'error' : isValid ? 'valid' : '',
    }
  }

  return (
    <div className='page-container'>
      {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}

      <motion.div variants={layoutAnimation}>
        <PageHeading className='md:mb-4' variants={itemAnimation}>
          Get In Touch<span>.</span>
        </PageHeading>

        <div className='md:flex md:items-start md:gap-[75px]'>
          <div>
            <motion.p className='md:pt-4 md:text-justify' variants={itemAnimation}>
              I would love to hear your thoughts on my site or let me know if you are interested in
              collaborating.
            </motion.p>

            <motion.p variants={itemAnimation}>
              Either way, thanks for looking through and till next time 👋
            </motion.p>
          </div>

          <motion.form
            variants={itemAnimation}
            onSubmit={onSubmit}
            ref={formRef}
            className='pt-12 md:min-w-[325px] md:pt-0'
            noValidate
          >
            {/* Name */}
            <div className='relative'>
              <motion.input
                type='text'
                placeholder='Name'
                {...register('name')}
                className='block w-full rounded-md border border-black/20 dark:border-white/20 bg-transparent px-4 py-3 mb-8 transition-all focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/30 md:text-xl md:my-4'
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
                className='block w-full rounded-md border border-black/20 dark:border-white/20 bg-transparent px-4 py-3 mb-8 transition-all focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/30 md:text-xl md:my-4'
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
                className='block w-full rounded-md border border-black/20 dark:border-white/20 bg-transparent px-4 py-3 mb-8 transition-all focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/30 md:text-xl md:my-4'
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

            {/* Submit Error */}
            {submitError && (
              <div className='border border-error-red' role='alert'>
                <span className='text-error-red'>{submitError}</span>
              </div>
            )}

            <div className='flex justify-center mb-8 md:justify-start'>
              <motion.button
                type='submit'
                disabled={isSubmitting}
                className='btn-ghost flex items-center gap-2'
                aria-describedby='submit-status'
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
      </motion.div>
      <Footer />
    </div>
  )
}

// Modal
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
