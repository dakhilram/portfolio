import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Profile.png";
import "./../styles/about.css";

const About = () => {
  return (
    <motion.div
      className="section about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <div className="about-wrapper">
      <div className="circle-pop-container">
  <div className="circle-back"></div>
  <img src={profileImg} alt="Profile" className="circle-pop-img" />
</div>


        <div className="about-text">
          <p>
            I’m currently pursuing my Master’s in Computer Science at the University of Houston-Clear Lake (Graduating May 2025).
            I'm a full-stack developer with strong foundations in machine learning, cloud computing, and software engineering.
          </p>
          <div className="about-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/Resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
