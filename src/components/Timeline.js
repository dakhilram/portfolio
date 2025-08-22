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
    desc: "Strong foundation in programming, systems, and software engineering."
  },
  {
    type: "work",
    start: "Sep 2021",
    end: "Jul 2023",
    title: "Full-Stack Developer",
    org: "Capgemini",
    location: "Hyderabad, India",
    desc: "Java/Spring Boot, Microservices, Hibernate/JPA, MySQL (AWS RDS); CI/CD with Jenkins & Docker."
  },
  {
    type: "research",
    start: "May 2023",
    end: "May 2023",
    title: "Research Paper — Lung Cancer Detection (EfficientNet B2)",
    org: "IEEE Publication",
    location: "",
    desc: "Deep learning–based detection; ~90%+ accuracy using EfficientNet B2."
  },
  {
    type: "edu",
    start: "Aug 2023",
    end: "May 2025",
    title: "M.S. in Computer Science",
    org: "University of Houston–Clear Lake",
    location: "Houston, TX, USA",
    desc: "Coursework in AI, ML, Software Engineering, and OOP."
  },
  {
    type: "work",
    start: "Aug 2024",
    end: "Present",
    title: "Full-Stack Developer",
    org: "Goldman Sachs",
    location: "Remote, USA",
    desc: "Digital banking platform with Java/Spring Boot/Microservices, Spring Security (JWT/OAuth2), Kafka; CI/CD with Docker & Jenkins."
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="section vtl-section">
      <h2>Timeline</h2>

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
