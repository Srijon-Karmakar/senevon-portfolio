import React from "react";

const cards = [
  { title: "Our Projects", body: "client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns." },
  { title: "Our Projects", body: "client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns." },
  { title: "Our Projects", body: "client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns." }
];

export default function Projects() {
  return (
    <section id="projects" className="projects reveal">
      <h2>Projects</h2>
      <div className="project-row">
        {cards.map((c, i) => (
          <article className="project glass" key={i}>
            <h4>{c.title}</h4>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
