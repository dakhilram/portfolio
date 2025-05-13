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
  
      <div className="skills-list">
        {skillData.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-icon" title={`${skill.experience} experience`}>
              <span className="icon">{skill.icon}</span>
              <span className="name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  };

export default Skills;
