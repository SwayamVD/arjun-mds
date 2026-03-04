import "./Footer.css";
import Badge from "./Badge";

const translations = {
  en: {
    quickLinks: "Quick Links",
    connect: "Connect",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    copyright: "© 2024 Arjun MDS. All rights reserved.",
  },
  mr: {
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
      platform: "JustDial",
      link: "https://jsdl.in/DT-4662YI6E6U2",
    },
    {
      iconpath: "https://www.svgrepo.com/show/503338/facebook.svg",
      platform: "Facebook",
      link: "https://jsdl.in/DT-4662YI6E6U2",
    },
    {
      iconpath: "https://www.svgrepo.com/show/521711/instagram.svg",
      platform: "Instagram",
      link: "https://jsdl.in/DT-4662YI6E6U2",
    },
  ];
  return (
    <footer className="py-4 footer page-wrapper" key={lang}>
      <div className="container">
        <div className="row">
          <div className="col-md-9 mb-3 mb-md-0">
            <h5 className="mb-3">{t.quickLinks}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-muted text-decoration-none">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted text-decoration-none">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted text-decoration-none">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted text-decoration-none">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">{t.connect}</h5>
            <div className="d-flex gap-3">
              {sociallinks.map((link, index) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  key={index}
                >
                  <Badge iconpath={link.iconpath} color="" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center text-muted">
          <p className="mb-0">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
