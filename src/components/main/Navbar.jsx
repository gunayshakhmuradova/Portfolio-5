import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="../../LandingPage">Gunay Shakhmuradova</Link>
      </div>
      
      <nav>
        <ul>
          <li>
            <Link to="../../pages/homepage">Home</Link>
          </li>
          <li>
            <Link to="../../pages/aboutme">About me</Link>
          </li>
          <li>
            <Link to="../../pages/projects">Projects</Link>
          </li>
          <li>
            <Link to="../../pages/contactme">Contact me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
