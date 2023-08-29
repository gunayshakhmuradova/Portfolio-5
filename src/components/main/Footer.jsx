import React from 'react';
import '../styles/footer.css';
import Github from '../../assets/skills/github.png';
import Linkedin from '../../assets/icon/linkedinfooter.png';
import Behance from '../../assets/icon/behancefooter.png';
import Codepen from '../../assets/icon/codepenfooter.png';
import FooterLogo from '../../assets/icon/footer.jpeg';

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={FooterLogo} alt="Logo" />
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gunayshakhmuradova/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/gunayshakhmuradova" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="GitHub" />
        </a>
        <a href="https://codepen.com/gunayshakhmuradova" target="_blank" rel="noopener noreferrer">
          <img src={Codepen} alt="GitHub" />
        </a>
        <a href="https://behance.com/gunayshakhmuradova93" target="_blank" rel="noopener noreferrer">
          <img src={Behance} alt="GitHub" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} <a href="mailto: gunayshakhmuradova@gmail.com">Gunay Zahra</a>. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
