import React from "react";
import {
  FaGraduationCap,
  FaSchool
} from "react-icons/fa";

import "./Education.css";


function Education() {


const education = [

{
icon:<FaGraduationCap/>,
title:"Master of Computer Applications (MCA)",
college:"Visvesvaraya Technological University (VTU)",
year:"2023 - 2024",
score:"CGPA: 8.0"
},


{
icon:<FaGraduationCap/>,
title:"Bachelor of Computer Applications (BCA)",
college:"St. Joseph's College For Women, Mysuru",
year:"2019 - 2022",
score:"CGPA: 7.5"
},


{
icon:<FaSchool/>,
title:"Pre-University (PUC)",
college:"St. Anne's PU College",
year:"2017 - 2019",
score:""
},


{
icon:<FaSchool/>,
title:"SSLC",
college:"Vivekananda High School",
year:"2017",
score:""
}

];



return (

<section 
id="education"
className="education"
data-aos="fade-up"
>


<div className="education-container">


<h2 className="section-title">
Education
</h2>


<p className="education-description">

My academic journey has provided a strong foundation
in computer science, software development and
problem-solving.

</p>




<div className="timeline">


{
education.map((item,index)=>(


<div 
className="timeline-item"
key={index}
>


<div className="timeline-icon">

{item.icon}

</div>



<div className="education-card">


<h3>
{item.title}
</h3>


<h4>
{item.college}
</h4>


<span className="year">
{item.year}
</span>



{
item.score &&

<p>
{item.score}
</p>

}



</div>



</div>


))
}



</div>


</div>


</section>

);


}


export default Education;
