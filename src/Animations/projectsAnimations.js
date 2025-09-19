export const projectsLayoutAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 1 },
  },
};

export const projectsItemAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
