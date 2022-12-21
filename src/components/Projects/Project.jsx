export const Project = ({ project }) => {
  return (
    <div className="project">
      <h2>{project.name}</h2>
      <ul>
        {project.technologies.map((technology) => {
          return <li key={technology}>{technology}</li>;
        })}
      </ul>
      <button className="project__btn">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="project__link"
        >
          View Project
        </a>
      </button>
    </div>
  );
};
