import React from "react";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education" data-aos="fade-up">
      <div className="education-container">

        <h2 className="section-title">Education</h2>

        <p className="education-description">
          My academic journey has provided a strong foundation in computer
          science, software development, and problem-solving.
        </p>

        <div className="education-card">

          <div className="education-item">
            <h3>🎓 Master of Computer Applications (MCA)</h3>
            <h4>Visvesvaraya Technological University (VTU)</h4>
            <p>2023 – 2024</p>
            <p>CGPA: 8.0</p>
          </div>

          <div className="education-item">
            <h3>🎓 Bachelor of Computer Applications (BCA)</h3>
            <h4>St. Joseph's College For Women, Mysuru</h4>
            <p>2019 – 2022</p>
            <p>CGPA: 7.5</p>
          </div>

          <div className="education-item">
            <h3>🏫 Pre-University (PUC)</h3>
            <h4>St. Anne's PU College</h4>
            <p>2017 – 2019</p>
          </div>

          <div className="education-item">
            <h3>🏫 SSLC</h3>
            <h4>Vivekananda High School</h4>
            <p>2017</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
