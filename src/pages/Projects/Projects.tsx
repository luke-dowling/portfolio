import "./_projects.scss";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { PageTransitionAnimation } from "@/Animations/PageTransitionAnimation";
import { Nav } from "@components/Nav/Nav";
import { Project } from "@components/Project/Project";
import { projectsData } from "@/lib/data";

export const Projects = () => {
  const [index, setIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState(projectsData[index]);

  function setSlide(newDirection: "left" | "right") {
    let newIndex: number;
    if (index === 0 && newDirection === "left") {
      newIndex = projectsData.length - 1;
      setIndex(newIndex);
      return setSelectedProject(projectsData[projectsData.length - 1]);
    }
    if (index === projectsData.length - 1 && newDirection === "right") {
      newIndex = 0;
      setIndex(newIndex);
      return setSelectedProject(projectsData[0]);
    }

    const indexModifier = newDirection === "right" ? 1 : -1;
    newIndex = index + indexModifier;
    setIndex(newIndex);
    setSelectedProject(projectsData[newIndex]);
  }

  return (
    <PageTransitionAnimation>
      <div className="container projects">
        <Nav theme="light" />
        <h1>
          Project<span>.</span>
        </h1>

        <AnimatePresence custom={index} initial={false} mode="popLayout">
          <Project key={selectedProject.id} project={selectedProject} />
        </AnimatePresence>

        <motion.button
          initial={false}
          // animate={{ backgroundColor: color }}
          aria-label="Previous"
          // style={button}
          onClick={() => setSlide("left")}
          // whileFocus={{ outline: `2px solid ${color}` }}
          whileTap={{ scale: 0.9 }}
          style={{ backgroundColor: "black" }}
        >
          Left
        </motion.button>
        <motion.button
          initial={false}
          // animate={{ backgroundColor: color }}
          aria-label="Previous"
          // style={button}
          onClick={() => setSlide("right")}
          // whileFocus={{ outline: `2px solid ${color}` }}
          whileTap={{ scale: 0.9 }}
          style={{ backgroundColor: "black" }}
        >
          Right
        </motion.button>
      </div>
    </PageTransitionAnimation>
  );
};
