import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";

import type { Project as ProjectType } from "@/types";
import { projectsData } from "@/lib/data";

const xOffset = 100;
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
    display: "block",
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
    display: "none",
  }),
};

interface ProjectProps {
  currentProjectId: number;
  setProject: (newId: number, newDirection?: number) => void;
  direction: number;
  project: ProjectType;
}

export const Project = ({
  currentProjectId,
  setProject,
  direction,
  project,
}: ProjectProps) => {
  const hasPaginated = useRef(false);

  function checkIdIsValid(newId: number) {
    if (newId === -1) return projectsData.length - 1;
    if (newId === projectsData.length) return 0;
    return newId;
  }

  function detectPaginationGesture(
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset }: { offset: { x: number } }
  ) {
    if (hasPaginated.current) return;
    let newId = currentProjectId;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      newId = currentProjectId + 1;
    } else if (offset.x > threshold) {
      newId = currentProjectId - 1;
    }

    if (newId !== currentProjectId) {
      hasPaginated.current = true;
      // check new id is within bounds
      newId = checkIdIsValid(newId);
      setProject(newId, offset.x < 0 ? 1 : -1);
    }
  }

  return (
    <motion.div className="projects-sliding-container">
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentProjectId}
          className="project"
          data-page={currentProjectId}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={detectPaginationGesture}
          onDragStart={() => (hasPaginated.current = false)}
          onDragEnd={() => (hasPaginated.current = true)}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          custom={direction}
        >
          <motion.h2
            className="projects-title orange-line"
            // variants={projectsItemAnimation}
          >
            {project.title}
          </motion.h2>

          <Link to={project.url}>
            <motion.div
              // variants={projectsItemAnimation}
              className="projects-image-container"
            >
              <FaExternalLinkAlt className="icon" />{" "}
              <img
                srcSet={project.image_mobile}
                alt={`${project.title} project cover image`}
              />
            </motion.div>
          </Link>

          <motion.h3
          // variants={projectsItemAnimation}
          >
            {project.tagline}
          </motion.h3>
          <div className="projects-tech-stack">
            {project.techStack.map((tech: string) => {
              return <p key={tech}>{tech}</p>;
            })}
          </div>
          <motion.p
            // variants={projectsItemAnimation}
            className="project-description"
          >
            {project.description}
          </motion.p>

          {/*  <motion.div variants={projectsItemAnimation} className="button-group">
          <Link to={"/contact"}>
            <button>Contact</button>
          </Link>

          <Link to={project.url}>
            <button>View Project</button>
          </Link>
        </motion.div> */}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
