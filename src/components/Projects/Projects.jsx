import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import { Nav } from "../Nav/Nav";
import { Project } from "./Project";
import { projectsData } from "./projectsData";

import { projectsPageAnimation } from "../Animations/pageAnimation";

export const Projects = () => {
  return (
    <PageTransitionAnimation animation={projectsPageAnimation}>
      <Nav theme="dark" />
      <h1>Projects</h1>
      {projectsData.map((project) => {
        return <Project project={project} id={project.name} />;
      })}
    </PageTransitionAnimation>
  );
};
