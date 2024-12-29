import React, { useEffect } from "react";

import HeroPage from "./componets/hero/HeroPage";
import About from "./componets/about/About";
import Skills from "./componets/skills/Skills";
import Projects from "./componets/projects/Projects";
import Contact from "./componets/contact/Contact";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";

function App() {
  return (
    <>
    <Header />
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
