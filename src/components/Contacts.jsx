import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact reveal">
      <div className="contact-wrap glass">
        <div className="contact-left">
          <h3>Contact Us:</h3>
          <ul className="contact-list">
            <li>📧 <a href="mailto:senevontech@gmail.com">senevontech@gmail.com</a></li>
            <li>📞 <a href="tel:+919477235928">+91 9477235928</a></li>
            <li>📍 Newtown, Kolkata-700080</li>
          </ul>

          <div className="contact-or">Or</div>

          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="WhatsApp No." />
            <button type="submit">Send Request</button>
          </form>
        </div>

        <div className="orb-badge">
          <div className="badge-outer">
            <div className="badge-inner">⚙</div>
          </div>
          <div className="badge-title">Senevon</div>
        </div>
      </div>
    </section>
  );
}
