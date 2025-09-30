import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { type Theme } from "@/types";
import { useTheme } from "@/hooks/useThemeContext";

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
}

export const PageTransitionAnimation = ({
  animation,
  ref,
  classList,
  children,
}: PageProps) => {
  const { theme } = useTheme();

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
