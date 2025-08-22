import React, { useState } from "react";
import "../styles/experience.css";

const experiences = [
  {
    company: "Goldman Sachs",
    icon: "🏦",
    role: "Full-Stack Developer",
    location: "Remote, USA",
    dates: "Aug 2024 – Present",
    bullets: [
      "Built a modular digital banking platform using Java, Spring Boot, and Microservices; exposed REST APIs via Spring MVC & OpenAPI.",
      "Implemented Spring Security with JWT/OAuth2 and RBAC to meet financial compliance requirements.",
      "Enabled async/event flows with Apache Kafka; improved service responsiveness and reliability.",
      "Containerized services and automated CI/CD with Docker, Jenkins, Maven, and Git across dev/QA/UAT."
    ],
    tech: [
      "Java","Spring Boot","Spring Security","Spring MVC","Microservices",
      "Hibernate/JPA","MySQL","Kafka","Docker","Jenkins","Maven","Git","OpenAPI"
    ],
  },
  {
    company: "Capgemini",
    icon: "🏢",
    role: "Full-Stack Developer",
    location: "Hyderabad, India",
    dates: "Sep 2021 – Jul 2023",
    bullets: [
      "Delivered a financial transaction platform (Java, Spring Boot, Spring MVC) with real-time account & transfer APIs.",
      "Secured services with JWT-based auth and RBAC; used Hibernate/JPA with MySQL on AWS RDS for ACID compliance.",
      "Cut deployment cycles by ~40% via Jenkins + Docker pipelines; achieved 95%+ unit/integration coverage with JUnit/Mockito.",
      "Improved responsiveness by ~30% with Redis caching; upgraded dashboard using React/Redux, boosting engagement by ~25%."
    ],
    tech: [
      "Java","Spring Boot","Spring MVC","Hibernate/JPA","MySQL (AWS RDS)","JWT/OAuth2",
      "Redis","React","Redux","AWS","Docker","Jenkins","JUnit","Mockito","Swagger"
    ],
  },
];

// tech badge list with “show more” toggle
function TechBadges({ items, initial = 8 }) {
  const [expanded, setExpanded] = useState(false);
  const list = expanded ? items : items.slice(0, initial);
  return (
    <div className="badges" aria-label="Technologies used">
      {list.map((t) => (
        <span key={t} className="badge">{t}</span>
      ))}
      {items.length > initial && (
        <button
          className="badge toggle-badge"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `+${items.length - initial} more`}
        </button>
      )}
    </div>
  );
}

const Experience = () => {
  return (
    <div className="section experience-section" id="experience">
      <h2>Experience</h2>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <article key={exp.company} className="exp-card" aria-label={`${exp.role} at ${exp.company}`}>
            <header className="exp-header">
              <div className="exp-icon" aria-hidden="true">{exp.icon}</div>
              <div>
                <div className="exp-title">{exp.company}</div>
                <div className="exp-subtitle">{exp.role}</div>
                <div className="exp-meta">
                  <span>{exp.location}</span> • <span>{exp.dates}</span>
                </div>
              </div>
            </header>

            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>

            <TechBadges items={exp.tech} initial={8} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
