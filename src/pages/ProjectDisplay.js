import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();
  return (
    <div>
      <div className="project_display_sticky">
        <div className="project_display">
        <button className="project_linkback" onClick={() => navigate(-1)}>Go back</button>
          <div className="project_all">
            <div className="project_content_part">
              <article className="project_description">
                <h1 className="project_description_h1">{project.name}</h1>
                <p className="project_description_article">{project.info}</p>
              </article>
              <div className="project_content">
                <img alt="project_content" className="project_content_img" src={project.image} width="100%" height="100%" />
                <img alt="project_content" className="project_content_img" src={project.image} width="100%" height="100%" />
              </div>
            </div>
            <div className="project_content_part">
              <article className="project_description">
                <p className="project_description_article">{project.info}</p>
              </article>
              <div className="project_content">
                <img alt="project_content" className="project_content_img" src={project.image} width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <footer className="project_footer">
          <div className="project_footer_name">
            <p> {project.category}</p>
            <p>/{project.date}</p>
          </div>
          <div className="project_footer_law">
            <p> {project.category}</p>
            <p>/{project.date}</p>
          </div>
          <div className="project_footer_link">
            <a className="project_footer_link_item" target="_blank" rel="noopener noreferrer" href={project.link}> Site in Live</a>  
        </div>
        
      </footer> 
      
    </div>
  );
}

export default ProjectDisplay;