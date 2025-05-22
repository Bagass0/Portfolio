import '../styles/Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Mon Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/skills">Compétences</Link></li>
        <li><Link to="/projects">Projets</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;