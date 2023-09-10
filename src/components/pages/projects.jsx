import React from 'react';
import '../styles/projects.css';
import Snake from '../../assets/projects/Snake.PNG';
import Calculator from '../../assets/projects/Calculator.PNG';
import Cinemareserve from '../../assets/projects/Cinemareserve.PNG';
import Hangman from '../../assets/projects/Hangman.PNG';
import Quotamachine from '../../assets/projects/Quotamachine.PNG';
import Vacantion from '../../assets/projects/Vacantion.PNG';
import Budgetapp from '../../assets/projects/Budgetapp.PNG';
import Healthcareapp from '../../assets/projects/Healthcareapp.png';
import Littlelemon from '../../assets/projects/Littlelemon.PNG';
import Sevabeauty from '../../assets/projects/Sevabeauty.PNG';
import Portfolio from '../../assets/projects/Portfolio.PNG';
import ImageGenerator from '../../assets/projects/Imagegenerator.PNG';
import Game2048 from '../../assets/projects/2048.PNG'



const Projects = () => {
  return (
    <div className="projects">
      <h2> Projects </h2>

      <div className="cards">

        <div className="card snake">
          <img src={Snake} alt="" />
            <div className="card__content">
                <p className="card__title"><span className="code">&lt;</span>Snake Game<span className="code">&#47;&gt;</span></p>
                <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Snake-Game" target="_blank">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/bGOdyzr" target="_blank">Codepen</a></p>
            </div>
        </div>

        <div className="card calculator">
          <img src={Calculator} alt="" />
          <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>Calculator App<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Calculator" target="_blank">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/QWZRoJj" target="_blank">Codepen</a></p>
          </div>
        </div>

        <div className="card cinemareserve">
          <img src={Cinemareserve} alt="" />
          <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>Cinema Reserve App<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Cinema-Reserve" target="_blank">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/bGQyOGY" target="_blank">Codepen</a></p>
          </div>
        </div>

        <div className="card hangman">
          <img src={Hangman} alt="" />
          <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>Hangman Game<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Hangman" target="_blank">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/xxQNmGK" target="_blank">Codepen</a></p>
          </div>
        </div>

        <div className="card game2048">
          <img src={Game2048} alt="" />
          <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>2048 Game<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/2048-Game" target="_blank">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/QWzpaJd" target="_blank">Codepen</a></p>
          </div>
        </div>

        <div className="card quotemachine">
          <img src={Quotamachine} alt="" />
          <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>Quota Machine App<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Quote-Machine" target="_blank">Github</a></p>
          </div>
        </div>

        <div className="card vacantion">
          <img src={Vacantion} alt="" />
          <div className="card__content">
          <p className="card__title" style={{ fontSize: "1.3rem" }}><span className="code">&lt;</span>Vacation Destinations Wish List<span className="code">&#47;&gt;</span></p>

              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Vacation-Destination-List" target="_blank">Github</a><a href="https://codepen.io/gunayshakhmuradova/pen/RwENPvV" target="_blank">Codepen</a></p>
          </div>
        </div>

        <div className="card budgetapp">
          <img src={Budgetapp} alt="" />
            <div className="card__content">
                <p className="card__title"><span className="code">&lt;</span>Budget App<span className="code">&#47;&gt;</span></p>
                <p className="card__description" target="_blank"><a href="https://github.com/gunayshakhmuradova/Budget-App" target="_blank">Github</a></p>
            </div>
        </div>

        <div className="card healthcareapp">
          <img src={Healthcareapp} alt="" />
           <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>Healthcare App<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Healthcare-App" target="_blank">Github</a></p>
          </div>
        </div>

        <div className="card imagegenerator">
          <img src={ImageGenerator} alt="" />
          <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>AI Image Generator<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/AI-Image-Generator" target="_blank">Github</a></p>
          </div>
        </div>
        
        <div className="card littlelemon">
          <img src={Littlelemon} alt="" />
           <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>Little Lemon Website<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Little-Lemon-Restaurant" target="_blank">Github</a><a href="https://www.behance.net/gallery/176191915/Little-Lemon-Restaurant-Website-for-Meta-Course" target="_blank">Behance</a></p>
          </div>
        </div>

        <div className="card portfolio">
          <img src={Portfolio} alt="" />
          <div className="card__content">
              <p className="card__title"><span className="code">&lt;</span>Portfolio Website<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Portfolio-2" target="_blank">Github</a><a href="https://www.behance.net/gallery/176773799/Portfolio-Website" target="_blank">Behance</a></p>
          </div>
        </div>

        <div className="card sevabeauty">
          <img src={Sevabeauty} alt="" />
          <div className="card__content">
              <p className="card__title"style={{ fontSize: "1.8rem" }}><span className="code">&lt;</span>Beauty Salon Website<span className="code">&#47;&gt;</span></p>
              <p className="card__description"><a href="https://github.com/gunayshakhmuradova/Seva-Beauty-Website" target="_blank">Github</a><a href="https://www.behance.net/gallery/176171187/Seva-Beauty-Website" target="_blank">Behance</a></p>
          </div>
        </div>
      </div>
      <button className="button"> <a href="https://www.github.com/gunayshakhmuradova" target='_blank'>See More</a>
      </button>
    </div>
  );
};

export default Projects;
