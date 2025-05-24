import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/favicon.png" alt="Logo" className="logo-image" />
        MonPortfolio
        </div>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projets</Link>
        <Link to="/about" onClick={() => setOpen(false)}>À propos</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
      <button className="navbar-burger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;