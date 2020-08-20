import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">React App</Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/about" className="navbar-item" onClick={toggleBurgerMenu}>About</Link>
          <Link to="/contact" className="navbar-item" onClick={toggleBurgerMenu}>Contact</Link>
          <Link to="/notes" className="navbar-item" onClick={toggleBurgerMenu}>Notes</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;