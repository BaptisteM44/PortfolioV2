import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home_main">
      <div className="top_navbar">
        <p>From Nantes, based in Brussels</p>
      </div>
      <section className="home_page_presentation">
        <div className="about">
          <h2> Hi, My Name is Pedro</h2>
          <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
          </div>
        </div>
      </section>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;