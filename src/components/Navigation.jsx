import "./Navigation.css";
import { useState, useEffect } from "react";
export default function Navigation({ toggleLang, toggleTheme, lang }) {
  const translations = {
    en: {
      aboutme: "About Me",
      testi: "Testimonials",
      services: "Services",
      contact: "Contact",
    },
    mr: {
      aboutme: "माझ्याबद्दल",
      testi: "प्रशंसापत्र",
      services: "सेवा",
      contact: "संपर्क",
    },
  };
  const t = translations[lang] || translations.en;
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${scrolled ? "navbar-solid" : "navbar-transparent"}`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/images/arjun-mds-transparent.png" alt="ARDS Logo" />
        </a>
        <button
          className="navbar-toggler navbar-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setScrolled(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse page-wrapper"
          id="navbarNav"
          key={lang}
        >
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
                            <a className="nav-link active"  href="#home">Home</a>
                        </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                {t.aboutme}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#testimonials"
                onClick={closeNavbar}
              >
                {t.testi}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={closeNavbar}>
                {t.services}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>
                {t.contact}
              </a>
            </li>
            <div className="d-flex gap-4 justify-content-between">
              <li className="nav-item  d-flex align-items-center">
                <button className="togglebtn" onClick={toggleLang}>
                  <img
                    src="https://www.svgrepo.com/show/506518/language.svg"
                    alt="theme"
                  />
                </button>
              </li>
              {/* <li className="nav-item d-flex align-items-center">
                <button className="togglebtn" onClick={toggleTheme}>
                  <img src="/images/themetoggler.png" alt="theme" />
                </button>
              </li> */}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
