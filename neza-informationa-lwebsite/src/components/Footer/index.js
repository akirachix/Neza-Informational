import React from "react";
import './style.css'
import { BsLinkedin} from "react-icons/bs";



const Footer=()=>{
return(
    <>
    <section id="footer">
    <footer className="footer">
            <ul className="footer-menu">
            <li>
                    <img src="/images/LOGO.png" alt="NEZA LOGO" />
                </li>
                <li className="who we are">
                    <a href="/">Who we are</a>
                    <p>About Us</p>
                    <p>Team</p>
                </li>
                <li className="contacts">
                    <a href="/">Contact Us</a>
                    <p>tinywellness@gmail.com</p>
                    <p>+25470756960</p>
                </li>
                <li className="connect">
                    <a href="/">Reach Out</a>
                    <p><BsLinkedin className="icons"/></p>
                </li>
            </ul>
      
</footer>
    </section>

    </>
)
}
export default Footer

