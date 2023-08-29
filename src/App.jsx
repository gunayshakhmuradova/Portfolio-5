import React from 'react';
// import Navbar from './components/main/Navbar';
// import Footer from './components/main/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomePage from './components/pages/homepage';
import AboutMe from './components/pages/aboutme';
import Projects from './components/pages/projects';
import ContactMe from './components/pages/contactme';
import "./App.css";


function App() {
  return (
    <div className="App">
      <LandingPage />
      <Routes>
		<Route path="/home" element={<HomePage />} />
		<Route path="/aboutme" element={<AboutMe />} />
		<Route path="/projects" element={<Projects />} />
		<Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;

