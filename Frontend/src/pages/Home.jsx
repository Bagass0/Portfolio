import '../styles/Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Portfolio V1",
    description: "Première version de mon portfolio avec React.",
    id: 1,
  },
  {
    title: "API Weather",
    description: "Application météo utilisant une API externe.",
    id: 2,
  },
  {
    title: "E-commerce Demo",
    description: "Site e-commerce fictif avec panier et paiement.",
    id: 3,
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-modern">
      <section className="intro">
        <h2>Bienvenue sur mon Portfolio</h2>
        <p>
          Développeur passionné, je conçois des applications web modernes et performantes.<br />
          Découvrez mes projets et compétences ci-dessous.
        </p>
      </section>
      <section className="projects-preview">
        <h3>Mes Projets</h3>
        <div className="projects-list">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => navigate('/projects')}
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <span className="see-more">Voir plus →</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;