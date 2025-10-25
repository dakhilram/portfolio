import React from "react";
import "../styles/timeline.css";

// Earliest → Latest
const items = [
  {
    type: "edu",
    start: "Aug 2019",
    end: "Apr 2023",
    title: "B.Tech in Computer Science Engineering",
    org: "Koneru Lakshmaiah University",
    location: "Vijayawada, India",
    desc: "Built a strong foundation in programming, algorithms, and full-stack software engineering."
  },
  {
    type: "work",
    start: "Jan 2021",
    end: "Jul 2023",
    title: "Full Stack Developer",
    org: "eBay",
    location: "Bengaluru, India",
    desc: "Developed SmartListings using Java, Spring Boot, and React; built distributed microservices with RabbitMQ and Spring Cloud; boosted engagement by 30% and reduced support tickets by 25%."
  },
  {
    type: "research",
    start: "May 2023",
    end: "May 2023",
    title: "Research Paper — Lung Cancer Detection (EfficientNet B2)",
    org: "IEEE Publication",
    location: "",
    desc: "Published a deep learning model achieving ~90% accuracy in lung cancer detection using EfficientNet B2."
  },
  {
    type: "edu",
    start: "Aug 2023",
    end: "May 2025",
    title: "M.S. in Computer Science",
    org: "University of Houston–Clear Lake",
    location: "Houston, TX, USA",
    desc: "Graduate coursework focused on Artificial Intelligence, Machine Learning, Software Engineering, and Object-Oriented Programming."
  },
  {
    type: "work",
    start: "Oct 2024",
    end: "Present",
    title: "Full Stack Developer",
    org: "Citizens Bank",
    location: "Remote, USA",
    desc: "Developed an AI-powered financial advisor chatbot using LLaMA 3 and spaCy; built backend microservices with Java Spring Boot and WebFlux, integrated PostgreSQL, and automated CI/CD with Jenkins and GitHub Actions."
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="section vtl-section">
      <h2>My Journey</h2>

      {/* column-reverse = earliest at bottom, latest at top */}
      <div className="vtl">
        {items
          .map((it, i) => (
            <div key={`${it.title}-${i}`} className="vtl-item" data-type={it.type}>
              {/* keeps the center-line layout; no dot/date here */}
              <div className="vtl-node" />

              <article
                className="vtl-card"
                role="article"
                aria-label={`${it.title} at ${it.org || "—"}`}
              >
                {/* Date pill attached to the card */}
                <span className="vtl-date">
                  <time>{it.start}</time>
                  {it.end !== it.start && <> – <time>{it.end}</time></>}
                </span>

                <h3 className="vtl-title">
                  {it.title}
                  {it.end === "Present" && <span className="vtl-status">Current</span>}
                </h3>
                <div className="vtl-sub">
                  {it.org}{it.org && it.location ? " • " : ""}{it.location}
                </div>
                <p className="vtl-desc">{it.desc}</p>
              </article>
            </div>
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default Timeline;
