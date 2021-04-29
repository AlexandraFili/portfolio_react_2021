import React from "react";
import netflix from "../images/3aaa.png";
import cityGuide from "../images/travel-app.png";
import portfolio from "../images/bubbleGame.png";
import taskManager from "../images/starbucks.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



 const Porfolio = () => {

      //Netflix
      const openPopupboxNetflix = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox" src={netflix} alt=" Project..." />
            
            <p>The 3A_web website was designed as a part WorkExperiance subject. Built with Bootstrap 4 framework, HTML, CSS..</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://alexandrafili.github.io/3a_web/", "_blank")}>https://alexandrafili.github.io/3a_web/</a>
             <br />
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AlexandraFili/3a_web")}>https://github.com/AlexandraFili/3a_web</a>
          </>
        )
        PopupboxManager.open({ content })
      }

      const popupboxConfigNetflix = {
        titleBar: {
          enable: true,
          text: "Netflix clone project."
        },
        fadeIn: true,
        fadeInSpeed: 500
      }

        // Travel App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="Trvl Gallery Project...." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        
 
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
        <br />
        <b>Tutorial Source:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=I2UBjN5ER4s", "_blank")}>https://www.youtube.com/watch?v=I2UBjN5ER4s</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "Trvl Gallery Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

   // JS Bubble Game
   const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Bubble Game..." />
        <p>This Bubbles Game can display or remove colourful bubbles by clicking one of the buttons. Please check it out on this link</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://alexandrafili.github.io/bubble_game/", "_blank")}>https://alexandrafili.github.io/bubble_game/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AlexandraFili/bubble_game", "_blank")}>https://github.com/AlexandraFili/bubble_game</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Bubbles Game"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Bubble Game......" />
        <p>Mini project, prictice wirh Landing Page Website Design using HTML, CSS & Javascript.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://alexandrafili.github.io/StarbucksWeb/", "_blank")}>https://alexandrafili.github.io/StarbucksWeb/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AlexandraFili/StarbucksWeb", "_blank")}>https://github.com/AlexandraFili/StarbucksWeb</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Please check my work..."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


    return (
   
      <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
     
       
    )
}
 export default Porfolio;
