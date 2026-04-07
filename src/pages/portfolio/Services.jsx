import ServiceCard from "../../components/ServiceCard";
import "./Services.css";
import { useState, useEffect } from "react";

const translations = {
  en: {
    heading: "My Services",
    services: [
      {
        iconpath: "https://www.svgrepo.com/show/533553/car-side.svg",
        headline: "Practical Driving Training",
        desp: "Hands-on driving sessions including:",
        points: [
          "City traffic practice",
          "Highway driving techniques",
          "Reverse & parallel parking",
          "Hill start control",
          "Defensive driving skills",
        ],
      },
      {
        iconpath: "https://www.svgrepo.com/show/510091/office.svg",
        headline: "All RTO related work",
        desp: "Hassle-free support for RC, insurance, and other essential vehicle documents.",
        points: [
          "Learning License (LL) application",
          "Permanent Driving License",
          "License renewal",
          "Duplicate license",
          "RC transfer & ownership change",
          "Vehicle insurance assistance",
          "Address change in RC",
          "Vehicle registration support",
        ],
      },
    ],
  },
  mr: {
    heading: "माझ्या सेवा",
    services: [
      {
        iconpath: "https://www.svgrepo.com/show/533553/car-side.svg",
        headline: "व्यावहारिक ड्रायव्हिंग प्रशिक्षण",
        desp: "प्रत्यक्ष ड्रायव्हिंग सत्रांमध्ये समाविष्ट:",
        points: [
          "शहरातील वाहतूक सराव",
          "महामार्ग ड्रायव्हिंग तंत्र",
          "रिव्हर्स आणि समांतर पार्किंग",
          "टेकडीवर गाडी सुरू करणे",
          "संरक्षणात्मक ड्रायव्हिंग कौशल्ये",
          "रस्ता सुरक्षा आणि वाहतूक नियम जागरूकता",
        ],
      },
      {
        iconpath: "https://www.svgrepo.com/show/510091/office.svg",
        headline: "सर्व RTO संबंधित काम",
        desp: "RC, विमा आणि इतर आवश्यक वाहन कागदपत्रांसाठी सोपे सहाय्य.",
        points: [
          "शिकाऊ परवाना (LL) अर्ज",
          "कायमस्वरूपी ड्रायव्हिंग परवाना",
          "परवाना नूतनीकरण",
          "डुप्लिकेट परवाना",
          "RC हस्तांतरण आणि मालकी बदल",
          "वाहन विमा सहाय्य",
          "RC मध्ये पत्ता बदल",
          "वाहन नोंदणी सहाय्य",
          "भेटीची वेळ बुकिंग आणि कागदपत्र मार्गदर्शन",
        ],
      },
    ],
  },
};

export default function Services({ lang }) {
  const t = translations[lang] || translations.en;

  const images = [
    "/images/service-bg-1.jpg",
    "/images/service-bg-2.jpg",
    "/images/service-bg-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="cus-section section-bg2 py-5 page-wrapper"
      key={lang}
    >
      <div className="container">
        <h1 className="section-title">{t.heading}</h1>

        {/* ================= DESKTOP VERSION ================= */}
        <div className="d-none d-md-block">
          <div className="carousel-container mb-5">
            <img className="carousel-image" src={images[index]} alt="Driving" />

            <div className="service-servicecards">
              <div className="service-wrapper d-flex g-4 justify-content-center">
                {t.services.map((service, index) => (
                  <div
                    key={index}
                    className="col-md-5 d-flex align-items-start  justify-content-center"
                  >
                    <ServiceCard
                      iconpath={service.iconpath}
                      headline={service.headline}
                      desp={service.desp}
                      points={service.points}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE VERSION ================= */}
        {/* <div className="d-block d-md-none">
          <div className="row gap-5">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="col-12  d-flex justify-content-center align-items-center"
              >
                <ServiceCard
                  iconpath={service.iconpath}
                  headline={service.headline}
                  desp={service.desp}
                  points={service.points}
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className="d-block d-md-none px-2">
          <div className="mobile-services">
            {t.services.map((service, index) => (
              <div key={index} className="mobile-service-item">
                {/* HEADER */}
                <div className="mobile-service-header">
                  <img src={service.iconpath} alt="icon" />
                  <h5>{service.headline}</h5>
                </div>

                {/* DESCRIPTION */}
                <p className="mobile-service-desp">{service.desp}</p>

                {/* POINTS */}
                <ul className="mobile-service-points ms-3">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
