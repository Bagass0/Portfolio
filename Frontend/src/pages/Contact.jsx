import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <div className="contact-page">
    <h2>Entrer en contact</h2>
    <p className="contact-intro">
      Discutons ensemble ! Pour toute collaboration, question ou opportunité, contactez-moi via l’un des moyens ci-dessous.
    </p>
    <div className="contact-box">
      <a
        href="mailto:hugo.b_pereira@outlook.com"
        className="contact-link"
        aria-label="Mail"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        hugo.b_pereira@outlook.com
      </a>
      <a
        href="https://linkedin.com/in/hugo-barbosa-pereira"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        linkedin.com/in/hugo-barbosa-pereira
      </a>
    </div>
  </div>
);

export default Contact;