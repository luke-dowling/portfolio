import { motion } from "framer-motion";
import type { ReactNode, RefAttributes } from "react";

interface PageProps {
  animation?: RefAttributes<HTMLDivElement>;
  children: ReactNode;
}

export const PageTransitionAnimation = ({ animation, children }: PageProps) => {
  return (
    <motion.div
      // variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
