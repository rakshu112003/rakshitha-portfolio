import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home" data-aos="fade-up">
      <div className="home-content">

        <div className="home-text">

          <span className="badge">🚀 Open to Work</span>

          <h3>Hello, I'm</h3>

          <h1>Rakshitha HN</h1>

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
            Building modern, responsive and scalable web applications.
          </p>

          <p>
            I'm a passionate MERN Stack Developer and MCA graduate dedicated
            to building modern, responsive, and scalable web applications.
            Skilled in React.js, Node.js, Express.js, MongoDB, JavaScript,
            Python, and SQL, I enjoy solving real-world problems through
            clean code and continuously expanding my technical expertise.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              🚀 View Projects
            </a>

            <a href="#resume" className="btn btn-outline">
              📄 Resume
            </a>

            <a href="#contact" className="btn">
              📩 Contact Me
            </a>
          </div>

          <div className="home-info">
            <span>📍 Karnataka, India</span>
            <span>🎓 MCA Graduate</span>
            <span>💼 Available for Full Stack Developer Roles</span>
          </div>

        </div>

        <div className="home-image" data-aos="zoom-in">
          <img
            src="/images/rakshitha.jpeg"
            alt="Rakshitha HN"
            className="profile-image"
            loading="eager"
            onError={(e) => {
              console.error("Image not found:", e.target.src);
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
