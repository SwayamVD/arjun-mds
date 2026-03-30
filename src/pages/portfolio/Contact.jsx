import "./Contact.css";
import Badge from "../../components/Badge";
import React, { useState } from "react";
const translations = {
  en: {
    heading: "Contact",
    messageOn: "Message on",
    whatsapp: "Whatsapp",
    mail: "Mail",
    contactDetails: [
      {
        iconpath: "https://www.svgrepo.com/show/521544/call-receive.svg",
        type: "Phone",
        value: "9850263331",
      },
      {
        iconpath: "https://www.svgrepo.com/show/533194/mail-alt.svg",
        type: "Email",
        value: "amolmojad@gmail.com",
      },
      {
        iconpath:
          "https://www.svgrepo.com/show/418950/address-location-map.svg",
        type: "Address",
        value:
          "Shop No 16, Gaurav Plaza, Near Vandana Park, Wadala Parthardi Raod, Indira Nagar, Nashik-422009, Maharashtra.",
      },
      {
        iconpath: "https://www.svgrepo.com/show/532125/clock-two.svg",
        type: "Availability",
        value: "Mon-Sat: 6am-9pm",
      },
    ],
  },
  mr: {
    heading: "संपर्क",
    messageOn: "संदेश पाठवा",
    whatsapp: "व्हाट्सअॅप",
    mail: "मेल",
    contactDetails: [
      {
        iconpath: "https://www.svgrepo.com/show/521544/call-receive.svg",
        type: "फोन",
        value: "9850263331",
      },
      {
        iconpath: "https://www.svgrepo.com/show/533194/mail-alt.svg",
        type: "ईमेल",
        value: "amolmojad@gmail.com",
      },
      {
        iconpath:
          "https://www.svgrepo.com/show/418950/address-location-map.svg",
        type: "पत्ता",
        value:
          "दुकान क्र. १६, गौरव प्लाझा, वंदना पार्क जवळ, वडाळा पारथर्डी रोड, इंदिरा नगर, नाशिक-४२२००९, महाराष्ट्र.",
      },
      {
        iconpath: "https://www.svgrepo.com/show/532125/clock-two.svg",
        type: "उपलब्धता",
        value: "सोम-शनि: सकाळी ६ ते रात्री ९",
      },
    ],
  },
};

export default function Contact({ lang }) {
  const t = translations[lang] || translations.en;
  const [show, setShow] = useState(false);
  return (
    <div
      id="contact"
      className="cus-section  section-bg1 page-wrapper"
      key={lang}
    >
      <div className="container">
        <h2 className="section-title ">{t.heading}</h2>
        <div className="row">
          <div className="col-md-8">
            <div className="row d-flex align-items-top justify-content-start gap-3">
              {t.contactDetails.map((contact, index) => (
                <div
                  key={index}
                  className="col-12 col-md-4 d-flex gap-3 p-2 w-auto"
                >
                  <Badge iconpath={contact.iconpath} color="" />
                  <div className="d-flex flex-column">
                    <span className="contact-type text-secondary">
                      {contact.type}
                    </span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <hr class="min-divider mobile" />
            <div className="contactdirect">
              <span className="fs-4">{t.messageOn}</span>
              <div className="d-flex gap-3 mt-2 ">
                <a
                  href="https://api.whatsapp.com/send?phone=9850263331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="contactbadge whatsapp">
                    <img
                      src="https://www.svgrepo.com/show/510342/whatsapp.svg"
                      height="30px"
                      alt="logo"
                    />
                    {t.whatsapp}
                  </div>
                </a>

                <a
                  href="mailto:yourmail@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="contactbadge mail">
                    <img
                      src="https://www.svgrepo.com/show/533194/mail-alt.svg"
                      height="30px"
                      alt="logo"
                    />
                    {t.mail}
                  </div>
                </a>
              </div>
            </div>
            <div className="contactform mt-4 d-flex flex-column">
              <span className="fs-4">Contact Form</span>
      <button
        className="btn btn-primary"
        onClick={() => setShow(true)}
      >
        Open contact form
      </button>

      {show && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 440 }}>
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Get in touch</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShow(false)}
                  aria-label="Close"
                />
              </div>

              <div className="modal-body">
                <form onSubmit={(e) => e.preventDefault()}>

                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label htmlFor="firstName" className="form-label">First name</label>
                      <input type="text" className="form-control" id="firstName" placeholder="Ada" />
                    </div>
                    <div className="col">
                      <label htmlFor="lastName" className="form-label">Last name</label>
                      <input type="text" className="form-control" id="lastName" placeholder="Lovelace" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="ada@example.com" />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="What's on your mind?" />
                  </div>

                  <div className="modal-footer px-0 pb-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShow(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Send message
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      )}
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
