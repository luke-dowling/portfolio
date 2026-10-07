'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

const fieldClassName =
  'block w-full rounded-md border border-black/40 dark:border-white/40 ring-2 ring-primary-orange/20 bg-transparent px-4 py-3 mb-8 transition-all focus:outline-none focus:border-primary-orange focus:ring-primary-orange/40 md:text-xl md:my-4'

interface FormFieldProps {
  id: string
  label: string
  icon: ReactNode
  registration: UseFormRegisterReturn
  error?: FieldError
  type?: 'text' | 'email'
  multiline?: boolean
  rows?: number
}

export const FormField = ({
  id,
  label,
  icon,
  registration,
  error,
  type = 'text',
  multiline = false,
  rows,
}: FormFieldProps) => {
  const errorId = `${id}-error`
  const sharedProps = {
    id,
    placeholder: '',
    ...registration,
    className: fieldClassName,
    'aria-invalid': error ? ('true' as const) : ('false' as const),
    'aria-describedby': error ? errorId : undefined,
  }

  return (
    <div className='relative'>
      <label htmlFor={id} className='block text-md font-medium my-4 pl-1 flex items-center gap-1.5'>
        {icon} {label}
      </label>

      {multiline ? (
        <motion.textarea {...sharedProps} rows={rows} />
      ) : (
        <motion.input {...sharedProps} type={type} />
      )}

      {error && (
        <span id={errorId} className='absolute bottom-[-1.7em] text-xs pl-1.5 text-error-red' role='alert'>
          {error.message}
        </span>
      )}
    </div>
  )
}
