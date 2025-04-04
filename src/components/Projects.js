import React, { useState } from 'react';
import projectData from '../config/projectData.js';
import '../styles//projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle card click to show the modal with project details
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  // Handle closing the modal
  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      {/* Project Cards Section */}
      <div className="project-cards">
        {projectData.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => handleCardClick(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.techStack.join(', ')}</p>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            {/* Close button at the top */}
            <span className="close-btn" onClick={handleClose}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p><strong>Tech:</strong> {selectedProject.techStack.join(', ')}</p>
            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>

            {/* Close button at the bottom 
            <div className="close-bottom">
              <button className="close-button" onClick={handleClose}>Close</button>
            </div>*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
