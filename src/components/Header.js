import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
           <div className="main-info">
              <h1>web development and website promotions</h1>
              <Typed  
              className ="typed-text" 
              strings = {["Web Design", "Web Development", "Search Engine Optimisation", "Google Ads"]}
              typeSpeed ={70}
              backSpeed = {70}
              loop 
              />
            <a href="home" className ="btn-main-offer">contact me</a>
           </div>
        </div>
    )
}

export default Header
