import React from 'react';
import '../styles/aboutme.css';
import HTML5 from '../../assets/skills/HTML5.png';
import CSS3 from '../../assets/skills/CSS3.png';
import JavaScript from '../../assets/skills/JavaScript.png';
import Bootstrap from '../../assets/skills/Bootstrap.png';
import jQuery from '../../assets/skills/JQuery.png';
import ReactJS from '../../assets/skills/React.png';
import TypeScript from '../../assets/skills/typescript.png';
import Sass from '../../assets/skills/sass.png';
import Tailwind from '../../assets/skills/tailwind.png';
import Babel from '../../assets/skills/babel.png';
import WebPack from '../../assets/skills/webpack.png';
import Jest from '../../assets/skills/jest.png';
import Figma from '../../assets/skills/figma.png';
import Github from '../../assets/skills/github.png';
import Git from '../../assets/skills/git.png';
import Chakra from '../../assets/skills/chakra.png';
import WebApi from '../../assets/skills/webapi.png';
import Json from '../../assets/skills/json.png';
import Npm from '../../assets/skills/npm.png';
import Photoshop from '../../assets/skills/photoshop.png';
import Canva from '../../assets/skills/canva.png';
import Redux from '../../assets/skills/redux.png';
import Firebase from '../../assets/skills/firebase.png';
import Nodejs from '../../assets/skills/nodejs.png';
import Vuejs from '../../assets/skills/vuejs.png';
import Vscode from '../../assets/skills/vscode.png';
import Gimp from '../../assets/skills/gimp.png';
import Chatgpt from '../../assets/skills/chatgpt.png';





function AboutMe() {
  return (
    
    <div>
      <section id="aboutme">
        <div>
          <h2>About me</h2>
          <p className='paragraph'>
          <span>W</span>ith my interest in web technologies and my desire to create creative solutions, I am here to create user-friendly and engaging web experiences. If you would like to share my passion for technology, work together on innovative projects or exchange views about my experiences, please feel free to contact me. You can reach me here.
          Thank you for visiting my website!
          </p>
          <button className="btn">
              <a href="https://resume.io/r/Dv466j7Zg" target='_blank'>
                Download CV
              </a>
          </button>
        </div>
      </section>

      <section id="Skills">
        <h2>Skills</h2>
        <div style={{ clear: 'both' }}></div>

        <div className="all_skills">

          <div className="skill">
            <img src={HTML5} alt="HTML" />
          </div>

          <div className="skill">
            <img src={CSS3} alt="CSS" />
          </div>

          <div className="skill">
            <img src={JavaScript} alt="JavaScript" />
          </div>

          <div className="skill">
            <img src={Bootstrap} alt="Bootstrap" />
          </div>

          <div className="skill">
            <img src={jQuery} alt="jQuery" />
          </div>

          <div className="skill">
            <img src={TypeScript} alt="Typescript" />
          </div>

          <div className="skill">
            <img src={ReactJS} alt="React JS" />
          </div>

          <div className="skill">
            <img src={Sass} alt="sass" />
          </div>

          <div className="skill">
            <img src={Tailwind} alt="tailwind" />
          </div>

          <div className="skill">
            <img src={Babel} alt="babel" />
          </div>

          <div className="skill">
            <img src={WebPack} alt="webpack" />
          </div>

          <div className="skill">
            <img src={Chakra} alt="Chakra" />
          </div>

          <div className="skill">
            <img src={WebApi} alt="WebApi" />
          </div>

          <div className="skill">
            <img src={Jest} alt="Jest" />
          </div>

          <div className="skill">
            <img src={Figma} alt="Figma" />
          </div>

          <div className="skill">
            <img src={Github} alt="Github" />
          </div>

          <div className="skill">
            <img src={Git} alt="Git" />
          </div>

          <div className="skill">
            <img src={Npm} alt="Npm" />
          </div>

          <div className="skill">
            <img src={Photoshop} alt="Photoshop" />
          </div>

          <div className="skill">
            <img src={Canva} alt="Canva" />
          </div>

          <div className="skill">
            <img src={Redux} alt="Redux" />
          </div>

          <div className="skill">
            <img src={Firebase} alt="Firebase" />
          </div>

          <div className="skill">
            <img src={Json} alt="Json" />
          </div>

          <div className="skill">
            <img src={Nodejs} alt="Nodejs" />
          </div>

          <div className="skill">
            <img src={Vuejs} alt="Vuejs" />
          </div>

          <div className="skill">
            <img src={Vscode} alt="Vscode" />
          </div>

          <div className="skill">
            <img src={Gimp} alt="Gimp" />
          </div>

          <div className="skill">
            <img src={Chatgpt} alt="Chatgpt" />
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
