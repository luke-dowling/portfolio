import "./_projects.scss";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { PageTransitionAnimation } from "@/Animations/PageTransitionAnimation";
import { Nav } from "@components/Nav/Nav";
import { Project } from "@components/Project/Project";
import { projectsData } from "@/lib/data";
import { Footer } from "@/components/Footer/Footer";
import { Pagination } from "@components/Project/Pagination";
import { projectsItemAnimation } from "@/Animations/projectsAnimations";
import { useScrollToTop } from "@/hooks/useScrollToTop";

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
      <Nav theme="dark" />
      <motion.h1 variants={projectsItemAnimation}>
        Projects<span>.</span>
      </motion.h1>

      <Project
        currentProjectId={currentProjectId}
        direction={direction}
        setProject={setProject}
        project={selectedProject}
      />
      <Pagination currentProjectId={currentProjectId} setProject={setProject} />
      <Footer />
    </PageTransitionAnimation>
  );
};
