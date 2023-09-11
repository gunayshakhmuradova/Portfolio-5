import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage';
import AboutMe from '../pages/aboutme';
import Projects from '../pages/projects';
import ContactMe from '../pages/contactme';
import LandingPage from '../pages/landingpage';
import Footer from './Footer'

const Routing = () => {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing;

