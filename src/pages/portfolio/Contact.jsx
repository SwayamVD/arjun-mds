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
        value: "amolmojad1484@gmail.com",
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

  // ✅ NEW STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ MAILTO FUNCTION
  const handleSendMail = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(form.message);

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=amolmojad1484@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailURL, "_blank"); // opens Gmail in new tab
  };

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
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />

                  <input
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />

                  <textarea
                    className="form-control mb-2"
                    rows="3"
                    placeholder="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />

                  <button
                    className="btn btn-dark w-100"
                    onClick={handleSendMail}
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
