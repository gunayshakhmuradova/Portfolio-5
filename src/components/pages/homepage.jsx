import React from 'react';
import Avatar from '../../assets/img/Avatar.jpg';
import Github from '../../assets/icon/github.png';
import LinkedIn from '../../assets/icon/linkedin.png';
import Behance from '../../assets/icon/behance.png';
import Codepen from '../../assets/icon/codepen.png';
import '../styles/home.css';

const Home = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/gunayshakhmuradova';
  const codepenUrl = 'https://www.codepen.io/gunayshakhmuradova';
  const githubUrl = 'https://www.github.com/gunayshakhmuradova';
  const behanceUrl = 'https://www.behance.net/gunayshakhmuradova93';

  return (
    <div className="homePage">
      <div className="main">
        <p>
          <span>Hi, I'm Gunay Zahra!👋</span>
          <br />
          I am a Junior Developer passionate about Front End development.
        </p>
        <div className="social">
          <div className="up">
            
              <button className="card1">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="120px" height="120px" fillRule="nonzero" className="linkedin">
                    <image href={LinkedIn} width="120px" height="120px" />
                  </svg>
                </a>
              </button>
            
            
              <button className="card2">
                <a href={codepenUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="50px" height="50px" className="codepen">
                    <image href={Codepen} width="50px" height="50px" />
                  </svg>
                </a>
              </button>
            
          </div>
          <div className="down">
            
              <button className="card3">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg height="50px" width="50px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="github">
                    <image href={Github} width="50px" height="50px" />
                  </svg>
                </a>
              </button>
            
            
              <button className="card4">
                <a href={behanceUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg height="50px" width="50px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="behance">
                      <image href={Behance} width="50px" height="50px" />
                    </svg>
                </a>
              </button>
            
          </div>
        </div>
      </div>
      <img src={Avatar} alt="Avatar" />
    </div>
  );
};

export default Home;
