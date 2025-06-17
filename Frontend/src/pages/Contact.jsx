import '../styles/Contact.css';
import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';
import { ContactTextes } from '../utils/textes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const { lang } = useContext(ConfigContext);
  const textes = ContactTextes[lang];

  return (
    <div className="contact-page">
      <h2>{ textes.title }</h2>
      <p className="contact-intro">{ textes.subtitle }</p>
      <div className="contact-grid">
        <a
          href="mailto:hugo.b_pereira@outlook.com"
          className="contact-card"
          aria-label="Mail"
        >
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div className="contact-type">Email</div>
          <div className="contact-value">hugo.b_pereira@outlook.com</div>
        </a>
        <a
          href="https://linkedin.com/in/hugo-barbosa-pereira"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <div className="contact-type">LinkedIn</div>
          <div className="contact-value">BARBOSA Hugo</div>
        </a>
      </div>
    </div>
  )
};

export default Contact;