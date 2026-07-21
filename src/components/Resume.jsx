import React from "react";
import "./Resume.css";
import { FaDownload, FaEye } from "react-icons/fa";


function Resume() {

  const resumeLink =
    "https://drive.google.com/file/d/1TlqP8uToT7QVasp_Vdvt2_c5Uu0yU_W5/view?usp=drivesdk";


  return (

    <section 
      id="resume" 
      className="resume"
      data-aos="flip-left"
    >

      <div className="resume-container">


        <h2 className="section-title">
          Resume
        </h2>



        <p className="resume-description">

          Download my latest resume to learn more about my
          education, technical skills, projects,
          internship experience and certifications.

        </p>




        <div className="resume-card">


          <h3>
            📄 Rakshitha HN Resume
          </h3>



          <p>
            MERN Stack Developer | MCA Graduate |
            Full Stack Web Developer
          </p>



          <p className="resume-update">
            Updated: July 2026
          </p>




          <div className="resume-buttons">


            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >

              <FaEye />
              Preview Resume

            </a>



            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >

              <FaDownload />
              Download Resume

            </a>



          </div>



        </div>


      </div>


    </section>

  );

}


export default Resume;

