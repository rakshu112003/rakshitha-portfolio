import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiVite
} from "react-icons/si";

import "./Skills.css";


function Skills(){

const skills = [

{
icon:<FaHtml5 />,
name:"HTML5"
},

{
icon:<FaCss3Alt />,
name:"CSS3"
},

{
icon:<FaJs />,
name:"JavaScript"
},

{
icon:<SiTypescript />,
name:"TypeScript"
},

{
icon:<FaReact />,
name:"React.js"
},

{
icon:<FaNodeJs />,
name:"Node.js"
},

{
icon:<SiExpress />,
name:"Express.js"
},

{
icon:<SiMongodb />,
name:"MongoDB"
},

{
icon:<SiTailwindcss />,
name:"Tailwind CSS"
},

{
icon:<SiVite />,
name:"Vite"
},

{
icon:<FaPython />,
name:"Python"
},

{
icon:<SiMysql />,
name:"SQL"
},

{
icon:<SiPostman />,
name:"Postman"
},

{
icon:<FaGitAlt />,
name:"Git"
},

{
icon:<FaGithub />,
name:"GitHub"
},

{
icon:"🔗",
name:"REST APIs"
},

{
icon:"🔐",
name:"JWT Authentication"
}

];


return(

<section 
id="skills"
className="skills"
data-aos="fade-up"
>

<div className="skills-container">


<h2 className="section-title">
Technical Skills
</h2>


<p className="skills-description">

Here are the technologies and tools I use to build
modern, responsive and scalable full-stack web applications.

</p>



<div className="skills-grid">

{
skills.map((skill,index)=>(

<div 
className="skill-card"
key={index}
>

<div className="skill-icon">
{skill.icon}
</div>


<h3>
{skill.name}
</h3>


</div>

))
}


</div>


</div>

</section>

);

}


export default Skills;
