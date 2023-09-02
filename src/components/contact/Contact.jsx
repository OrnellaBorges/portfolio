import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

//IMPORT Icons
/* import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";*/
import { MdOutlineEmail } from "react-icons/md";
//import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

emailjs.init("user_borges.ornella@gmail.com");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hf4ol5e",
        "template_6zvw26r",
        form.current,
        "jcehiMp3NjQVVKd4K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/*<article className="contact__option">
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
          </article> */}

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:borges.ornella@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
