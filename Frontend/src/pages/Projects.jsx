import { useState } from "react";
import "../styles/Projects.css";

// Regroupe les technos par catégorie et donne une couleur par catégorie
const techs = [
  // Frameworks & bibliothèques (bleu)
  { name: "ReactJS", type: "framework", image: "/images/techs/react.svg", category: "framework" },
  { name: "Vite", type: "framework", image: "/images/techs/vite.svg", category: "framework" },
  { name: "React Native", type: "framework", image: "/images/techs/react.svg", category: "framework" },
  { name: "EXPO", type: "framework", image: "/images/techs/expo.png", category: "framework" },
  { name: "NodeJS", type: "framework", image: "/images/techs/nodejs.svg", category: "framework" },
  { name: "Express", type: "framework", image: "/images/techs/express.svg", category: "framework" },
  { name: "Symfony", type: "framework", image: "/images/techs/symfony.png", category: "framework" },

  // Langages (vert)
  { name: "PHP", type: "language", image: "/images/techs/php.svg", category: "language" },
  { name: "JavaScript", type: "language", image: "/images/techs/javascript.svg", category: "language" },
  { name: "SQL", type: "language", image: "/images/techs/sql.svg", category: "language" },
  { name: "Python", type: "language", image: "/images/techs/python.svg", category: "language" },
  { name: "HTML5", type: "language", image: "/images/techs/html5.svg", category: "language" },
  { name: "CSS3", type: "language", image: "/images/techs/css3.svg", category: "language" },

  // SGBD (violet)
  { name: "MySQL", type: "sgbd", image: "/images/techs/mysql.svg", category: "sgbd" },
  { name: "PostgreSQL", type: "sgbd", image: "/images/techs/postgresql.svg", category: "sgbd" },
  { name: "MongoDB", type: "sgbd", image: "/images/techs/mongodb.svg", category: "sgbd" },

  // Outils & environnements (orange)
  { name: "Linux", type: "tool", image: "/images/techs/linux.svg", category: "tool" },
  { name: "Git", type: "tool", image: "/images/techs/git.svg", category: "tool" },
  { name: "GitHub Actions", type: "tool", image: "/images/techs/github.svg", category: "tool" },
  { name: "GitLab CI/CD", type: "tool", image: "/images/techs/gitlab.svg", category: "tool" },
  { name: "Cypress", type: "tool", image: "/images/techs/cypress.svg", category: "tool" },
  { name: "vitest", type: "tool", image: "/images/techs/vitest.svg", category: "tool" },
  { name: "Docker", type: "tool", image: "/images/techs/docker.svg", category: "tool" },
];

const projects = [
  {
    title: "MyGreenChoice",
    date: "18 avril 2025",
    description: "Plateforme éducative sur le gaz vert et les énergies renouvelables avec monitoring et sécurité avancés",
    techs: ["ReactJS", "Express", "MySQL", "NodeJS", "JavaScript", "CSS3", "Git", "Docker", "Linux"],
    duration: "3 mois",
    link: "#",
    image: "/images/projets/default.png",
    more: "En savoir plus",
    site: "https://mygreenchoice.example.com"
  },
  {
    title: "Airneis",
    date: "15 Mars 2024",
    description: "Site e-commerce de vente de meubles avec interface complète de gestion",
    techs: ["ReactJS", "PHP", "React Native", "MySQL", "JavaScript"],
    duration: "6 mois",
    link: "#",
    image: "/images/projets/default.png",
    more: "En savoir plus",
    site: "https://airneis.example.com",
    badge: "NOUVEAU"
  },
  {
    title: "Portfolio Personnel",
    date: "25 mai 2025",
    description: "Un site portfolio moderne avec animations et internationalisation",
    techs: ["ReactJS", "JavaScript", "HTML5", "CSS3", "Git", "GitHub Actions"],
    duration: "1 semaine",
    link: "#",
    image: "/images/projets/default.png",
    more: "En savoir plus",
    site: "https://portfolio.example.com"
  }
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
              className={`tech-btn ${tech.category} ${selected.includes(tech.name) ? "selected" : ""}`}
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
            <div className="project-banner">
              <img
                src={proj.image ? proj.image : "/images/projects/default.png"}
                alt={`Aperçu de ${proj.title}`}
                className="project-preview-banner"
              />
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-techs">
              {proj.techs.map(t => {
                const tech = techs.find(tech => tech.name === t);
                const category = tech ? tech.category : "";
                return (
                  <span
                    className={`project-tech project-tech-${category}`}
                    key={t}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
            {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">Voir</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;