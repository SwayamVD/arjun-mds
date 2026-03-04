import React from "react";
import "./Journey.css";

const translations = {
  en: {
    heading: "My Journey",
    steps: [
      {
        year: "2016 – Present",
        title: "Arjun Motor Driving School",
        text: "Started own driving school and providing structured driving lessons and test guidance.",
      },
      {
        year: "2004 – 2015",
        title: "Nashik",
        text: "Worked with an established driving school, handling learner training and RTO preparation.",
      },
      {
        year: "2000 – 2003",
        title: "Thane",
        text: "Completed training and worked under a senior driving instructor to gain practical experience.",
      },
    ],
  },
  mr: {
    heading: "माझा प्रवास",
    steps: [
      {
        year: "२०१६ – आजपर्यंत",
        title: "अर्जुन मोटर ड्रायव्हिंग स्कूल",
        text: "स्वतःची ड्रायव्हिंग स्कूल सुरू केली आणि संरचित ड्रायव्हिंग धडे आणि चाचणी मार्गदर्शन प्रदान करत आहे.",
      },
      {
        year: "२००४ – २०१५",
        title: "नाशिक",
        text: "प्रस्थापित ड्रायव्हिंग स्कूलमध्ये काम केले, शिकाऊ प्रशिक्षण आणि RTO तयारी हाताळली.",
      },
      {
        year: "२००० – २००३",
        title: "ठाणे",
        text: "प्रशिक्षण पूर्ण केले आणि व्यावहारिक अनुभव मिळवण्यासाठी वरिष्ठ ड्रायव्हिंग प्रशिक्षकाच्या अंतर्गत काम केले.",
      },
    ],
  },
};

export default function Journey({ lang }) {
  const t = translations[lang] || translations.en;

  return (
    <section
      className="cus-section design-section-1 section-bg1 page-wrapper"
      key={lang}
    >
      <div className="container journey-container">
        <h2 className="text-center mb-5 display-5 playfair-font">
          {t.heading}
        </h2>

        <div className="journey">
          {t.steps.map((step, index) => (
            <div
              key={index}
              className={`journey-card ${index === 0 ? "active" : ""}`}
            >
              <div className="journey-dot"></div>

              <div className="journey-content">
                <span className="journey-year">{step.year}</span>
                <span className="fs-5">{step.title}</span>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
