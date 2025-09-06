import React, { useEffect, useRef } from "react";
import Orb3D from "./Orb3D";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax drift of hero copy
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      heroRef.current?.style.setProperty("--mx", `${x}deg`);
      heroRef.current?.style.setProperty("--my", `${-y}deg`);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section id="home" className="hero reveal" ref={heroRef}>
      <div className="hero-aura" />
      <Orb3D />

      <div className="hero-grid">
        <div className="hero-copy tilt">
          <h1 className="headline">
            Outsourced <br /> Development <br /> Team
          </h1>
          <p className="sub">Built Customised tool with us</p>

          <div className="hero-avatars">
            <div className="avatar"><span>👩🏽‍💻</span></div>
            <div className="avatar"><span>👨🏻‍🎨</span></div>
            <div className="avatar"><span>👨🏾‍💼</span></div>
            <div className="avatar more">+3</div>
          </div>

          <div className="microcard">
            <p>
              <strong>lorem 400</strong> —
              which areas on a page will hold advertisements, editorials, and
              filler before the final written content and website designs receive
              client approval.
            </p>
          </div>
        </div>

        <div className="hero-model-slot" aria-hidden="true" />

        <div id="hero-card" className="about-blade glass tilt">
          <h3>About Senevon</h3>
          <p>
            <strong> SENEVON </strong>
            is a Organisation with a simple goal: build smart, beautiful, and scalable digital solutions that actually make a difference.
            We're a team of designers, developers, and creative thinkers who love turning ideas into clean code, smooth user experiences, and impactful digital products. Whether you're a business looking to launch, grow, or innovate — we’re here to make it happen.
            From apps to SaaS platforms, from websites to tools — we build things that work, look good, and grow with you.

          </p>


          {/* <div className="about-cards">
            {["About Our Team", "About Our Team", "About Our Team"].map(
              (t, i) => (
                <div className="mini glass" key={i}>
                  <h4>{t}</h4>
                  <p>
                    client approval. Fun Lorem Ipsum text may appear in any size and
                    font to simulate everything you create for your campaigns.
                  </p>
                </div>
              )
            )}
          </div> */}


          <div className="about-cards">
            {[
              {
                title: "Web Development",
                desc: "We build fast, scalable, and secure websites tailored to your business needs. From responsive landing pages to complex web platforms, our development team ensures seamless performance, clean code, and an engaging user experience."
              },
              {
                title: "Designing",
                desc: "Great design is more than looks—it’s about experience. Our creative team crafts modern, user-friendly interfaces and visually stunning designs that reflect your brand identity and keep users engaged."
              },
              {
                title: "App Development",
                desc: "We develop powerful mobile applications that bring your ideas to life. Whether it’s iOS, Android, or cross-platform, our apps are intuitive, feature-rich, and designed to deliver real value to your users."
              }
            ].map((card, i) => (
              <div className="mini glass" key={i}>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>



          <button className="cta">Work with Us</button>
        </div>
      </div>

      <div className="about-para reveal">
        <h4>About Our Team</h4>
        <p>
          client approval. Fun Lorem Ipsum text may appear in any size and font
          to simulate everything you create for your campaigns.
        </p>
        <h2 className="loremTitle">lorem 400</h2>
        <p className="loremLead">
          nguish which areas on a page will hold advertisements, editorials, and
          filler before the final written content and website designs receive
          client approval. <br />
          Fun Lorem Ipsum text may appear in any size and font to simulate
          everything you create for your campaigns.
        </p>
      </div>
    </section>
  );
}
