import React from 'react';
import '../styles/projects.css';
import Snake from '../../assets/projects/snake.PNG';
import Calculator from '../../assets/projects/calculator.PNG';
import Cinemareserve from '../../assets/projects/cinemareserve.PNG';
import Hangman from '../../assets/projects/hangman.PNG';
import Quotamachine from '../../assets/projects/quotamachine.PNG';
import Vacantion from '../../assets/projects/vacantion.PNG';
import Budgetapp from '../../assets/projects/budgetapp.PNG';
import Healthcareapp from '../../assets/projects/healthcareapp.png';
import Littlelemon from '../../assets/projects/littlelemon.PNG';
import Sevabeauty from '../../assets/projects/sevabeauty.PNG';
import Portfolio from '../../assets/projects/portfolio.PNG';
import ImageGenerator from '../../assets/projects/imagegenerator.PNG';



const Projects = () => {
  return (
    <div className="projects">
      <h2> Projects </h2>

      <div class="cards">

        <div className="card snake">
          <img src={Snake} alt="" />
            <div className="card__content">
                <p className="card__title">Snake Game</p>
                <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Snake-Game">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/bGOdyzr">Codepen</a></p>
            </div>
        </div>

        <div className="card calculator">
          <img src={Calculator} alt="" />
          <div className="card__content">
              <p className="card__title">Calculator App</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Calculator">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/QWZRoJj">Codepen</a></p>
          </div>
        </div>

        <div className="card cinemareserve">
          <img src={Cinemareserve} alt="" />
          <div className="card__content">
              <p className="card__title">Cinema Reserve App</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Cinema-Reserve">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/bGQyOGY">Codepen</a></p>
          </div>
        </div>

        <div className="card hangman">
          <img src={Hangman} alt="" />
          <div className="card__content">
              <p className="card__title">Hangman Game</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Hangman">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/xxQNmGK">Codepen</a></p>
          </div>
        </div>

        <div className="card quotemachine">
          <img src={Quotamachine} alt="" />
          <div className="card__content">
              <p className="card__title">Quota Machine App</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Quote-Machine">Github</a></p>
          </div>
        </div>

        <div className="card vacantion">
          <img src={Vacantion} alt="" />
          <div className="card__content">
          <p className="card__title" style={{ fontSize: "1.3rem" }}>Vacation Destinations Wish List</p>

              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Vacation-Destination-List">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/RwENPvV">Codepen</a></p>
          </div>
        </div>

        <div className="card budgetapp">
          <img src={Budgetapp} alt="" />
            <div className="card__content">
                <p className="card__title">Budget App</p>
                <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Budget-App">Github</a></p>
            </div>
        </div>

        <div className="card healthcareapp">
          <img src={Healthcareapp} alt="" />
           <div className="card__content">
              <p className="card__title">Healthcare App</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Healthcare-App">Github</a></p>
          </div>
        </div>

        <div className="card imagegenerator">
          <img src={ImageGenerator} alt="" />
          <div className="card__content">
              <p className="card__title">AI Image Generator</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/AI-Image-Generator">Github</a></p>
          </div>
        </div>
        
        <div className="card littlelemon">
          <img src={Littlelemon} alt="" />
           <div className="card__content">
              <p className="card__title">Little Lemon Website</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Little-Lemon-Restaurant">Github</a><a href="https://www.behance.net/gallery/176191915/Little-Lemon-Restaurant-Website-for-Meta-Course">Behance</a></p>
          </div>
        </div>

        <div className="card portfolio">
          <img src={Portfolio} alt="" />
          <div className="card__content">
              <p className="card__title">Portfolio Website</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Portfolio-2">Github</a><a href="https://www.behance.net/gallery/176773799/Portfolio-Website">Behance</a></p>
          </div>
        </div>

        <div className="card sevabeauty">
          <img src={Sevabeauty} alt="" />
          <div className="card__content">
              <p className="card__title">Beauty Salon Website</p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Seva-Beauty-Website">Github</a><a href="https://www.behance.net/gallery/176171187/Seva-Beauty-Website">Behance</a></p>
          </div>
        </div>
      </div>
      <button className="button"> <a href="https://www.github.com/gunayshakhmuradova" target='_blank'>See More</a>
      </button>
    </div>
  );
};

export default Projects;
