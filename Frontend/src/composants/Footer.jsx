import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <img src="/favicon.svg" alt="Logo" width={28} height={28} style={{ marginBottom: 6 }} />
      <span>
        <a href="https://github.com/Bagass0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        {'|'}
        <a href="https://linkedin.com/in/hugo-barbosa-pereira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
      </span>
      <span>&copy; {new Date().getFullYear()} Hugo Barbosa Pereira</span>
    </div>
  </footer>
);

export default Footer;