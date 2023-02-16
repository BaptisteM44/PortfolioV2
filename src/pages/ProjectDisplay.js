import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Transition from "../components/Transition";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList.find((p) => p.id === id);
  const navigate = useNavigate();
  return (
    <div>
       <Transition />
      <section className="project_display_sticky">
        <div className="project_display">
        <Link className="arrow" onClick={() => navigate(-1)}>
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </Link>
          <div className="project_all">
            <div className="project_content_part">
              <article className="project_description">
                <h1 className="project_description_h1 transi1">{project.name}</h1>
                <p className="project_description_article transi2">{project.info}</p>
                <div className="home_img_arrow arrowProjects">
                  <span>↓</span>
                </div>
              </article>
              <div className="project_content transiImg">
                <img alt="project_content" className="project_content_img" src={project.image} width="300px" height="300px" />
              </div>
            </div>
            <div className="project_content_part">
              <article className="project_description">
                <p className="project_description_article">{project.info2}</p>
              </article>
              <div className="project_content">
                <img alt="project_content" className="project_content_img" src={project.image2} width="300px" height="300px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="project_footer">
          <div className="project_footer_name">
            <p> {project.category}</p>
            <p>/{project.date}</p>
          </div>
          <div className="project_footer_link">
            <a className="project_footer_link_item" target="_blank" rel="noopener noreferrer" href={project.link}>⇲ Site</a>  
        </div>
      </footer> 
      
    </div>
  );
}

export default ProjectDisplay;