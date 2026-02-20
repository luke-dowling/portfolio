export const layoutAnimation = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  exit: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export const itemAnimation = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.4,
      ease: 'easeIn' as const,
    },
  },
}
