import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "SQL",
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-left">
      <div className="skills-container">

        <h2 className="section-title">Technical Skills</h2>

        <p className="skills-description">
          Here are the technologies and tools I use to build modern,
          responsive, and scalable web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
