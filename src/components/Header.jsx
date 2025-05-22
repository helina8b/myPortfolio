import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="800">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top custom-font">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" style={{ fontFamily: 'Playfair Display, serif' }}>
            My Portfolio
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
