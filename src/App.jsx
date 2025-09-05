import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import "./styles/index.css";
import MouseSpotlight from "./components/MouseSpotlight";

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <div className="site wrap-gradient">
      <MouseSpotlight radius={320} intensity={0.9} softness={0.65} />
      <header className="nav">
        <div className="brand">
          {/* <span className="brand-mark">S</span>enevon */}
          <img src="/images/Logo/logo.png" alt="logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="hire-btn" href="#contact">Hire Us</a>
      </header>

      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
