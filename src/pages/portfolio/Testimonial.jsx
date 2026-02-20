import './Testimonial.css'
import Badge from '../../components/Badge';

export default function Testimonial() {


const reviews1 = [
    {
        gender: "female",
        name: "Vedika Patil",
        review:
        "Good driving classes with clear instructions and helpful practice sessions. Overall, a decent learning experience for beginners.",
        rating: 4
    },
    {
        gender: "male",
        name: "Shantanu Kadam",
        review:
        "Arjun Motor Driving School is an excellent choice. Amol Sir is friendly and helpful, and the location is easy to reach. I had a great experience learning to drive here and highly recommend it.",
        rating: 5
    },

    {
        gender: "male",
        name: "Rahul Jadhav",
        review:
        "Great teaching style and flexible timings. The practical sessions were very detailed and helped me understand traffic situations confidently. Highly recommend this driving school to beginners as well as those who want to improve their skills.",
        rating: 4
    }
];

const reviews2 = [
    {
        gender: "male",
        name: "Sanket",
        review:
        "Sir had very friendly and different techniques of teaching. Every day a new road was chosen to teach driving. I learned the car properly even before the training was completed. Great experience, must visit. All traffic rules and regulations were taught with proper practical sessions and safety videos.",
        rating: 5
    },
    {
        gender: "female",
        name: "Ketki Upasani",
        review:
        "Arjun Motor Driving School has excellent, well-serviced cars. I learned four-wheeler driving in 4 weeks. The knowledgeable trainer made the experience great! Highly recommended! Thank you Amol Sir. It was a great experience.",
        rating: 5
    },
    {
        gender: "female",
        name: "Pooja Deshmukh",
        review:
        "Very patient instructor and well-maintained vehicles. Felt confident after just a few sessions!",
        rating: 5
    }
];

    return (
        <section id='testimonials' className='cus-section section-bg1'>
            <div className="container">
                <h2 className="text-center mb-3 mb-md-5 display-5 playfair-font">Testimonials</h2>
                <div className="reviewborder ">
                    <div className="review-ratingcard">
                        <a 
                            href="https://maps.app.goo.gl/83JL1wmBmFFbbve47" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                            <div className='d-flex align-items-center gap-3'>
                                <Badge 
                                    iconpath= "https://www.svgrepo.com/show/447385/google.svg"
                                    color=""
                                />
                                <div className='d-flex flex-column rating-box'>
                                    <span className='text-dark fw-bold'>5.0 ⭐</span>
                                    <span className='text-secondary'>319 Ratings</span>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="https://jsdl.in/DT-4662YI6E6U2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                        <div className='d-flex align-items-center gap-3 '>
                            <Badge 
                                iconpath= "https://pnggallery.com/wp-content/uploads/justdial-jd-logo-02.png"
                                color=""
                            />
                            <div className='d-flex flex-column rating-box'>
                                <span className='text-dark fw-bold'>4.9 ⭐</span>
                                <span className='text-secondary'>606 Ratings</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    
                <div className="row d-flex justify-content-center reviews-container" 
                >
                {/* <div className="col-12 col-md-5 d-flex flex-column justify-content-start align-items-start review-col">
                    {reviews1.map((review,index)=>(
                        <div className="reviewcard" key={index}>
                            <div className='revicecard-name'>
                                <Badge 
                                iconpath={`${review.gender === 'male'?'https://www.svgrepo.com/show/483638/male-student-18.svg':'https://www.svgrepo.com/show/483470/female-person-2.svg'}`} 
                                color={review.gender}
                                />
                                <div>{review.name}</div>
                            </div>
                            <div className='review-text'>{review.review}</div>

                        </div>
                    ))}
                </div>

                <div className="col-12 col-md-5 d-flex flex-column justify-content-start align-items-start review-col">
                    {reviews2.map((review,index)=>(
                        <div className="reviewcard" key={index}>
                            <div className='revicecard-name'>
                                <Badge 
                                iconpath={`${review.gender === 'male'?'https://www.svgrepo.com/show/483638/male-student-18.svg':'https://www.svgrepo.com/show/483470/female-person-2.svg'}`} 
                                color={review.gender} />
                                <div>{review.name}</div>
                            </div>
                            <div className='review-text'>{review.review}</div>
                        </div>
                    ))}
                </div> */}
                    <div className="col-12 col-md-5 review-col scroll-up">
                    {[...reviews1, ...reviews1].map((review, index) => (
                        <div className="reviewcard" key={index}>
                            <div className='revicecard-name'>
                                <Badge 
                                iconpath={`${review.gender === 'male'?'https://www.svgrepo.com/show/483638/male-student-18.svg':'https://www.svgrepo.com/show/483470/female-person-2.svg'}`} 
                                color={review.gender}
                                />
                                <div>{review.name}</div>
                            </div>
                            <div className='review-text'>{review.review}</div>

                        </div>
                    ))}
                    </div>

                    <div className="col-12 col-md-5 review-col scroll-up">
                    {[...reviews2, ...reviews2].map((review, index) => (
                        <div className="reviewcard" key={index}>
                            <div className='revicecard-name'>
                                <Badge 
                                iconpath={`${review.gender === 'male'?'https://www.svgrepo.com/show/483638/male-student-18.svg':'https://www.svgrepo.com/show/483470/female-person-2.svg'}`} 
                                color={review.gender} />
                                <div>{review.name}</div>
                            </div>
                            <div className='review-text'>{review.review}</div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

            </div>
        </section>
    );
}
