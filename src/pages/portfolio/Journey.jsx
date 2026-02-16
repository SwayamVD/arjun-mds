import React from "react";
import "./Journey.css";

export default function Journey() {
  const steps = [
    {
      title: "2016 – Present | Arjun Motor Driving School",
      text: "Started own driving school and providing structured driving lessons and test guidance.",
    },
    {
      title: "2004 – 2015 | Nashik",
      text: "Worked with an established driving school, handling learner training and RTO preparation.",
    },
    {
      title: "2000 – 2003 | Thane",
      text: "Completed training and worked under a senior driving instructor to gain practical experience.",
    },
  ];

  return (
    <section className="section-bg2 py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 playfair-font">My Journey</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="timeline-content">
                <h5>{step.title}</h5>
                <p>{step.text}</p>
              </div>

              <div
                className={`timeline-circle ${
                  index === 0 ? "active" : ""
                }`}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
