import React, {useRef, useEffect} from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Trombinoscope from "../assets/trombinoscope.png"
import Footer from "../components/Footer";
import "../styles/Home.css";


function Home() {
  return (
    <div id="home_main" className="home_main">
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
          <span className="home_img_background transiImg">
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
            <p className="interest_prompt_text">I am just arriving in Brussels and I am free now for a Web developer job in your company.</p>
            <p className="interest_prompt_text"> </p>
            <p className="interest_prompt_text"> </p>
          </div>  
        </div>
        <div className="interest_skills">
          <article className="interest_skills_item">
            <h2>Front-end Development</h2>
            <p>I am fond of modern applications and new technologies and I have increased real skills especially through my studies as well as a concrete training during this last year with Openclassrooms.</p>
          </article>
          <article className="interest_skills_item">
            <h2>Creative</h2>
            <p>I always strive to learn for create symply appealing websites, functional and distinctive. My preferred tools are more modern javascript libraries like React.js and GSAP. But i love learn more to develop my skills.</p>
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