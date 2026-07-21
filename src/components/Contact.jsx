import React from "react";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";


function Contact() {


const contactDetails = [

{
icon:<FaEnvelope />,
title:"Email",
value:"rakshithahn123@gmail.com",
link:"mailto:rakshithahn123@gmail.com"
},


{
icon:<FaPhone />,
title:"Phone",
value:"+91 7411272521",
link:"tel:+917411272521"
},


{
icon:<FaLinkedin />,
title:"LinkedIn",
value:"LinkedIn Profile",
link:"https://www.linkedin.com/in/rakshitha-hn-a14124327/"
},


{
icon:<FaGithub />,
title:"GitHub",
value:"GitHub Profile",
link:"https://github.com/rakshu112003"
},


{
icon:<FaMapMarkerAlt />,
title:"Location",
value:"Bengaluru, Karnataka, India",
link:null
}

];



return (

<section 
id="contact"
className="contact"
data-aos="fade-up"
>


<div className="contact-container">


<h2 className="section-title">
Contact Me
</h2>



<p className="contact-description">

I'm currently looking for Full Stack Developer
opportunities. Feel free to connect with me
for collaboration and career opportunities.

</p>




<div className="contact-card">


{
contactDetails.map((item,index)=>(


<div 
className="contact-item"
key={index}
>


<div className="contact-icon">

{item.icon}

</div>



<div className="contact-content">

<h3>
{item.title}
</h3>


{
item.link ?

<a
href={item.link}
target={item.title === "Email" || item.title === "Phone" ? "_self" : "_blank"}
rel="noreferrer"
>

{item.value}

</a>

:

<span>
{item.value}
</span>

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


export default Contact;
