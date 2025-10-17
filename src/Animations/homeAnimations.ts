export const nameAnimation = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: false, amount: 0.5 },
}

export const jobTitleAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, delay: 0.3 },
  viewport: { once: false, amount: 0.5 },
}
