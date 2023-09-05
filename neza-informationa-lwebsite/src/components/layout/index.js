import Navbar from "../Navigation";
import Footer from "../footer";
import React from "react";


const Layout = ({ children }) => {
    return (
      <div>
       
        <Navbar/>
        <main>
            {/* Place the home, about, team components inside the main tag */}
            {children}
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default Layout;