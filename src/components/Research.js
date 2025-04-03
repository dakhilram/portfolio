import React from "react";
import "./../styles/research.css";
import back from "../assets/background.jpeg";

const Research = () => {
  return (
    <div className="research-container">
      <div className="research-content">
        <div className="research-image">
          <img src={back} alt="Lung Cancer Image" />
        </div>
        <div className="research-text">
          <h2>Lung Cancer Detection Using Deep Learning</h2>
          <p>
            This research focuses on detecting lung cancer using deep learning techniques, specifically utilizing CT-scan images for prediction. 
            The model achieved 90.18% accuracy. It was published in IEEE. 
            The world's most common cancer-related death is lung cancer, and better patient outcomes depend on early identification. 
            The preferred imaging technique for screening for lung cancer is computed tomography (CT); however, due to its limited sensitivity, it
             can potentially miss diagnosis and produce false-negative results. Some current methods employ various filter types (Gabour, Median, etc.), 
             which might not offer the necessary precision. So, to boost accuracy and processing speed, a transfer learning (TL) method is utilized
              with the help of EfficientNet B2. The deep learning-based strategy for tumor identification on CT scan pictures is proposed in this 
              paper. The suggested technique automatically extracts features from CT images and categorizes them as normal or abnormal using
               Transfer learning a convolutional neural network (CNN).
          </p>
          <a href="https://ieeexplore.ieee.org/document/10150931" target="_blank" rel="noopener noreferrer">
            Read the full paper here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Research;
