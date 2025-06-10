import { useState } from "react";
import "../styles/Projects.css";

// Ajoute une propriété image à chaque techno (mets tes images dans /public/images/techs/)
const techs = [
  { name: "React", type: "framework", image: "/images/techs/react.png" },
  { name: "Node.js", type: "runtime", image: "/images/techs/nodejs.png" },
  { name: "Express", type: "framework", image: "/images/techs/express.png" },
  { name: "MongoDB", type: "database", image: "/images/techs/mongodb.png" },
  { name: "TypeScript", type: "language", image: "/images/techs/typescript.png" },
  { name: "Docker", type: "architecture", image: "/images/techs/docker.png" },
  { name: "Azure", type: "cloud", image: "/images/techs/azure.png" },
  { name: "Python", type: "language", image: "/images/techs/python.png" },
  { name: "FastAPI", type: "framework", image: "/images/techs/fastapi.png" },
  { name: "PostgreSQL", type: "database", image: "/images/techs/postgresql.png" },
  // ...ajoute ce que je veux
];

const projects = [
  {
    title: "Portfolio",
    description: "Mon site personnel en React.",
    techs: ["React", "TypeScript"],
    link: "#"
  },
  {
    title: "API Node",
    description: "API REST Node.js/Express/MongoDB.",
    techs: ["Node.js", "Express", "MongoDB"],
    link: "#"
  },
  {
    title: "Dashboard DevOps",
    description: "Dashboard déployé sur Azure avec Docker.",
    techs: ["Docker", "Azure", "React"],
    link: "#"
  },
  // ...ajoute des projets
];

const Projects = () => {
  const [selected, setSelected] = useState([]);

  const toggleTech = (name) => {
    setSelected(selected.includes(name)
      ? selected.filter(t => t !== name)
      : [...selected, name]);
  };

  const filteredProjects = selected.length === 0
    ? projects
    : projects.filter(p =>
        selected.every(sel => p.techs.includes(sel))
      );

  return (
    <div className="projects-page">
      <h2 className="projects-title">Mes Projets</h2>
      <div className="tech-filters-fixed">
        <div className="tech-grid">
          {techs.map(tech => (
            <button
              key={tech.name}
              className={`tech-btn${selected.includes(tech.name) ? " selected" : ""}`}
              onClick={() => toggleTech(tech.name)}
            >
              <img src={tech.image} alt={tech.name} className="tech-icon" />
              <span>{tech.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="projects-list">
        {filteredProjects.length === 0 && (
          <div className="no-project">Aucun projet ne correspond à ce filtre.</div>
        )}
        {filteredProjects.map(proj => (
          <div className="project-card" key={proj.title}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-techs">
              {proj.techs.map(t => (
                <span className="project-tech" key={t}>{t}</span>
              ))}
            </div>
            {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">Voir</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;