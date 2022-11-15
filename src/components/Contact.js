import React from "react";
import "../styles/Contact.scss";
function Contact() {

  return (
    <section id="contact" className="contact" >
        <div className="contact_content">
            <div className="contact_left">
                <h2 className="contact_left_h2">Get in Touch</h2>
            </div>
            <article className="contact_right">
                <h3 className="contact_right_h3">Have a project in mind?</h3>
                <a className="contact_right_link" href="mailto:bapmorvan@gmail.com">bapmorvan@gmail.com</a>
                <p className="contact_right_p">N'hésitez pas à me contacter si vous avez des questions, si vous pensez que nous pourrions travailler ensemble ou si vous souhaitez simplement échanger.</p>
            </article>
            
            
        </div>
        
    </section>
  );
}

export default Contact;