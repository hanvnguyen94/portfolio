import React from "react";
// import './ProjectCard.css';

const ProjectCard = ({ title, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
    </div>
  );
};

export default ProjectCard;
