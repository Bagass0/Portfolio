import '../styles/Home.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faCode, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';

const roles = [
  "Développeur Full Stack",
  "Développeur PHP",
  "Développeur Mobile",
  "Développeur Web"
];

const experiences = [
  {
    type: "pro",
    title: "Développeur Full Stack",
    company: "Entreprise X",
    date: "2023 - Aujourd'hui",
    logo: faLaptopCode,
    description: "Développement d'applications web modernes en React et Node.js."
  },
  {
    type: "pro",
    title: "Développeur PHP",
    company: "Agence Web Y",
    date: "2021 - 2023",
    logo: faCode,
    description: "Création de sites dynamiques et maintenance de solutions PHP."
  },
  {
    type: "edu",
    title: "Master Informatique",
    company: "Université Z",
    date: "2019 - 2021",
    logo: faGraduationCap,
    description: "Spécialisation en développement logiciel et web."
  },
  {
    type: "edu",
    title: "Licence Informatique",
    company: "Université Z",
    date: "2016 - 2019",
    logo: faUniversity,
    description: "Bases solides en algorithmique et programmation."
  }
];

function Typewriter({ texts, speed = 80, pause = 1200 }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setDisplayed(texts[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, pause]);

  useEffect(() => {
    setDisplayed(texts[index].substring(0, subIndex));
  }, [subIndex, index, texts]);

  return (
    <span className="typewriter">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

const Home = () => {
  return (
    <>
      <header className="home-header">
        <div className="header-content">
          <img src="/banniere-header.png" alt="Logo" className="header-banniere" />
          <h1 className="header-title">
            <Typewriter texts={roles} />
          </h1>
          <div className="header-socials">
            <a
              href="https://github.com/Bagass0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/hugo-barbosa-pereira"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="header-bg"></div>
      </header>
      <section className="timeline-section">
        <h2 className="timeline-title">Parcours</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div className={`timeline-item ${exp.type}`} key={idx}>
              <div className="timeline-icon">
                <FontAwesomeIcon icon={exp.logo} />
              </div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span className="timeline-company">{exp.company}</span>
                <span className="timeline-date">{exp.date}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;