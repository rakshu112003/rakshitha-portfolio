import React from "react";
import "./Resume.css";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <section id="resume" className="resume" data-aos="flip-left">
      <div className="resume-container">

        <h2 className="section-title">Resume</h2>

        <p className="resume-description">
          Download my latest resume to learn more about my education,
          technical skills, projects, internship experience, and certifications.
        </p>

        <div className="resume-card">

          <h3>📄 Rakshitha HN Resume</h3>

          <p>
            MERN Stack Developer | MCA Graduate | Full Stack Web Developer
          </p>

      <a
  href="/resume/Rakshitha_HN_Resume.pdf"
  download
  className="btn"
>
  <FaDownload /> Download Resume
</a>
        </div>

      </div>
    </section>
  );
}

export default Resume;