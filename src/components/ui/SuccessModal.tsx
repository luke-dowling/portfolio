'use client'

import { motion } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'

import { Heading, Text } from '@/components/ui/Typography'

interface SuccessModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SuccessModal = ({ setIsOpen }: SuccessModalProps) => {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className='bg-primary-white dark:bg-primary-black text-primary-black dark:text-primary-white p-8 rounded-lg shadow-lg max-w-md'>
        <Heading>
          Thanks for the mail<span>!</span>
        </Heading>
        <Text>I'll get back to you as soon as possible 🚀 </Text>
        <button
          onClick={() => setIsOpen(false)}
          className='btn-ghost flex w-full items-center justify-center'
        >
          Close
        </button>
      </div>
    </motion.div>
  )
}
