import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/portfolio/Home";
import About from "./pages/portfolio/About";
import Services from "./pages/portfolio/Services";
import Journey from "./pages/portfolio/Journey";
import Testimonial from "./pages/portfolio/Testimonial";
import Contact from "./pages/portfolio/Contact";
import Gallery from "./pages/portfolio/Gallery";
import { useState, useEffect } from "react";
function App() {
  const [lang, setLang] = useState("en");
  const toggleLang = () => {
    setLang(lang === "en" ? "mr" : "en");
  };
  useEffect(() => {
    document.body.classList.remove("lang-en", "lang-mr");
    document.body.classList.add(lang === "mr" ? "lang-mr" : "lang-en");
  }, [lang]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="page-wrapper">
      <Navigation
        toggleLang={toggleLang}
        toggleTheme={toggleTheme}
        lang={lang}
      />
      <Home lang={lang} />
      <About lang={lang} />
      <Testimonial lang={lang} />
      <Services lang={lang} />
      <Journey lang={lang} />
      <Gallery lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
