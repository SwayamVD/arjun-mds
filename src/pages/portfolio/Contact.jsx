import "./Contact.css";
import Badge from "../../components/Badge";
import React, { useState } from "react";

const translations = {
  en: {
    heading: "Contact",
    contactthrough: "Contact Me",
    whatsapp: "Whatsapp",
    contactform: "Contact Form",
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
};

export default function Contact({ lang }) {
  const t = translations[lang] || translations.en;
  const [show, setShow] = useState(false);

  return (
    <div id="contact" className="cus-section py-3  section-bg1 page-wrapper">
      <div className="container ">
        <h2 className="section-title">{t.heading}</h2>

        <div className="row">
          {/* LEFT - CONTACT INFO */}
          <div className="col-md-8">
            <div className="contact-card">
              <div className="row g-3 g-md-4">
                {t.contactDetails.map((contact, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 d-flex gap-3 align-items-start"
                  >
                    <Badge iconpath={contact.iconpath} />
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
          </div>

          {/* RIGHT - ACTIONS */}
          <div className="col-md-4 px-4 contact-side">
            <div>
              <span className="fs-5">{t.contactthrough}</span>

              <div className="d-flex gap-2 mt-2 flex-wrap">
                {/* <a
                  href="https://wa.me/919850263331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="contactbadge whatsapp">
                    <img
                      src="https://www.svgrepo.com/show/510342/whatsapp.svg"
                      alt="whatsapp"
                    />
                    {t.whatsapp}
                  </div>
                </a> */}
                <a className="text-decoration-none">
                  <div
                    className="contactbadge contactform"
                    onClick={() => setShow(true)}
                  >
                    <img
                      src="https://www.svgrepo.com/show/533194/mail-alt.svg"
                      alt="mail"
                    />
                    {t.contactform}
                  </div>
                </a>
                <a
                  href="mailto:amolmojad@gmail.com"
                  className="text-decoration-none"
                >
                  <div className="contactbadge mail">
                    <img
                      src="https://www.svgrepo.com/show/533194/mail-alt.svg"
                      alt="mail"
                    />
                    {t.mail}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="min-divider" />

        {/* GOOGLE MAP */}
        <div className="mt-3 google-map">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1874.9310733355028!2d73.78400315672167!3d19.97229884533708!"
            src="https://www.google.com/maps?q=Arjun+Driving+School+Nashik&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            title="Location"
          ></iframe>
        </div>

        {/* MODAL */}
        {show && (
          <div
            className="modal fade show d-block"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Get in touch</h5>
                  <button
                    className="btn-close"
                    onClick={() => setShow(false)}
                  />
                </div>

                <div className="modal-body">
                  <input
                    className="form-control mb-2"
                    placeholder="Your name"
                  />
                  <input className="form-control mb-2" placeholder="Email" />
                  <textarea
                    className="form-control mb-2"
                    rows="3"
                    placeholder="Message"
                  />
                  <button className="btn btn-dark w-100">Send message</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
