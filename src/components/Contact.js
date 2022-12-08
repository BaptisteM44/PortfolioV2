import React, {useRef, useEffect } from 'react';
import "../styles/Contact.css";
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function Contact() {
  const contactEffect = useRef(null)

  useEffect(() => {
    
    gsap.from(".contact_left_h2",{
      y: -220,
    })
    gsap.to(".contact_left_h2", {
      y: 100,
      duration: 4,
      
      scrollTrigger: {
        ease: "power2.out",
        trigger: ".contact",
        scrub: true,
        start:"center bottom",
        end:"bottom bottom",
        delay:2
      },
    })
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.from(".contact_left_h2",{
        y: -220,
      })
      gsap.to(".contact_left_h2", {
        y:1,
        duration: 4,
        scrollTrigger: {
          ease: "power2.out",
          trigger: ".contact",
          scrub: true,
          start:"center bottom",
          end:"bottom bottom",
          delay:2
        },}) // <- normal selector text, automatically scoped to myRefOrElement
    
    },); // <- scope!!!
}, []);

  return (
    <section id="contact" className="contact" >
        <div className="contact_content">
            <div className="contact_left">
                <h2 ref={contactEffect} className="contact_left_h2">Get in</h2>
                <h2 ref={contactEffect} className="contact_left_h2">Touch</h2>
            </div>
            <article className="contact_right">
                <h3 className="contact_right_h3">Have a project in mind?</h3>
                <a className="contact_right_link firstHover" href="mailto:bapmorvan@gmail.com">bapmorvan@gmail.com</a>
                <p className="contact_right_p">Don't hesitate to contact me if you have any questions, if you think we could work together or if you just want to chat.</p>
            </article>
            
            
        </div>
        
    </section>
  );
}
export default Contact;