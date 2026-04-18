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
        {show && (
          <div
            className="modal fade show d-block"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setShow(false)}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="modal-content"
                style={{ borderRadius: "12px", border: "none" }}
              >
                <div className="modal-header border-bottom pb-3">
                  <div>
                    <small className="text-muted">
                      We'll get back to you shortly
                    </small>
                  </div>
                  <button
                    className="btn-close me-1"
                    onClick={() => setShow(false)}
                  />
                </div>

                <div className="modal-body d-flex flex-column gap-3 pt-3">
                  <div>
                    <label
                      className="form-label text-muted"
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Your name
                    </label>
                    <input
                      className="form-control"
                      placeholder="Amol Mojad"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="form-label text-muted"
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Email address
                    </label>
                    <input
                      className="form-control"
                      placeholder="you@example.com"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="form-label text-muted"
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message here..."
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button
                    className="btn btn-dark w-100 py-2"
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
