import Navbar from "../Navigation";
import Footer from "../footer";
import React from "react";



const Layout = ({ children }) => {
    return (
      <div>        
        <Navbar/> 
        <main>
          
            {children}
        </main>
       <Footer/> 
      </div>
    );
  };
  
  export default Layout;