import './Navigation.css'
import {useState, useEffect} from "react"
export default function Navigation({ theme, toggleTheme}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <nav className={`navbar navbar-expand-lg sticky-top ${scrolled ? "navbar-solid" : "navbar-transparent"}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/images/arjun-mds-transparent.png" alt="ARDS Logo" />
                    
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <a className="nav-link active"  href="#home">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item  d-flex align-items-center">
                            <button className='togglebtn' >
                                <img src="https://www.svgrepo.com/show/506518/language.svg" alt="theme" />
                            </button>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <button className='togglebtn' onClick={toggleTheme}>
                                <img src="/images/themetoggler.png" alt="theme" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}