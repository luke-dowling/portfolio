import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  projectsItemAnimation,
  projectsLayoutAnimation,
} from "../Animations/projectsAnimations";

export const Project = ({ project }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleClick = () => {
    window.open(project.url, "_blank");
  };
  return (
    <motion.div
      variants={projectsLayoutAnimation}
      className="flex-container-column-sb project"
    >
      <motion.h1 variants={projectsItemAnimation}>Project.</motion.h1>
      <div className="layout m-0">
        <motion.div
          variants={projectsItemAnimation}
          className="project-img-container"
        >
          <img src={project.image_desktop} alt="Desktop Product Image" />
          <img src={project.image_mobile} alt="Mobile Project Image" />
        </motion.div>
        <motion.h2 variants={projectsItemAnimation}>{project.title}</motion.h2>
        <motion.p
          variants={projectsItemAnimation}
          className="project-description"
        >
          {project.description}
        </motion.p>
      </div>

      <motion.div variants={projectsItemAnimation} className="layout m-0">
        <button className="project-btn-contact" onClick={handleContactClick}>
          Contact
        </button>
        <button className="project-btn-project" onClick={handleClick}>
          View Project
        </button>
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
