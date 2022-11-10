import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();
  return (
    <div className="project">
      <button className="project_linkback" onClick={() => navigate(-1)}>Go back</button>
      <div className="project_description">
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequuntur pariatur ipsum explicabo quia, vitae corporis ipsa voluptatibus perferendis facere mollitia, at provident dolore nisi tempora dolorum dignissimos! Veniam, voluptate!
        </article>
      </div>
      <div className="project_content">
        <img alt="project_content_img" src={project.image} width="100%" height="100%" />
        <h1> {project.name}</h1>
      </div>     
      
    </div>
  );
}

export default ProjectDisplay;