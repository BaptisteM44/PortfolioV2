import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList.find((p) => p.id === id);
  const navigate = useNavigate();
  return (
    <div>
      <section className="project_display_sticky">
        <div className="project_display">
        <Link onClick={() => navigate(-1)}>
          <span className="arrow">↓</span>
        </Link>
          <div className="project_all">
            <div className="project_content_part">
              <article className="project_description">
                <h1 className="project_description_h1 transi1">{project.name}</h1>
                <p className="project_description_article transi2">{project.info}</p>
                <p className="project_description_article">{project.info2}</p>
              </article>
              <div className="project_content transiImg">
                <img alt="project_content" className="project_content_img" src={project.image} width="300px" height="300px" />
              </div>
            </div>
          </div>
          <footer className="project_footer">
          <Link onClick={() => navigate(-1)}>
            <span className="arrow1">←</span>
          </Link>
          <div className="project_footer_name">
            <p> {project.category}</p>
            <p>/{project.date}</p>
          </div>
          <div className="project_footer_link">
            <a className="project_footer_link_item" target="_blank" rel="noopener noreferrer" href={project.link}>⇲ Site</a>  
        </div>
      </footer> 
        </div>
        
      </section>
      
      
    </div>
  );
}

export default ProjectDisplay;