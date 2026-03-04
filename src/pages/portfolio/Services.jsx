import ServiceCard from "../../components/ServiceCard";
import "./Services.css";
import { useState, useEffect } from "react";

export default function Services() {
  // const services = [
  //   {
  //     iconpath: "https://www.svgrepo.com/show/533553/car-side.svg",
  //     headline: "Practical Driving Training",
  //     desp: "Hands-on driving sessions covering city traffic, highway driving, parking, and road safety techniques.",
  //   },
  //   {
  //     iconpath: "https://www.svgrepo.com/show/510091/office.svg",
  //     headline: "All RTO related work",
  //     desp: "Hassle-free support for RC, insurance, and other essential vehicle documents.",
  //   },
  // ];
  const services = [
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
        "Road safety & traffic rule awareness",
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
        "Appointment booking & document guidance",
      ],
    },
  ];
  const images = [
    "/images/service-bg-1.jpg",
    "/images/service-bg-2.jpg",
    "/images/service-bg-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Carousel runs only visually on md+, but logic can stay simple
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="cus-section section-bg2 py-5">
      <div className="container">
        <h1 className="section-title">My Services</h1>

        {/* ================= DESKTOP VERSION ================= */}
        <div className="d-none d-md-block">
          <div className="carousel-container mb-5">
            <img className="carousel-image" src={images[index]} alt="Driving" />

            <div className="service-servicecards">
              <div className="service-wrapper d-flex g-4 justify-content-center">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="col-md-5 d-flex align-items-start"
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
        <div className="d-block d-md-none">
          <div className="row gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-12  d-flex justify-content-center align-items-center mobile-service-card"
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
    </section>
  );
}
