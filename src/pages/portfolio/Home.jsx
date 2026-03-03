import "./Home.css";

const translations = {
  en: {
    tagline: (
      <>
        Learn to Drive with <span className="highlight-color">Confidence</span>{" "}
        & <span className="highlight-color">Safety</span>.
      </>
    ),
    confidence: "Confidence",
    safety: "Safety",
    description:
      "Start your journey with professional training that prepares you for safe and independent driving.",
    experience: "Years of Experience",
    certified: "Certified Instructor",
    rto: "RTO Approved",
    students: "Students",
    reviews: "Reviews",
    services: "My Services",
    call: "Call Now",
  },
  mr: {
    tagline: (
      <>
        <span className="highlight-color">आत्मविश्वास</span> आणि{" "}
        <span className="highlight-color">सुरक्षिततेने</span> वाहन चालवायला
        शिका.
      </>
    ),
    confidence: "आत्मविश्वास",
    safety: "सुरक्षितता",
    description:
      "सुरक्षित आणि स्वतंत्र वाहन चालवण्यासाठी व्यावसायिक प्रशिक्षणासह तुमचा प्रवास सुरू करा.",
    experience: "वर्षांचा अनुभव",
    certified: "प्रमाणित प्रशिक्षक",
    rto: "RTO मान्यताप्राप्त",
    students: "विद्यार्थी",
    reviews: "पुनरावलोकने",
    services: "माझ्या सेवा",
    call: "आता कॉल करा",
  },
};

export default function Home({ lang }) {
  const t = translations[lang] || translations.en;

  return (
    <section id="home" className="cus-section full-section section-bg1">
      <div className="container">
        <div className="row align-items-center justify-content-around hover-parent">
          <div className="col-12 col-md-7">
            <div className="baseofimage">
              <div className="childimage">
                <img
                  src="/images/shop.avif"
                  alt="shop image"
                  className="img-fluid"
                />
              </div>
              <div className="childimage-line" />
            </div>
          </div>

          <div
            className="col-12 col-md-4 text-start mt-3 mt-lg-0 page-wrapper"
            key={lang}
          >
            <div className="text-center text-lg-start">
              <h1 className="tagline playfair-font">{t.tagline}</h1>

              <div className="mt-4 mb-4">
                <p className="text-start">{t.description}</p>

                <ul className="hero-trust mt-3 text-start">
                  <li>
                    <span className="highlight-bg">23+</span> {t.experience}
                  </li>
                  <li>{t.certified}</li>
                  <li>{t.rto}</li>
                  <li>
                    <span className="highlight-bg">1000+</span> {t.students}
                  </li>
                  <li>
                    <div className="rating">
                      ⭐⭐⭐⭐⭐{" "}
                      <span>
                        <span className="highlight-bg">4.9+</span> (600+{" "}
                        {t.reviews})
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="hero-buttons mt-4 mb-4 mb-md-0 d-flex flex-row justify-content-center gap-3">
              <a
                href="#services"
                class="btn btn-outline-dark fw-medium px-4 py-2 rounded text-decoration-none"
              >
                {t.services}
              </a>

              <a
                href="#contact"
                class="btn btn-dark fw-medium px-4 py-2 rounded text-decoration-none"
              >
                {t.call}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
