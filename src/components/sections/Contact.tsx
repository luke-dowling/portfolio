'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'

import { layoutAnimation, itemAnimation } from '@/Animations/layoutAnimation'
import { useContactForm, type ContactFormData } from '@/hooks/useFormValidation'
import { Footer } from '@/components/ui/Footer'
import { Heading, Text } from '@/components/ui/Typography'
import { FormField } from '@/components/ui/FormField'
import { SuccessModal } from '@/components/ui/SuccessModal'

const iconClassName = 'w-6 text-black dark:text-white pointer-events-none'

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
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_USER_ID!,
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
    <div id='contact' className='page-container'>
      {isOpen ? <SuccessModal setIsOpen={setIsOpen} /> : null}

      <motion.div variants={layoutAnimation}>
        <Heading className='md:mb-4' variants={itemAnimation}>
          Get In Touch<span>.</span>
        </Heading>

        <div>
          <Text className='md:pt-4 md:text-justify' variants={itemAnimation}>
            I would love to hear your thoughts on my site or let me know if you are interested in
            collaborating.
          </Text>

          <Text variants={itemAnimation}>
            Either way, thanks for looking through and till next time 👋
          </Text>
        </div>

        <motion.form
          variants={itemAnimation}
          onSubmit={onSubmit}
          ref={formRef}
          className='pt-8 md:min-w-81.25'
          noValidate
        >
          <FormField
            id='name'
            label='Name'
            icon={<FiUser className={iconClassName} />}
            registration={register('name')}
            error={errors.name}
          />

          <FormField
            id='email'
            type='email'
            label='Email'
            icon={<FiMail className={iconClassName} />}
            registration={register('email')}
            error={errors.email}
          />

          <FormField
            id='message'
            label='Message'
            icon={<FiMessageSquare className={iconClassName} />}
            registration={register('message')}
            error={errors.message}
            multiline
            rows={2}
          />

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
              className='btn-ghost flex w-full items-center justify-center gap-2'
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
      </motion.div>
      <Footer />
    </div>
  )
}
