import Navbar from "../Navigation";
import Footer from "../Footer";
import Home from "../home";
import TheTeam from "../team";
import React from "react";



const Layout = ({ children }) => {
    return (
      <div>        
        <Navbar/> 
        <main>
          <Home/>
          <TheTeam/>
          

        </main>
        <Footer/>  
      </div>
    );
  };
  
  export default Layout;