import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from  "./components/Navbar.js";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe";
import Service from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Porfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";


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
            color: "#fffff"
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
    <Portfolio />
    <Testimonials />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;