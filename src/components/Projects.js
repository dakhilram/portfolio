import React, { useState } from "react";
import { motion } from "framer-motion";
import projectData from "../config/projectData";
import "./../styles/projects.css";

const categories = ["All", "Web", "ML", "API", "Research"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((proj) => proj.category === selectedCategory);

  return (
    <motion.div
      className="section projects-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>My Projects</h2>

      <div className="project-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-button ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Tech:</strong> {project.techStack.join(", ")}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              {project.demo && project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
