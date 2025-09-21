import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import { Nav } from "../components/Nav";
import { Project } from "../components/Projects/Project";
import { projectsData } from "../components/Projects/projectsData";

import { projectsPageAnimation } from "../Animations/pageAnimation";

export const Projects = () => {
  return (
    <PageTransitionAnimation animation={projectsPageAnimation}>
      <div className="container container-projects overflow">
        <div className="layout main-layout">
          <Nav theme="light" />
          <div className="page-container">
            {projectsData.map((project) => {
              return (
                <Project
                  key={project.name}
                  project={project}
                  id={project.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </PageTransitionAnimation>
  );
};
