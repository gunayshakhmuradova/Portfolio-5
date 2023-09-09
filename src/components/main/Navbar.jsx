import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/homepage">Gunay Shakhmuradova</Link>
      </div>
      
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contactme">Contact me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
