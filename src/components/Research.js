import React from "react";
import { motion } from "framer-motion";
import "./../styles/research.css";

const Research = () => {
  return (
    <motion.div
      className="section research-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Research Work</h2>

      <div className="research-card">
        <h3>Lung Cancer Detection using Deep Learning with CT Scans</h3>
        <p className="research-summary">
          Developed a deep learning model using EfficientNet B2 to detect non-small cell lung cancer with 90.18% accuracy. 
          Automated CT scan analysis to improve clinical workflows. Published in IEEE.
        </p>
        <p className="tech-used"><strong>Tech Used:</strong> Python, TensorFlow, Keras, EfficientNet B2</p>
        <div className="research-links">
          <a href="https://ieeexplore.ieee.org/document/your-paper-id" target="_blank" rel="noreferrer">View Paper (IEEE)</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Research;
