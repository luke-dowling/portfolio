export const Project = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>Text about the project</p>
      <h3>Technology included:</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    </div>
  );
};
