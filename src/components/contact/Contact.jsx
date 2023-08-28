import React from "react";
import "./contact.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
/* import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs"; */

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email & phone</h4>
            <small href="mailto:borges.ornella@gmail.com">
              borges.ornella@gmail.com
            </small>{" "}
            <br />
            <small>06.46.47.86.08</small>
            <div className="contact__socials">
              <a href="https://linkedin.com/in/ornellaborges" target="_blank">
                <BsLinkedin />
              </a>
              <a href="https://github.com/OrnellaBorges" target="_blank">
                {" "}
                <BsGithub />
              </a>
            </div>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:borges.ornella@gmail.com" target="_blank">
              Send a message
            </a>
          </article> */}
          {/* <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+646478608</h5>
            <a
              href="https://api.whatsapp.comm/send?phone+646478608"
              target="_blank"
            >
              Send a message
            </a>
          </article> */}
        </div>
        {/* <form action="">
                <input type='text' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send message</button>
            </form> */}
      </div>
    </section>
  );
};

export default Contact;
