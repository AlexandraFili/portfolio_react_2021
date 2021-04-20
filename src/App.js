
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from  "./components/Navbar.js";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe";


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
            value_area:1000
          }
        },
        shape:{
          type:"square",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
   }
    }
    />
    <Navbar />
    <Header />
    <AboutMe />
    </>
  );
}

export default App;
