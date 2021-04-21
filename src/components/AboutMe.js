import React from "react";
import author from "../me02.jpeg";


const AboutMe = () => {
    return (
      <div className="about-me">
        <div className = "container py-5">
          
            <div className="row">
            <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <div className = "photo-wrap mb-5">
            <img className = "profile-img" src={author} alt="author..." />
          </div>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="about-para">
            Hello! I am Alexandra, junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO.
            </p>
            <p className="about-para">
            I have been developing websites for almost a year. I'm Full-Stack Web Developer. My favourite Web tools are JavaScript, React, Bootstrap, Github, GitBush,
             HTML, CSS, MySQL etc

            

           </p>
           <p className="about-para">I create responsive websites that are displayed on all devices desktops and smartphones.

Of course, before I begin developing any webapp, Landing Page or Business Website, I need to have a ready-made project layout (sketch).

And I’m ready to do this for you, before we start developing your website, we will discuss all the  details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weaknesses.

All this is necessary to give your customers something that your competitors do not provide, or to present it too, but better!</p>
        </div>
       

        </div>
            </div>
        </div>
    )
}

export default AboutMe
