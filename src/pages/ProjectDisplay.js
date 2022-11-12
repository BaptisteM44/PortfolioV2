import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();
  return (
    <div >
      <div className="project">
        <button className="project_linkback" onClick={() => navigate(-1)}>Go back</button>
        <div className="project_description">
          <h1> {project.name}</h1>
          <article className="project_description_article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur pariatur ipsum explicabo quia, vitae corporis ipsa voluptatibus perferendis facere mollitia, at provident dolore nisi tempora dolorum dignissimos! Veniam, voluptate!
          </article>
        </div>
        <div className="project_content">
          <img alt="project_content_img" src={project.image} width="100%" height="100%" />
        </div>
      </div>
      <footer className="footer">
          <div className="footer_name">
            <p> {project.info}</p>
            <p>/{project.date}</p>
          </div>
          <div className="footer_law">
            <p> {project.info}</p>
            <p>/{project.date}</p>
          </div>
          <div className="footer_link">
            <a className="footer_link_item" target="_blank" rel="noopener noreferrer" href={project.link}> Site in Live</a>  
          </div>
        </footer> 
      
    </div>
  );
}

export default ProjectDisplay;