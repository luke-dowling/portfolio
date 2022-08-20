export const navContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1 },
  },
  exit: { opacity: 0 },
};

export const navItemAnimation = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.1 } },
};
