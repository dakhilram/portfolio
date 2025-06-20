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
          I'm a Full-Stack and AI/ML Engineer passionate about building intelligent, scalable, and impactful web solutions. 
          With a strong foundation in software development and machine learning, I specialize in creating seamless user experiences, data-driven systems, and real-time cloud applications.
          </p>
          <blockquote className="about-quote">
            “Building solutions that make a difference — one line of code at a time.”
          </blockquote>

          <div className="about-facts">
            <div><strong>🎓 Degree:</strong> M.S. in Computer Science</div>
            <div><strong>🏫 University:</strong> University of Houston-Clear Lake</div>
            {/*<div><strong>📅 Graduation:</strong> May 2025</div>*/}
            <div><strong>💼 Role:</strong> Full-Stack Developer</div>

            <span>🌍 Based in USA</span><br></br>
            <span>🗣️ Fluent in English & Telugu</span>
          </div>
          {/*<p className="about-current-focus">
            🔍 Currently exploring: Real-time weather systems, disaster alert pipelines, and cloud-based ML deployment.
          </p>*/}
          <div className="about-links">
            <a href="https://github.com/dakhilram" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/akhilram-durgempudi" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`${process.env.PUBLIC_URL}/GargeyaDurgempudi.pdf`} download>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
