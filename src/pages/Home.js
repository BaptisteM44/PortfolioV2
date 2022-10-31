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
        <div className="home">
          <h2 className="home_title">Front-end</h2>
          <h2 className="home_title">Developer</h2>
        </div>
        <div className="home_img">
          <img src="" alt="" />
        </div>
      </section>
      <section className="interest">
        <div className="interest_first">
          <div className="interest_about">
            <h2 className="interest_about_title">About</h2>
          </div>
          <div className="interest_prompt">
            <p className="interest_prompt_text">Hello, i am Baptiste Morvan a front-end developer from Brussels.</p>
            <p className="interest_prompt_text">Always interested in learning new technologies and new languages</p>
            <p className="interest_prompt_text">I am looking for a job in Brussels, and I am free as soon as possible.</p>
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