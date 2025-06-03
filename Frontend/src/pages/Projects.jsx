import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="dev-banner animated-dev-banner">
        <span className="dev-emoji animated-emoji">🚧</span>
        <span className="dev-text">
          <span>Cette page est en cours de développement</span>
        </span>
        <span className="dev-emoji animated-emoji">🚧</span>
      </div>
      <div className="dev-progress-bar">
        <div className="dev-progress"></div>
      </div>
    </div>
  );
}

export default Projects;