import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="projects-container">

        <h2 className="section-title">My Projects</h2>

        <p className="projects-description">
          Here are some of the full-stack web applications I have developed
          using modern technologies such as React.js, Node.js, Express.js,
          MongoDB, and JavaScript.
        </p>

        <div className="projects-grid">

          {/* Job Portal */}
          <div className="project-card">

            <img
              src="/images/job-portal.png"
              alt="Job Portal"
              className="project-image"
            />

            <h3>💼 Job Portal Application</h3>

            <p>
              A MERN Stack job portal where users can search and apply for
              jobs while recruiters can manage job postings securely.
            </p>

            <h4>Technologies</h4>

            <p>
              React.js • Node.js • Express.js • MongoDB • JWT
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/rakshu112003/job-portal-application"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>

              <a
                href="https://job-portal-application-hnk8-phi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Live Demo
              </a>

            </div>

          </div>

          {/* Personal Expenses Tracker */}

          <div className="project-card">

            <img
              src="/images/expenses-tracker.png"
              alt="Personal Expenses Tracker"
              className="project-image"
            />

            <h3>💰 Personal Expenses Tracker</h3>

            <p>
              A MERN Stack application to manage daily income and expenses
              with authentication, transaction history, and financial reports.
            </p>

            <h4>Technologies</h4>

            <p>
              React.js • Node.js • Express.js • MongoDB
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/rakshu112003/personal-expenses-tracker-app"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>

              <a
                href="https://personal-expenses-tracker-app-q6tg.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;