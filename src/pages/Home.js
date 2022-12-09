import React, {useRef, useEffect} from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import ScrollText from "../components/ScrollText";
import Trombinoscope from "../assets/trombinoscope.webp"
import Footer from "../components/Footer";
import "../styles/Home.css";
import Fade from 'react-reveal/Fade';


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
            <img className="home_img" src={Trombinoscope} alt="Trombinoscope" height="200px" width="200px" />
          </span>
        </div>
      </section>
      <ScrollText />
      <section className="interest">
        <div className="interest_first">
        <Fade delay={600} bottom cascade>
          <div className="interest_prompt">
            <p className="interest_prompt_text">I am just arriving in Brussels and I am free now for a Web developer job in your company.</p>
          </div> 
        </Fade> 
        </div>
          <div className="interest_skills">
          <Fade delay={1000} bottom cascade>
            <article className="interest_skills_item">
              <h2 className="headline">Front-end Development</h2>
              <p>I am fond of modern applications and new technologies and I have increased real skills especially through my studies as well as a concrete training with 7 projects during this last year with Openclassrooms.</p>
            </article>
            </Fade>
            <Fade delay={1300} bottom cascade>
            <article className="interest_skills_item">
              <h2 className="headline">Creative</h2>
              <p>I always strive to learn for create symply appealing websites, functional and distinctive. My preferred tools are more modern javascript libraries like React.js and GSAP. But i love learn more to develop my skills.</p>
            </article>
            </Fade>
            <Fade delay={1600} bottom cascade>
            <article className="interest_slide">
              <p className="headline">My work slide down</p>
            </article>
            </Fade>
          </div>  
        
        
        
      </section>
      <Fade delay={600} bottom cascade>
      <section id="project" className="project">
        <div className="project_list">
        
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} category={project.category} date={project.date} />
            );
          })}
        </div>  
      </section>
      </Fade>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default Home;