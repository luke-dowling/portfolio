import { motion } from "framer-motion";

export const PageTransitionAnimation = ({ animation, children }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="screen"
    >
      {children}
    </motion.div>
  );
};
