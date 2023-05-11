import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import { Nav } from "../Nav";
import { Project } from "./Project";
import { projectsData } from "./projectsData";

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
