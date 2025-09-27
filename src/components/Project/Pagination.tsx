import { projectsData } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";

interface PaginationProps {
  currentProjectId: number;
  setProject: (newId: number, newDirection?: number) => void;
}

export const Pagination = ({
  currentProjectId,
  setProject,
}: PaginationProps) => {
  return (
    <AnimatePresence>
      <div className="dots">
        {projectsData.map((project) => (
          <Dot
            key={project.id}
            onClick={() => setProject(project.id)}
            isSelected={project.id === currentProjectId}
          />
        ))}
      </div>
    </AnimatePresence>
  );
};

interface DotProps {
  isSelected: boolean;
  onClick: () => void;
}

function Dot({ isSelected, onClick }: DotProps) {
  return (
    <div className="dot-container" onClick={onClick}>
      <div className="dot">
        {isSelected && (
          <motion.div className="dot-highlight" layoutId="highlight" />
        )}
      </div>
    </div>
  );
}
