const transitionAnimate = {
  duration: 0.8,
  delay: 0.1,
};

const transitionExit = {
  duration: 0.3,
  delay: 0.2,
};

export const homePageAnimation = {
  initial: { x: "200%", width: "50vw" },
  animate: {
    x: 0,
    width: "50vw",
    transition: transitionAnimate,
  },
  exit: { x: 0, width: 0, transition: transitionExit },
};

export const aboutPageAnimation = {
  initial: { scaleX: 0, transformOrigin: "left" },
  animate: {
    scaleX: 1,
    transition: transitionAnimate,
  },
  exit: { scaleX: 0, transformOrigin: "right", transition: transitionExit },
};

export const projectsPageAnimation = {
  initial: { opacity: 1, width: 0 },
  animate: { opacity: 1, width: 0, transition: transitionAnimate },
  exit: { opacity: 0, width: 0, transition: transitionExit },
};

export const contactPageAnimation = {
  initial: { scaleX: 0, transformOrigin: "right" },
  animate: {
    scaleX: 1,
    width: "50vw",
    x: "100%",
    transition: transitionAnimate,
  },
  exit: { scaleX: 0, transition: transitionExit },
};
