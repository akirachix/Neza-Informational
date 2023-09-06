import React from "react";
import './style.css'
import Slideshow2 from "../../atoms/slideshow-home";
const Home=()=>{
return(
    <>
 <Slideshow2/>
 {/* what is it */}
 <div className="why">
    <h1>What is lead exposure and why does it matter?</h1>
    <p>Lead exposure refers to the ingestion, inhalation, or absorption of lead, a toxic heavy metal, into the human body. Lead is a highly hazardous substance that can have serious health consequences when it enters the body, particularly for children, pregnant women, and vulnerable populations. Here's why lead exposure matters:</p>
    <ul>
        <li>Health Impact: Lead harms the brain, causes learning disabilities, behavioral issues, and can affect fetal development during pregnancy.</li>
        <li>Lifetime Consequences: Effects are often irreversible, especially in children.</li>
        <li>Vulnerable Populations: Low-income communities are often disproportionately affected.</li>
        <li>Global Issue: It's a global concern requiring preventive measures like lead-safe housing and clean water.</li>
    </ul>
 </div>
</>
)
}
export default Home