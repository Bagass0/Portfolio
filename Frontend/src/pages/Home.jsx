import '../styles/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faCode, faCodeBranch, faGraduationCap, faUniversity, faChalkboardUser, faSchool } from '@fortawesome/free-solid-svg-icons';

const roles = [
  "Développeur Full Stack",
  "Développeur PHP",
  "Développeur Mobile",
  "Développeur Web"
];

const experiences = [
  {
    type: "pro",
    title: "Développeur Web Fullstack",
    company: "Agence Arep Boulogne-Billancourt",
    date: "2023 - 2025",
    logo: faLaptopCode,
    companyImg: "../images/entreprises/arep.jpg",
    tasks: [
      "Développement de sites web événementiels",
      "Développement d'une application mobile évènementielle",
      "Création d’un backoffice pour l’app mobile",
      "Mise en place de systèmes d’authentification et gestion des utilisateurs"
    ]
  },
  {
    type: "pro",
    title: "IT Specialist",
    company: "VEESION 6 Rue Beaubourg, 75004 Paris",
    date: "2022 - 2023",
    logo: faCode,
    companyImg: "../images/entreprises/veesion.png",
    tasks: [
      "Installation d'une IA",
      "Création de scripts qui automatisent les installations",
      "Maintenance",
      "Résolution de bugs",
      "Support Client"
    ]
  },
  {
    type: "pro",
    title: "Stage de technicien de maintenance",
    company: "Dumez Ile de France",
    date: "De mai 2021 à juillet 2021",
    logo: faCodeBranch,
    companyImg: "../images/entreprises/dumez.jpg",
    tasks: [
      "Ticketing : installation et réparation",
      "Maintenance salles informatiques",
      "Préparation machines"
    ]
  }
];

const educations = [
  {
    type: "edu",
    title: "Bac+5 Master Expert en Etudes et développement du Système d’Information",
    school: "Ecole d’informatique H3 Hitema - 34 bis Rue du Cotentin 75015, 75015 Paris",
    date: "2023 - 2025",
    logo: faGraduationCap,
    schoolImg: "/images/ecoles/hitema.jpg",
    tasks: [
      "Developpement : Structures de données et complexité, Cloud Computing, Machine Learning / IA, Web Scrapping",
      "Evolution du SI : Micro Services, Serverless, PCA / PRA, Redis, Déploiement Continu / Intégration continue",
      "Analyser un besoin, un cahier des charges",
      "Concevoir des architectures",
      "Assurer la mise en production continue",
      "Piloter un projet et animer une équipe projet",
      "Opérer une veille technologique"
    ]
  },
  {
    type: "edu",
    title: "Bac+3 Bachelor Administrateur des Systèmes d’Information option Développement Web, logiciel et mobile",
    school: "Ecole d’informatique H3 Hitema - 88 Bd Gallieni, 92130 Issy-les-Moulineaux",
    date: "2022 - 2023",
    logo: faUniversity,
    schoolImg: "/images/ecoles/hitema.jpg",
    tasks: [
      "Concept de base : Algorithmie, Programmation Orientée Objet, C / C++, Python, Java",
      "Base de données : SQL, MySQL, MongoDB",
      "Développement Web : HTML5/CSS3, Javascript, React, NodeJS/Express, Python/FastAPI, PHP, Symfony",
      "Développement Mobile : Android, React Native",
      "Déploiement : Docker, Infrastructure et Réseau (Linux), Cybersécurité",
      "Automatisation et DevOps : GitHub Actions, Gitlab CI/CD, Jenkins, Coolify, Prometheus/Grafana",
      "Pilotage de projet : Gestion de projet, RGPD, Anglais, Git/Github"

    ]
  },
  {
    type: "edu",
    title: "BTS Systèmes numériques informatique et réseaux",
    school: "Lycée Polyvalent Christophe Colomb 154 Rue de Boissy, 94370 Sucy-enBrie",
    date: "2020 - 2022",
    logo: faSchool,
    schoolImg: "/images/ecoles/vdm.jpg",
    tasks: [
      "Langages étudiés : Python, C++, Java, HTML/CSS, PHP, JavaScript",
      "Conception et réalisation d’un projet en équipe",
      "Configuration de réseaux (IPv4, IPv6, DHCP, DNS, NAT…)",
      "Protocoles réseau (TCP/IP, HTTP, FTP…)",
      "Administration de systèmes Linux"
    ]
  },
  {
    type: "edu",
    title: "Baccalauréat Scientifique",
    school: "Lycée Polyvalent Samuel De Champlain - 94430 Chennevières-sur-Marne",
    date: "2019 - 2020",
    logo: faChalkboardUser,
    schoolImg: "/images/ecoles/vdm.jpg",
    tasks: [
      "Spécialité Sciences de la Vie et de la Terre"
    ]
  },
];


const Home = () => {
  return (
    <>
      <header className="home-header">
        <div className="header-content">
          <img src="/banniere-header.png" alt="Logo" className="header-banniere" />
          <h1 className="header-title">
            <span style={{ color: '#4fc3f7', fontWeight: 700 }}>
              <Typewriter
                words={roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
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
        <h2 className="timeline-title">Expériences professionnelles</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div className={`timeline-item ${exp.type}`} key={idx}>
              <div className="timeline-icon">
                <FontAwesomeIcon icon={exp.logo} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  {exp.companyImg && (
                    <img
                      src={exp.companyImg}
                      alt={exp.company}
                      className="timeline-company-img"
                    />
                  )}
                  <div>
                    <h3>{exp.title}</h3>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-date">{exp.date}</span>
                  </div>
                </div>
                <ul>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="timeline-section">
        <h2 className="timeline-title">Parcours Scolaire</h2>
        <div className="timeline">
          {educations.map((edu, idx) => (
            <div className={`timeline-item ${edu.type}`} key={idx}>
              <div className="timeline-icon">
                <FontAwesomeIcon icon={edu.logo} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  {edu.schoolImg && (
                    <img
                      src={edu.schoolImg}
                      alt={edu.school}
                      className="timeline-company-img"
                    />
                  )}
                  <div>
                    <h3>{edu.title}</h3>
                    <span className="timeline-company">{edu.school}</span>
                    <span className="timeline-date">{edu.date}</span>
                  </div>
                </div>
                <ul>
                  {edu.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;