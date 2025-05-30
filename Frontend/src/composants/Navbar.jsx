import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('fr');
  const location = useLocation();

  const navOptions = [
    { path: '/', label: lang === 'fr' ? 'Accueil' : 'Home' },
    { path: '/projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { path: '/about', label: lang === 'fr' ? 'À propos' : 'About' },
    { path: '/contact', label: lang === 'fr' ? 'Contact' : 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div >
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        {navOptions.map(option => (
          <Link
            key={option.path}
            to={option.path}
            className={location.pathname === option.path ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {option.label}
          </Link>
        ))}

      </div>
      <div className="navbar-lang">
        <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
        <span className="lang-sep"> | </span>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      </div>
      <button
        className={`navbar-burger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;