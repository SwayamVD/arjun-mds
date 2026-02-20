import React from "react";
import "./Journey.css";

export default function Journey() {
  const steps = [
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
  ];

  return (
    <section className="cus-section design-section-1 section-bg1">
      <div className="container journey-container">
        <h2 className="text-center mb-5 display-5 playfair-font">My Journey</h2>

        <div className="journey">
          {steps.map((step, index) => (
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
