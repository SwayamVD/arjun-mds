import "./Footer.css";
import Badge from "./Badge";

const translations = {
  en: {
    brand: "Arjun Motor Driving School",
    tagline: "Learn safe driving with confidence and expert guidance.",
    quickLinks: "Quick Links",
    connect: "Connect",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    copyright: "© 2026 Arjun MDS. All rights reserved.",
  },
  mr: {
    brand: "अर्जुन मोटर ड्रायव्हिंग स्कूल",
    tagline: "विश्वासाने आणि सुरक्षितपणे ड्रायव्हिंग शिका.",
    quickLinks: "द्रुत दुवे",
    connect: "जोडा",
    home: "मुख्यपृष्ठ",
    about: "माझ्याबद्दल",
    services: "सेवा",
    contact: "संपर्क",
    copyright: "© २०२४ अर्जुन MDS. सर्व हक्क राखीव.",
  },
};

export default function Footer({ lang }) {
  const t = translations[lang] || translations.en;

  const sociallinks = [
    {
      iconpath:
        "https://pnggallery.com/wp-content/uploads/justdial-jd-logo-02.png",
      link: "https://jsdl.in/DT-4662YI6E6U2",
    },
    {
      iconpath: "https://www.svgrepo.com/show/503338/facebook.svg",
      link: "https://jsdl.in/DT-4662YI6E6U2",
    },
    {
      iconpath: "https://www.svgrepo.com/show/521711/instagram.svg",
      link: "https://jsdl.in/DT-4662YI6E6U2",
    },
  ];

  return (
    <footer className="footer page-wrapper" key={lang}>
      <div className="container px-3 px-md-auto footer-container">
        <div className="row gy-4">
          {/* BRAND */}
          <div className="col-md-5">
            <h5 className="footer-heading">{t.brand}</h5>
            <p className="footer-tagline">{t.tagline}</p>
          </div>

          {/* LINKS */}
          <div className="col-6 col-md-3">
            <h6 className="footer-heading">{t.quickLinks}</h6>
            <ul className="footer-links">
              <li>
                <a href="#home">{t.home}</a>
              </li>
              <li>
                <a href="#about">{t.about}</a>
              </li>
              <li>
                <a href="#services">{t.services}</a>
              </li>
              <li>
                <a href="#contact">{t.contact}</a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-6 col-md-4">
            <h6 className="footer-heading">{t.connect}</h6>
            <div className="footer-socials">
              {sociallinks.map((link, index) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Badge iconpath={link.iconpath} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
