import React from "react";
import skillData from "../config/skillData";
import "./../styles/skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="section skills-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>My Skills</h2>

      <div className="circle-container">
        {skillData.map((skill, index) => {
          const angle = (360 / skillData.length) * index;
          const transformStyle = `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`;

          return (
            <motion.div
              key={skill.id}
              className="skill-icon tooltip-container"
              style={{ transform: transformStyle }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>{skill.icon}</span>
              <div className="tooltip">
                <strong>{skill.name}</strong><br />
                {skill.experience}<br />
                {"⭐".repeat(skill.confidence)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
