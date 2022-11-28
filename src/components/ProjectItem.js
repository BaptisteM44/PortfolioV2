import React from "react";
import { useNavigate } from "react-router-dom";
// import Transition from "./Transition";


function ProjectItem({name, id, category, date, image}) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
    >
      {/* <Transition /> */}
      <div className="projectItem_page"
      onClick={() => {navigate("/project/" + id)  ;
      }}>
        <h1 className="projectItem_title menu__item-link">{name}</h1>
        <img alt="project_content" className="menu__item-img" src={image} width="100%" height="100%" />
      </div>
      <div className="projectItem_details">
        <h2 className="projectItem_info">{category}</h2>
        <h2 className="projectItem_info">/{date}</h2>
      </div>
      
    </div>
  );
}

export default ProjectItem;