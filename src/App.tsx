import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import { useEffect, useState, lazy, Suspense } from "react";
import Preloader from "./common/Preloader";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Skills = lazy(() => import("./pages/Skills"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2500);
    const timer2 = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (loading) return <Preloader fadeOut={fadeOut} />;

  return (
    <div className="relative z-10 h-full w-full flex flex-col bg-black">
      <div className="w-full flex justify-center">
        <Header />
      </div>
      <Suspense fallback={<Preloader fadeOut={false} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
