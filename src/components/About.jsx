import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <div className="about-container">

        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          Hello! I'm <strong>Rakshitha HN</strong>, an MCA graduate and
          passionate MERN Stack Developer from Karnataka, India.
          I enjoy building modern, responsive, and user-friendly web
          applications using the latest web technologies.
        </p>

        <p className="about-text">
          My technical expertise includes React.js, Node.js,
          Express.js, MongoDB, JavaScript, Python, SQL, HTML, and CSS.
          I love solving real-world problems through clean and efficient
          code while continuously improving my skills.
        </p>

        <div className="about-details">

          <div className="detail-card">
            <h3>🎓 Education</h3>
            <p>MCA - Visvesvaraya Technological University</p>
          </div>

          <div className="detail-card">
            <h3>💼 Experience</h3>
            <p>Frontend Development Intern at Ideonix Solutions</p>
          </div>

          <div className="detail-card">
            <h3>📍 Location</h3>
            <p>Karnataka, India</p>
          </div>

          <div className="detail-card">
            <h3>🎯 Goal</h3>
            <p>To become a skilled Full Stack Software Developer.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
