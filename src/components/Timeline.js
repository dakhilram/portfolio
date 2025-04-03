import React from "react";
import { motion } from "framer-motion";
import "./../styles/timeline.css";

const Timeline = () => {
  const items = [
    {
      year: "2025",
      title: "MS in Computer Science",
      location: "University of Houston-Clear Lake, TX",
      description: "Expected graduation in May 2025. Coursework in AI, ML, Software Engineering, and OOP.",
    },
    {
      year: "2023",
      title: "B.Tech in Computer Science Engineering",
      location: "Koneru Lakshmaiah University, India",
      description: "Graduated in April 2023. Strong foundation in programming and systems.",
    },
    {
      year: "2023–2024",
      title: "Teaching Assistant / Mentor",
      location: "UHCL",
      description: "Mentored students in Java, Python, and DSA. TA for software engineering courses.",
    },
  ];

  return (
    <motion.div
      className="section timeline-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Education & Experience</h2>
      <div className="timeline">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span className="timeline-year">{item.year}</span>
              <p className="timeline-location">{item.location}</p>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
