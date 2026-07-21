import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import "./Projects.css";

function Projects() {

  const projects = [

    {
      image: "/images/job-portal.png",

      title: "💼 Job Portal Application",

      description:
        "A MERN Stack job portal where users can search and apply for jobs while recruiters can manage job postings securely.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT"
      ],

      features: [
        "User Authentication",
        "Job Search & Apply",
        "Recruiter Dashboard",
        "REST API Integration"
      ],

      github:
        "https://github.com/rakshu112003/job-portal-application",

      demo:
        "https://job-portal-application-hnk8-phi.vercel.app/"
    },

    {
      image: "/images/expenses-tracker.png",

      title: "💰 Personal Expenses Tracker",

      description:
        "A MERN Stack application to manage daily income and expenses with authentication, transaction history and financial reports.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],

      features: [
        "Expense Management",
        "Income Tracking",
        "Authentication",
        "Financial Reports"
      ],

      github:
        "https://github.com/rakshu112003/personal-expenses-tracker-app",

      demo:
        "https://personal-expenses-tracker-app-q6tg.vercel.app/"
    },

    {
      image: "/images/ai-shopper.png",

      title: "🛍️ AI Shopper Intent Analyzer",

      description:
        "An AI-powered ecommerce personalization engine that analyzes customer behavior events and predicts shopper intent using LLM technology.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini AI"
      ],

      features: [
        "Customer Event Analysis",
        "Shopper Intent Classification",
        "Confidence Score Generation",
        "Personalized Recommendations"
      ],

      github:
        "https://github.com/rakshu112003/AI-Shopper-Intent-Analyzer",

      demo:
        "https://ai-shopper-intent-analyzer-j5ds.vercel.app/"
    }

  ];

  return (

    <section
      id="projects"
      className="projects"
      data-aos="fade-up"
    >

      <div className="projects-container">

        <h2 className="section-title">
          My Projects
        </h2>

        <p className="projects-description">
          Here are some of the full-stack applications I have built using React.js,
          Node.js, Express.js, MongoDB, AI and modern web technologies.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <h4>Technologies</h4>

              <div className="tech-list">
                {project.tech.map((item, i) => (
                  <span key={i}>
                    {item}
                  </span>
                ))}
              </div>

              <h4>Features</h4>

              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;
