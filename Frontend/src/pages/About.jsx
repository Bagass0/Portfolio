import '../styles/About.css';
import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';
import { AboutTextes } from '../utils/textes';

const About = () => {
  const { lang } = useContext(ConfigContext);
  const textes = AboutTextes[lang];

  return (
    <div className="projects-page">
      <div className="dev-banner">
        <span className="dev-emoji">🚧</span>
        <span>{ textes.description }</span>
        <span className="dev-emoji">🚧</span>
      </div>
    </div>
  );
}

export default About;