import "./Navigation.css";
import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
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
      className={`navbar navbar-expand-lg fixed-top d-flex flex-column ${scrolled ? "navbar-solid" : "navbar-transparent"}`}
    >
      {/* <div
        className={`d-none d-md-flex top-bar ${scrolled ? "top-bar-disappear" : ""}`}
      >
        <div className="left-side">Nashik, Maharashtra</div>
        <div className="right-side">
          <div className="left">+91 9850263331</div>
          <div className="center">Mon – Sat, 6:00 AM – 9:00 PM</div>
          <div className="right">amolmojad1484@gmail.com</div>
        </div>
      </div> */}
      <div
        className={`d-none d-md-flex top-bar ${scrolled ? "top-bar-disappear" : ""}`}
      >
        <div className="left-side">
          <MapPin size={13} strokeWidth={1.8} />
          Nashik, Maharashtra
        </div>
        <div className="right-side">
          <div className="left">
            <Phone size={13} strokeWidth={1.8} />
            +91 9850263331
          </div>
          <div className="center">
            <Clock size={13} strokeWidth={1.8} />
            Mon – Sat, 6:00 AM – 9:00 PM
          </div>
          <div className="right">
            <Mail size={13} strokeWidth={1.8} />
            amolmojad1484@gmail.com
          </div>
        </div>
      </div>
      <div className="container pb-1 pt-1">
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
