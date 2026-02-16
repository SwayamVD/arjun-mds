import './About.css'
import Badge from '../../components/Badge';
export default function About() {
    const badgetexts = ["Training","Lisence Asistance","All RTO Paper Clearance"];
    return (
        <section id="about" className="py-5 section-bg2 about-section">
            <div className="container">
                <div className="row d-flex justify-content-between hover-parent">
                    <div className="col-12 col-md-5 ">
                        <h1 className='playfair-font highlight-bg  highlight-underline'>AMOL MOJAD</h1>
                        <p>I am committed to helping learners become safe, confident, and responsible drivers. With years of experience and a practical teaching approach, i focus on real-road skills, traffic awareness, and personal guidance to ensure every student feels comfortable behind the wheel. My goal is to make driving easy, stress-free, and accessible for everyone.</p>
                        <div className="d-flex flex-wrap gap-3">
                            <span>I specialize in the following driving and licence-related services.</span>
                            {badgetexts.map((text,index)=>(
                                <div className='d-flex align-items-center gap-2' key={index}>
                                    <Badge iconpath="https://www.svgrepo.com/show/379965/check-good-yes.svg" color="" />
                                    {text}
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="baseofimage">
                        <div className="childimage">
                            <img
                            src="/images/instructor1.png"
                            alt="shop image"
                            className="img-fluid"
                            />
                        </div>
                        <div className="childimage-line" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}