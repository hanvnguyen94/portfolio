import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectState } from "../projectState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../components/ScrollToTop";

export const ProjectDetails = () => {
  const location = useLocation();
  const url = location.pathname;
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className="project-detail"
        >
          <div className="headline">
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="mainImg" />
          </div>
          <div className="single-info">
            {project.info.map((singleInfo) => (
              <SingleInfo
                title={singleInfo.title}
                description={singleInfo.description}
                key={singleInfo.title}
              />
            ))}
          </div>
        </motion.div>
      )}
      <ScrollToTop />
    </>
  );
};

const SingleInfo = ({ title, description }) => {
  return (
    <div className="single-info">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectDetails;
