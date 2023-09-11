import React from "react";
import './style.css'
const Product=()=>{
return(
    <>
    <section id="product">
    <div className="product">
        <div>
    <h1>The TinyLife Wellness Model </h1>
<div>
   <p>Tinylife Wellness is a predictive model that helps organizations at the forefront
    of protecting pregnant women and children at risk of lead exposure. By considering variables
    such as <span>age of a house, proximity to a factory and water sources</span> ,the model  predicts the children
    and the women at more risk of exposure for proper allocation of resources.
</p>
</div>
<div className="about-buttons">
<button>Register</button>
</div>
    </div>
    <div className="tinylife_Image">
    <img src="images/dashboard.png" alt="web portal"/>
    </div>
    </div>

    </section>
    {/* PRODUCT */}
   
</>
)
}
export default Product