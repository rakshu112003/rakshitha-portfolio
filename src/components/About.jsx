import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaBullseye
} from "react-icons/fa";

import "./About.css";


function About() {

  const details = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      text: "MCA Graduate - Visvesvaraya Technological University"
    },

    {
      icon: <FaLaptopCode />,
      title: "Experience",
      text: "Frontend Developer Intern at Ideonix Solutions"
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      text: "Bengaluru, Karnataka, India"
    },

    {
      icon: <FaBullseye />,
      title: "Career Goal",
      text: "To become a skilled Full Stack Software Developer"
    }
  ];


  return (

    <section 
      id="about" 
      className="about"
      data-aos="fade-right"
    >

      <div className="about-container">


        <h2 className="section-title">
          About Me
        </h2>


        <p className="about-intro">

          Hello! I'm <strong>Rakshitha HN</strong>,
          an MCA graduate and passionate MERN Stack Developer
          based in Bengaluru, Karnataka, India.

          I enjoy building modern, responsive and
          user-friendly web applications using
          the latest web technologies.

        </p>



        <p className="about-intro">

          My technical expertise includes{" "}
          
          <strong>
            React.js, Node.js, Express.js, MongoDB,
            JavaScript, Python, SQL, HTML5 and CSS3.
          </strong>

          {" "}
          I love solving real-world problems through clean,
          maintainable code and continuously improving my
          software development skills.

        </p>



        <div className="about-details">

          {
            details.map((item,index)=>(

              <div 
                className="detail-card"
                key={index}
              >

                <div className="detail-icon">
                  {item.icon}
                </div>


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>


              </div>

            ))
          }

        </div>


      </div>


    </section>

  );
}


export default About;
