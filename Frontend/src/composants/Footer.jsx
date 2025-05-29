import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>&copy; {new Date().getFullYear()} Hugo Barbosa Pereira</span>
      <span>
        <a href="https://github.com/Bagass0" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://linkedin.com/in/hugo-barbosa-pereira" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;