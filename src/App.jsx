import React, { useEffect } from "react";

import HeroPage from "./componets/hero/HeroPage";
import About from "./componets/about/About";
import Skills from "./componets/skills/Skills";
import Projects from "./componets/projects/Projects";
import Contact from "./componets/contact/Contact";
import Footer from "./componets/footer/Footer";

function App() {
  return (
    <>
      <HeroPage />
      <About />
      <Skills></Skills>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
