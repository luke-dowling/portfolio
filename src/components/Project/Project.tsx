import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  projectsItemAnimation,
  projectsLayoutAnimation,
} from "../../Animations/projectsAnimations";
import type { Project as ProjectType } from "@/types";
import { Link } from "react-router-dom";

interface ProjectProps {
  project: ProjectType;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <motion.div variants={projectsLayoutAnimation}>
      <motion.h2 className="projects-title" variants={projectsItemAnimation}>
        {project.title}
      </motion.h2>

      <motion.div
        variants={projectsItemAnimation}
        className="projects-image-container"
      >
        {" "}
        <img
          srcSet={project.image_mobile}
          alt={`${project.title} project cover image`}
        />
      </motion.div>
      <motion.p variants={projectsItemAnimation}>{project.tagline}</motion.p>
      <motion.p
        variants={projectsItemAnimation}
        className="project-description"
      >
        {project.description}
      </motion.p>

      <motion.div variants={projectsItemAnimation} className="button-group">
        <Link to={"/contact"}>
          <button>Contact</button>
        </Link>

        <Link to={project.url}>
          <button>View Project</button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

{
  /* <AnimatePresence>
    <motion.img
      key={image.src}
      src={image.src}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    />
  </AnimatePresence> */
}
