import React from 'react';
import './Header.css'; // Arquivo de estilos

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="path-to-logo.png" alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">Home</a>
          </li>
          <li className="header__nav-item">
            <a href="/about" className="header__nav-link">Projetos</a>
          </li>
          <li className="header__nav-item">
            <a href="/services" className="header__nav-link">Cursos</a>
          </li>
          <li className="header__nav-item">
            <a href="/contact" className="header__nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;