import "./_projects.scss";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { PageTransitionAnimation } from "@/Animations/PageTransitionAnimation";
import { Nav } from "@components/Nav/Nav";
import { Project } from "@components/Project/Project";
import { projectsData } from "@/lib/data";
import { Footer } from "@/components/Footer/Footer";
import { Pagination } from "@components/Project/Pagination";
import { itemAnimation } from "@/Animations/layoutAnimation";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Link } from "react-router-dom";

export const Projects = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollToTop(pageRef);

  const [[currentProjectId, direction], setCurrentProjectId] = useState([0, 0]);
  const [selectedProject, setSelectedProject] = useState(
    projectsData[currentProjectId]
  );

  function setProject(newProjectId: number, newDirection?: number) {
    if (!newDirection) newDirection = newProjectId - currentProjectId;
    setCurrentProjectId([newProjectId, newDirection]);
    setSelectedProject(projectsData[newProjectId]);
  }

  return (
    <PageTransitionAnimation ref={pageRef} classList="container projects">
      <Nav theme="light" />
      <motion.h1 variants={itemAnimation}>
        Projects<span>.</span>
      </motion.h1>

      <Project
        currentProjectId={currentProjectId}
        direction={direction}
        setProject={setProject}
        project={selectedProject}
      />
      <Pagination currentProjectId={currentProjectId} setProject={setProject} />
      <motion.div
        variants={itemAnimation}
        className="button-group last-item-on-page"
      >
        <Link to={"/profile"}>
          <button>profile</button>
        </Link>

        <Link to={"/contact"}>
          <button>contact</button>
        </Link>
      </motion.div>
      <Footer />
    </PageTransitionAnimation>
  );
};
