import { Link } from 'react-router-dom';
import '../styles/PageNotFound.css';

function PageNotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-title">404</div>
      <div className="notfound-subtitle">Page non trouvée</div>
      <div className="notfound-text">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </div>
      <Link to="/" className="notfound-link">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default PageNotFound;