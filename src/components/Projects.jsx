




import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/projects.css";

// Put these images in /public/images/ and update hrefs to your real pages
const cards = [
  {
    title: "Project One",
    body:
      "Client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.",
    image: "/Images/projects/code-editor-ui.png",
    href: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    body:
      "Client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.",
    image: "/Images/projects/codemist-ui.png",
    href: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    body:
      "Client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.",
    image: "/Images/tooli-ui.png",
    href: "https://example.com/project-three",
  },
];

export default function Projects() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  // duplicate to create a seamless loop
  const row = [...cards, ...cards];

  return (
    <section id="projects" className="projects reveal">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="projects__title"
      >
        Projects
      </motion.h2>

      {/* Viewport with edge fade */}
      <div className="proj-viewport">
        <motion.div
          className="proj-track"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {row.map((c, i) => (
            <motion.article
              key={`${c.title}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              transition={{ duration: 0.6, delay: (i % cards.length) * 0.15 }}
              className="project glass card"
            >
              <a
                className="card__link"
                href={c.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${c.title} – open project`}
              >
                <img className="card__img" src={c.image} alt={c.title} />
                <div className="card__content">
                  <h4 className="card__title">{c.title}</h4>
                  <p className="card__body">{c.body}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
