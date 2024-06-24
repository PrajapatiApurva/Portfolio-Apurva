import React from "react";
import "./Projects.css";
import project_list from "../../assets/assets/projects_data";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="project-title">
        <h2>My Latest Projects</h2>
      </div>
      <div className="project-container">
        {project_list.map((project,index) => {
          return (
            <img key={index} src={project.p_img} alt={project.p_name} className="project-image"/>
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
