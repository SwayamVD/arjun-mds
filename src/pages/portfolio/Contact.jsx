import './Contact.css'
import Badge from '../../components/Badge';
export default function Contact() {
    const contactdetails = [
        {
            iconpath:"https://www.svgrepo.com/show/521544/call-receive.svg",
            type:"Phone",
            value:"9850263331"
        },
        {
            iconpath:"https://www.svgrepo.com/show/533194/mail-alt.svg",
            type:"Email",
            value:"amolmojad@gmail.com"
        },
        {
            iconpath:"https://www.svgrepo.com/show/418950/address-location-map.svg",
            type:"Address",
            value:"Shop No 16, Gaurav Plaza, Near Vandana Park, Wadala Parthardi Raod, Indira Nagar, Nashik-422009, Maharashtra."
        },
        {
            iconpath:"https://www.svgrepo.com/show/532125/clock-two.svg",
            type:"Availability",
            value:"Mon-Sat: 6am-9pm"
        }
    ];

    return (
        <div id='contact' className="cus-section  section-bg1">
            <div className="container">
                <h2 className="mb-4 display-6 playfair-font">Contact</h2>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row d-flex align-items-top justify-content-start gap-3">
                            {contactdetails.map((contact,index)=>(
                                <div key={index} className="col-12 col-md-4 d-flex gap-3 p-2 w-auto">
                                    <Badge iconpath={contact.iconpath} color="" />
                                    <div className="d-flex flex-column">
                                        <span className='contact-type'>{contact.type}</span>
                                        <span className='contact-value'>{contact.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <hr class="min-divider mobile" />
                        <div className="contactdirect">
                            <span className='fs-4'>Message on</span>
                            <div className="d-flex gap-3 mt-2 ">
                                <a 
                                href="https://api.whatsapp.com/send?phone=9850263331" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='text-decoration-none text-dark'
                                >
                                <div className="contactbadge whatsapp">
                                    <img src="https://www.svgrepo.com/show/510342/whatsapp.svg" height="30px" alt="logo" />
                                    Whatsapp
                                </div>
                                </a>

                                <a 
                                href="mailto:yourmail@gmail.com"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='text-decoration-none text-dark'
                                >
                                <div className="contactbadge mail">
                                    <img src="https://www.svgrepo.com/show/533194/mail-alt.svg" height="30px" alt="logo" />
                                    Mail
                                </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>


                <hr class="min-divider" />
                {/* Google Map */}
                <div className="mt-3 google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1874.9310733355028!2d73.78400315672167!3d19.97229884533708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb23bb487507%3A0x7f9d279d33ebd28d!2sArjun%20Driving%20School!5e0!3m2!1sen!2sin!4v1771156352368!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arjun Driving School Location"
                ></iframe>
                </div>

            </div>
        </div>
    );
}