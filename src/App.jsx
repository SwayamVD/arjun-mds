import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/portfolio/Home'
import About from './pages/portfolio/About'
import Services from './pages/portfolio/Services'
import Journey from './pages/portfolio/Journey'
import Testimonial from './pages/portfolio/Testimonial'
import Contact from './pages/portfolio/Contact'
import Gallery from './pages/portfolio/Gallery';
import { useState,useEffect } from 'react'
function App() {
    const [theme,setTheme] = useState("light");
    useEffect(()=>{
        document.documentElement.setAttribute("data-bs-theme",theme)
    },[theme]);
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
  return (
    <>
      <Navigation theme={theme} toggleTheme={toggleTheme}/>
      <Home/>
      <About/>
      <Testimonial/>
      <Services/>
      <Journey/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
