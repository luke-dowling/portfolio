const transitionAnimate = {
  duration: 0.8,
  delay: 0.1,
  staggerChildren: 0.2,
  delayChildren: 1,
};

const transitionExit = {
  duration: 0.3,
  delay: 0.2,
};

export const navContainerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1 },
  },
  exit: { opacity: 0 },
};

export const mobileNavContainerAnimation = {
  initial: { scaleX: 0, transformOrigin: "right" },
  animate: {
    scaleX: 1,
    transition: transitionAnimate,
  },
  exit: { scaleX: 0, transformOrigin: "right", transition: transitionExit },
};

export const navItemAnimation = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.1 } },
};
