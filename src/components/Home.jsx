import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import "./Home.css";


function Home() {

  return (

    <section 
      id="home" 
      className="home" 
      data-aos="fade-up"
    >


      <div className="home-content">



        {/* Left Content */}

        <div className="home-text">


          <span className="badge">
            🚀 Open to Work
          </span>



          <h3>
            👋 Hello, I'm
          </h3>



          <h1>
            Rakshitha HN
          </h1>



          <TypeAnimation

            sequence={[

              "MERN Stack Developer",
              2000,

              "Full Stack Developer",
              2000,

              "React Developer",
              2000,

              "Python Developer",
              2000,

            ]}


            wrapper="h2"

            speed={50}

            repeat={Infinity}

          />




          <p className="tagline">

            Passionate MERN Stack Developer building modern,
            responsive and scalable web applications using
            React.js, Node.js, Express.js and MongoDB.

          </p>




          <p>

            I'm an MCA graduate skilled in React.js, Node.js,
            Express.js, MongoDB, JavaScript, Python and SQL.
            I enjoy solving real-world problems through clean
            code and continuously improving my technical skills.

          </p>





          {/* Buttons */}

          <div className="buttons">


            <a
              href="#projects"
              className="btn"
            >
              🚀 View Projects
            </a>




            <a
              href="#resume"
              className="btn btn-outline"
            >
              📄 Download Resume
            </a>




            <a
              href="mailto:rakshithahn123@gmail.com"
              className="btn"
            >
              📩 Hire Me
            </a>


          </div>





          {/* Social Icons */}


          <div className="social-icons">


            <a
              href="https://github.com/rakshu112003"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>





            <a

              href="https://www.linkedin.com/in/rakshitha-hn-a14124327/"

              target="_blank"

              rel="noreferrer"

              aria-label="LinkedIn"

            >

              <FaLinkedin />

            </a>





            <a

              href="mailto:rakshithahn123@gmail.com"

              aria-label="Email"

            >

              <FaEnvelope />

            </a>



          </div>







          {/* Info Cards */}


          <div className="home-info">


            <div>

              📍

              <span>
                Bengaluru, Karnataka, India
              </span>

            </div>





            <div>

              🎓

              <span>
                MCA Graduate
              </span>

            </div>





            <div>

              💼

              <span>
                Available for Full Stack Roles
              </span>

            </div>



          </div>




        </div>







        {/* Profile Image */}


        <div

          className="home-image"

          data-aos="zoom-in"

        >



          <div className="image-circle">


            <img

              src="/images/rakshitha.jpeg"

              alt="Rakshitha HN"

              className="profile-image"

            />


          </div>



        </div>




      </div>



    </section>


  );

}


export default Home;
