import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import ScrollText from "../components/ScrollText";
import Trombinoscope from "../assets/trombinoscope.webp"
import Footer from "../components/Footer";
import "../styles/Home.css";
import Fade from 'react-reveal/Fade';



function Home() {

  const navigate = useNavigate();
  
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
            <img className="home_img" src={Trombinoscope} alt="Trombinoscope" height="200px" width="200px" />
          </span>
        </div>
      </section>
      <ScrollText />
      <section className="interest">
        <div className="interest_first">
        <Fade delay={600} bottom cascade>
          <div className="interest_prompt">
            <p className="interest_prompt_text">As a freelance web developer based in Brussels, I am open to exciting collaborations, whether for independent projects or roles within your company.</p>
          </div> 
        </Fade> 
        </div>
          <div className="interest_skills">
          <Fade delay={1000} bottom cascade>
            <article className="interest_skills_item">
              <h2 className="headline">Front-end Development</h2>
              <p>As a web integrator and frontend developer, I am able to solve most web-related problems. My goal is to create innovative and useful web applications while continuing to improve my skills to deliver superior quality to every project I participate in.</p>
            </article>
            </Fade>
            <Fade delay={1300} bottom cascade>
            <article className="interest_skills_item">
              <h2 className="headline">Creative</h2>
              <p>I always strive to create simply appealing websites, as well as functional and distinctive. My favorite tools are modern javascript libraries like React and GSAP. I love learning and searching to develop my skills.</p>
            </article>
            </Fade>
            <Fade delay={1600} bottom cascade>
            <article className="interest_slide">
              <p className="headline">My work slide down</p>
            </article>
            </Fade>
          </div>
      </section>
      <section id="project" className="project">
        <div className="project_list">
        
          {ProjectList.map((project) => {
            return (
              <ProjectItem id={project.id} name={project.name} image={project.image} category={project.category} date={project.date} onClick={() => navigate(`project/${project.id}`)} />
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