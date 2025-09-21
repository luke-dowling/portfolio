import { PageTransitionAnimation } from "../../Animations/PageTransitionAnimation";
import { Nav } from "@components/Nav/Nav";
import { Project } from "@components/Project/Project";
import { projectsData } from "@components/Project/projectsData";

import { projectsPageAnimation } from "../../Animations/pageAnimation";

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
