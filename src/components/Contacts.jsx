import React from "react";
// import GlassBall3D from "./GlassBall3D";
import "../styles/contacts.css";
// import Eye3D from "./eye3D";
import TextPressure from './TextPressure';

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

        {/* <div className="orb-badge">
          <div className="badge-outer">
            <div className="badge-inner">⚙</div>
          </div>
          <div className="badge-title">Senevon</div>
        </div> */}

         {/* <div className="contact-3d">
          <GlassBall3D modelUrl="/models/glassBall.glb" fit={0.8} sizeMultiplier={1.6} />
        </div> */}

        {/* <div style={{ display: "grid", placeItems: "center", minHeight: "60vh", gap: "40px" }}>
      <Eye3D size={220} />
    </div> */}

    <div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="Hello!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>

{/* <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", gap: 40 }}>
      <Eye3D size={220} />
      <Eye3D size={280} irisColor="#9b5cff" glowColor="rgba(155,92,255,0.55)" tilt={12} />
    </div> */}


      </div>
    </section>
  );
}
