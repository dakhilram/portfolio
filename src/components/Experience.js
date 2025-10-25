import React, { useState } from "react";
import "../styles/experience.css";

const experiences = [
  {
    company: "Citizens Bank",
    icon: "🏦",
    role: "Full Stack Developer",
    location: "Remote, USA",
    dates: "Oct 2024 – Present",
    bullets: [
      "Developed an AI-powered financial advisor chatbot using LLaMA 3 and spaCy for real-time, context-aware customer guidance, reducing support tickets by 40%.",
      "Built backend microservices with Java, Spring Boot, and WebFlux integrated with PostgreSQL and fine-tuned LLaMA 3 models via RESTful APIs.",
      "Created interactive React + React Query dashboards visualizing engagement metrics, chatbot performance, and usage trends.",
      "Implemented OAuth2/JWT-based authentication, SSO integration, and role-based access control (RBAC) aligned with SOC 2 and FAPI standards.",
      "Automated CI/CD pipelines using Jenkins and GitHub Actions with SonarQube, JaCoCo, and Selenium for high code quality and coverage."
    ],
    tech: [
      "Java", "Spring Boot", "Spring WebFlux", "PostgreSQL", "React", "React Query",
      "OAuth2/JWT", "SSO", "LLaMA 3", "spaCy", "Docker", "Kubernetes", "Kafka", "Jenkins", "GitHub Actions"
    ],
  },
  {
    company: "eBay",
    icon: "🛒",
    role: "Full Stack Developer",
    location: "Bengaluru, India",
    dates: "Jan 2021 – Jul 2023",
    bullets: [
      "Developed 'SmartListings', an internal platform for dynamic pricing, bulk uploads, and real-time inventory synchronization.",
      "Architected distributed microservices using Java, Spring Boot, Spring Cloud, and WebFlux with reactive APIs and RabbitMQ for async operations.",
      "Enhanced seller dashboards with React.js and optimized state management, boosting engagement by 30% and reducing support tickets by 25%.",
      "Implemented secure REST APIs with Spring Security and Oracle SQL; improved query performance by 45% through advanced indexing and partitioning.",
      "Achieved 90% test coverage using JUnit 5, Mockito, and Selenium integrated into Azure DevOps CI/CD pipelines, cutting QA cycles by 35%."
    ],
    tech: [
      "Java", "Spring Boot", "Spring Cloud", "Spring WebFlux", "React.js", "RabbitMQ",
      "Oracle SQL", "JUnit 5", "Mockito", "Selenium", "Azure DevOps", "Docker", "Kubernetes", "Helm"
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
