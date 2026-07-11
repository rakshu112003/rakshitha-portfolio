import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <div className="contact-container">

        <h2 className="section-title">Contact Me</h2>

        <p className="contact-description">
          I'm currently looking for Full Stack Developer opportunities.
          Feel free to connect with me!
        </p>

        <div className="contact-card">

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:rakshithahn123@gmail.com">
              rakshithahn123@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <a href="tel:+917411272521">
              +91 7411272521
            </a>
          </div>

          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/rakshitha-hn-a14124327/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="icon" />
            <a
              href="https://github.com/rakshu112003"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Karnataka, India</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
