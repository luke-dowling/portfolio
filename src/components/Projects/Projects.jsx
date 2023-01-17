import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import { Nav } from "../Nav";
import { Project } from "./Project";
import { projectsData } from "./projectsData";

import { projectsPageAnimation } from "../Animations/pageAnimation";
import { motion } from "framer-motion";
import {
  projectsItemAnimation,
  projectsLayoutAnimation,
} from "../Animations/projectsAnimations";

export const Projects = () => {
  return (
    <PageTransitionAnimation animation={projectsPageAnimation}>
      <Nav theme="dark" />
      <motion.div
        className="projects-grid container"
        variants={projectsLayoutAnimation}
      >
        {projectsData.map((project) => {
          return (
            <Project
              key={project.name}
              project={project}
              id={project.name}
              variants={projectsItemAnimation}
            />
          );
        })}
      </motion.div>
    </PageTransitionAnimation>
  );
};
