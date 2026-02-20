import ServiceCard from "../../components/ServiceCard";
import './Services.css'
import { useState,useEffect } from "react";

export default function Services() {
    const services = [
        {
            iconpath: "https://www.svgrepo.com/show/533553/car-side.svg",
            headline: "Practical Driving Training",
            desp: "Hands-on driving sessions covering city traffic, highway driving, parking, and road safety techniques."
        },
        {
            iconpath: "https://www.svgrepo.com/show/510091/office.svg",
            headline: "All RTO related work",
            desp: "Hassle-free support for RC, insurance, and other essential vehicle documents."
        }
    ];
    const images = [
        "/images/service-bg-1.jpg",
        "/images/service-bg-2.jpg",
        "/images/service-bg-3.jpg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section id="services" className="cus-section section-bg2">
            <div className="container">
                <h1 className="text-center mb-3 mb-md-5 display-5 ">My Services</h1>
                {/* <div className="d-flex flex-wrap justify-content-evenly">
                    {services.map((service,index)=>(
                        <ServiceCard key={index} iconpath={service.iconpath} headline={service.headline} desp={service.desp} />
                    ))}
                </div> */}
                    
                        {/* <div className="carousel-container">
                            <img src={images[index]} alt="Driving" />
                            <div className="service-servicecards">
                                <div className="d-flex flex-wrap justify-content-evenly gap-md-0 gap-5">
                                    {services.map((service,index)=>(
                                        <ServiceCard key={index} iconpath={service.iconpath} headline={service.headline} desp={service.desp} />
                                    ))}
                                </div>
                            </div>
                        </div> */}
                    <div className="carousel-container mb-md-5">
                    <img className="carousel-image" src={images[index]} alt="Driving" />

                    <div className="service-servicecards">
                        <div className="service-wrapper">
                        {services.map((service, index) => (
                            <ServiceCard
                            key={index}
                            iconpath={service.iconpath}
                            headline={service.headline}
                            desp={service.desp}
                            />
                        ))}
                        </div>
                    </div>
                    </div>

                    
            </div>
        </section>
    );
}
