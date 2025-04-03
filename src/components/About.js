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
      <div className="about-content">
        {/* Image Section */}
        <motion.div
          className="circle-pop-container"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="circle-back"></div>
          <img src={profileImg} alt="Profile" className="circle-pop-img" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="about-text"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="about-name">Gargeya Akhilram Durgempudi</h3>
          <p>
            I’m currently pursuing my Master’s in Computer Science at the University of Houston-Clear Lake (Graduating May 2025).
            I'm a full-stack developer with strong foundations in web technologies, machine learning, cloud computing, and software engineering.
          </p>
          <div className="about-links">
            <a href="https://github.com/dakhilram" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/akhilram-durgempudi" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/Resume.pdf" download>Download Resume</a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
