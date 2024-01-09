// import React from "react";
// import { useNavigate } from "react-router-dom";


// function ProjectItem({name, id, category, date, image}) {
//   const navigate = useNavigate();
  
//   return (
//     <div className="projectItem">
//       <div className="projectItem_page"
//       onClick={() => navigate(`/project/${id}`)}>
//         <h2 className="projectItem_title menu__item-link">{name}</h2>
//         <img alt="project_content" className="menu__item-img" src={image} width="500px" height="500px" />
//       </div>
//       <div className="projectItem_details">
//         <h2 className="projectItem_info">{category}</h2>
//         <h2 className="projectItem_info">/{date}</h2>
//       </div>
      
//     </div>
//   );
// }

// export default ProjectItem;
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ name, id, category, date, image }) {
  const navigate = useNavigate();
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const image = imageRef.current;
      const bounds = image.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;
      image.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      const image = imageRef.current;
      image.style.transform = "translate(0, 0)";
    };

    const image = imageRef.current;
    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="projectItem">
      <div
        className="projectItem_page"
        onClick={() => navigate(`/project/${id}`)}
      >
        <h2 className="projectItem_title menu__item-link">{name}</h2>
        <img
          ref={imageRef}
          alt="project_content"
          className="menu__item-img"
          src={image}
          width="500px"
          height="500px"
        />
      </div>
      <div className="projectItem_details">
        <h2 className="projectItem_info">{category}</h2>
        <h2 className="projectItem_info">/{date}</h2>
      </div>
    </div>
  );
}

export default ProjectItem;
