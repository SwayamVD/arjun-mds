import './Home.css'

export default function Home() {

    return (
        <section id="home" className="homesection section-bg1">
            <div className="container">
                <div className="row align-items-center justify-content-around  hover-parent">
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
                    <div className="col-12 col-md-4 text-start  mt-5 mt-lg-0">
                        <div className="text-center text-lg-start">
                        <h1 className="tagline playfair-font">
                            Learn to Drive with <span className="highlight-color">Confidence</span> & <span className="highlight-color">Safety</span>.
                        </h1>

                        <div className="mt-4 mb-4" >
                            <p>Start your journey with professional training that prepares you for safe and independent driving.</p>
                            <ul className="hero-trust mt-3">
                            <li><span className="highlight-bg">23+ Years</span> Experience</li>
                            <li>Certified Instructor</li>
                            <li>RTO Approved</li>
                            <li><span className="highlight-bg">1000+</span> Students</li>
                            <li><div className="rating">
                            ⭐⭐⭐⭐⭐ <span><span className="highlight-bg">4.9+</span> (600+ Reviews)</span>
                            </div></li>
                            </ul>
                        </div>
                        </div>
                        <div className="hero-buttons mt-4">
                            <button className="btn btn-arjun me-3">My Services</button>
                            <button className="btn btn-outline-dark">Call Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}