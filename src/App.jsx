import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import ParticlesBG from "./components/ParticlesBG.jsx";

const App = () => {
  return (
    <>
      <ParticlesBG />
      <Navbar />
      <Home />
      <AboutMe />
    </>
  );
};

export default App;
