export const nameAnimation = {
  initial: { x: "-112vw", y: "50vh" },
  animate: {
    x: "0%",
    y: "50vh",
    transition: { duration: 0.8, delay: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const jobAnimation = {
  initial: { x: "-15%", y: "50vh", opacity: 0 },
  animate: {
    x: "0%",
    y: "50vh",
    opacity: 1,
    transition: { delay: 1, duration: 0.2 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
