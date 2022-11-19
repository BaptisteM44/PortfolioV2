import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({name, id, category, date, image}) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
    >
      <div className="projectItem_page"
      onClick={() => {
        navigate("/project/" + id);
      }}>
        <h1 className="projectItem_title">{name}</h1> 
        
      </div>
      {/* <div style={{ backgroundImage: `url(${image})` }} className="bgImage" /> */}
      <div className="projectItem_details">
        <h2 className="projectItem_info">{category}</h2>
        <h2 className="projectItem_info">{date}</h2>
      </div>
      
    </div>
  );
}

export default ProjectItem;