import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from  "./components/Navbar.js";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe";
import Service from "./components/Services";
import Experience from "./components/Experience";


function App() {
  return (
    <>
    <Particles
    className = "particles-canvas"
    params={{
      particles:{
        number:{
          value:20,
          density:{
            enable:true, 
            value_area:900
          }
        },
        shape:{
          type:"square",
          stroke:{
            width:6,
            color: {
              value:"random ",}
          }
        }
      }
   }
    }
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Service />
    <Experience />
    </>
  );
}

export default App;