import React from "react";
import './style.css'
import Slideshow from "../../atoms_for_slideshow/slideshow-home";
const Home=()=>{
return(
    <>
    <section id="home">
    <Slideshow/>
 {/* what is it */}

 <div className="why">
    <h1>What is lead exposure and why does it matter?</h1>
    <p>Lead exposure refers to the ingestion, inhalation, or absorption of lead, a toxic heavy metal, into the <br/> human body. Lead is a highly hazardous substance that can have serious health consequences when it <br/>enters the body, particularly for children, pregnant women, and vulnerable populations. Here's why lead <br/>exposure matters:</p>
    <ul id="list">
        <ul>
        <li id="z"> <img src="images/warning.png" alt="warning"/></li>
        <li>Health Impact</li>
        </ul>
        <ul>
        <li id="y"><img  src="images/globe.png" alt="warning"/></li>
        <li>Lifetime Consequences</li>
        </ul>
        <ul>
            <li id="z"><img id="4"src="images/people.png" alt="warning"/></li>
            <li>Lifetime Consequences</li>
        </ul>
        <ul>
        <li id="z"><img id="5" src="images/life.png" alt="warning"/></li>
        <li>Lifetime Consequences</li>
        </ul>
    </ul>
 </div>
    </section>

</>
)
}
export default Home









