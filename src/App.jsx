import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import ParticlesBG from "./components/ParticlesBG.jsx";

const App = () => {
  return (
    <>
      <ParticlesBG />
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
