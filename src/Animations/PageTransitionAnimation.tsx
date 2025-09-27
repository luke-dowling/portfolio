import { motion } from "framer-motion";
import type { ReactNode, RefAttributes } from "react";

interface PageProps {
  animation?: {
    initial: {
      x: string;
      width: string;
    };
    animate: {
      x: number;
      width: string;
      transition: {
        duration: number;
        delay: number;
      };
    };
  };
  ref?: React.RefObject<HTMLDivElement | null>;
  classList?: string;
  children: ReactNode;
  theme: string;
}

export const PageTransitionAnimation = ({
  animation,
  ref,
  classList,
  children,
  theme,
}: PageProps) => {
  return (
    <div className={theme}>
      <motion.div
        // variants={animation}
        ref={ref}
        className={classList}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </div>
  );
};
