import React from "react";
import './style.css'
// import Slideshow from "../../atoms/slideshow";

const Product=()=>{
return(
    <>
    {/* ABOUT */}
    <div className="about">
        <div>
    <h1>The TinyLife Wellness <br/>Model </h1>

<div>
    
   <p>Tinylife Wellness is a predictive model that helps organizations at the forefront 
    of protecting pregnant women and children at risk of lead exposure. By considering variables 
    such as age of a house, proximity to a factory and water sources,the model  predicts the children 
    and the women at more risk of exposure for proper allocation of resources.
</p>
</div>
<div className="about-buttons">
<button>Register</button>
   
</div>
    </div>

    <div className="tinylife_Image">
    <img src="dashboard image/tinylife.png" alt="web portal"/>
    </div>
    </div>
</>
)
}
export default Product