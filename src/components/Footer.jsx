import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import {
  SiMongodb
} from "react-icons/si";

import "./Footer.css";


function Footer() {


return (

<footer className="footer">


<div className="footer-container">


<h2>
Rakshitha HN
</h2>



<p className="footer-role">

MERN Stack Developer | MCA Graduate |
Full Stack Web Developer

</p>




<div className="tech-stack">

<span>
<FaReact /> React.js
</span>


<span>
<FaNodeJs /> Node.js
</span>


<span>
<SiMongodb /> MongoDB
</span>

</div>




<div className="footer-links">


<a href="#home">
Home
</a>


<a href="#about">
About
</a>


<a href="#skills">
Skills
</a>


<a href="#projects">
Projects
</a>


<a href="#contact">
Contact
</a>


</div>




<div className="footer-social">


<a
href="https://github.com/rakshu112003"
target="_blank"
rel="noreferrer"
>

<FaGithub />

</a>



<a
href="https://www.linkedin.com/in/rakshitha-hn-a14124327/"
target="_blank"
rel="noreferrer"
>

<FaLinkedin />

</a>


</div>





<p className="copyright">

© 2026 Rakshitha HN. All Rights Reserved.

</p>



<p className="made">

Designed & Developed ❤️ by Rakshitha HN

</p>



</div>


</footer>

);

}


export default Footer;
