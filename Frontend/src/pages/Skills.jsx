import '../styles/Skills.css';
import React from 'react';

function Skills() {
  return (
    <div className="skills-page">
      <h2>Mes Compétences</h2>
      <div className="skills-list">
        <div className="skill-group">
          <h3>Langages</h3>
          <ul>
            <li><span className="icon">🐘</span> PHP</li>
            <li><span className="icon">🗄️</span> SQL</li>
            <li><span className="icon">✨</span> JavaScript</li>
            <li><span className="icon">🐍</span> Python</li>
            <li><span className="icon">🌐</span> HTML5/CSS3</li>
            <li><span className="icon">📝</span> YAML/JSON</li>
          </ul>
        </div>
        <div className="skill-group">
          <h3>Frameworks</h3>
          <ul>
            <li><span className="icon">⚛️</span> ReactJS/Vite</li>
            <li><span className="icon">📱</span> React Native/Expo</li>
            <li><span className="icon">🎼</span> Symfony</li>
            <li><span className="icon">🌲</span> NodeJS/Express</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;