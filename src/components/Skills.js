import React, { useState } from "react";
import skillData from "../config/skillData";
import "../styles/skills.css";
import { FaCode, FaGlobe, FaTools, FaDatabase } from "react-icons/fa";

const categories = [
  { key: "All", label: "All", icon: <FaCode /> },
  { key: "Web", label: "Web", icon: <FaGlobe /> },
  { key: "Programming", label: "Programming", icon: <FaCode /> },
  { key: "Tools", label: "Tools", icon: <FaTools /> },
  { key: "Database", label: "Database", icon: <FaDatabase /> },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillData
      : skillData.filter((skill) => skill.category === activeCategory);

  const radius = 200;
  const centerX = 250;
  const centerY = 250;

  return (
    <div className="section skills-section">
      <h2>My Skills</h2>

      <div className="skills-tabs">
        {categories.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveCategory(tab.key)}
            className={activeCategory === tab.key ? "active" : ""}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="skills-circle">
        {filteredSkills.map((skill, index) => {
          const angle = (2 * Math.PI * index) / filteredSkills.length;
          const x = centerX + radius * Math.cos(angle) - 36;
          const y = centerY + radius * Math.sin(angle) - 36;

          return (
            <div
              key={skill.id}
              className="skill-icon"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            >
              <span>{skill.icon}</span>
              <div className="tooltip">
                <strong>{skill.name}</strong>
                <br />
                {skill.experience}
                <br />
                {"⭐".repeat(skill.confidence)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
