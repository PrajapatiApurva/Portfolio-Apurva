import React from "react";
import "./Projects.css";
import project_list from "../../assets/assets/projects_data";

const Projects = () => {
  return (
    <div className="projects" >
      <div className="project-title sub-title" >
        <h2 id="projects">My Latest Projects</h2>
      </div>
      <div className="project-container">
        {project_list.map((project,index) => {
          return (
            <a href={project.p_link} target="_blank"><img key={index} src={project.p_img} alt={project.p_name} className="project-image"/></a>
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
