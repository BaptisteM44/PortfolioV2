import React from "react";
import { useNavigate } from "react-router-dom";


function ProjectItem({name, id, category, date, image}) {
  const navigate = useNavigate();
  
  return (
    <div className="projectItem">
      <div className="projectItem_page"
      onClick={() => navigate(`/project/${id}`)}>
        <h2 className="projectItem_title menu__item-link">{name}</h2>
        <img alt="project_content" className="menu__item-img" src={image} width="500px" height="500px" />
      </div>
      <div className="projectItem_details">
        <h2 className="projectItem_info">{category}</h2>
        <h2 className="projectItem_info">/{date}</h2>
      </div>
      
    </div>
  );
}

export default ProjectItem;