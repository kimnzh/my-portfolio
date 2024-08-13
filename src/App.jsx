import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/elements/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </BrowserRouter>
  );
}

export default App;
