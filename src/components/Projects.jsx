import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/projects.css";

const cards = [
  { title: "Our Projects", body: "client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns." },
  { title: "Our Projects", body: "client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns." },
  { title: "Our Projects", body: "client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns." }
];

export default function Projects() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section id="projects" className="projects reveal relative overflow-hidden py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-3xl font-bold mb-12"
      >
        Projects
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        {/* Fading masks at both ends */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Looping row */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...cards, ...cards].map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="project glass min-w-[300px] p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-3">{c.title}</h4>
              <p className="text-sm text-gray-700">{c.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
