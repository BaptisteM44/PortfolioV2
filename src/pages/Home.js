import React, {useRef, useEffect} from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Trombinoscope from "../assets/trombinoscope.png"
import Footer from "../components/Footer";
import "../styles/Home.css";
import TimelineSequence from "../components/TimelineSequence";

function Home() {
  return (
    <div id="home_main" className="home_main">
      <TimelineSequence />
      <Navbar />
      <div className="top_navbar">
        <p>Based in Brussels</p>
      </div>
      <section className="home_page_presentation">
        <div className="home" >
          <h2 className="home_title transi1">Front-end</h2>
          <h2 className="home_title transi2">Developer</h2>
        </div>
        <div className="home_img_content">
          <div className="home_img_arrow">
            <span>↓</span>
          </div>
          <span className="home_img_background">
            <img className="home_img" src={Trombinoscope} alt="Trombinoscope" />
          </span>
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
        <div className="interest_skills">
          <article className="interest_skills_item">
            <h2>Titre item</h2>
            <p>I always strive to create memorable experiences that are aesthetically appealing, functional and distinctive. Whether it's inspiring marketing websites, convincing e-commerce sites or apps that are truly beneficial to users.</p>
          </article>
          <article className="interest_skills_item">
            <h2>Titre item</h2>
            <p>I always strive to create memorable experiences that are aesthetically appealing, functional and distinctive. Whether it's inspiring marketing websites, convincing e-commerce sites or apps that are truly beneficial to users.</p>
          </article>
          <article className="interest_skills_item">
            <h2>Titre item</h2>
            <p>I always strive to create memorable experiences that are aesthetically appealing, functional and distinctive. Whether it's inspiring marketing websites, convincing e-commerce sites or apps that are truly beneficial to users.</p>
          </article>
          <article className="interest_slide">
            <p>My work slide down</p>
          </article>
        </div>
        
      </section>
      <section id="project" className="project">
        <div className="project_list">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} category={project.category} date={project.date} />
            );
          })}
        </div>  
      </section>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default Home;