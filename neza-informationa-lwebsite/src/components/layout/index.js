import Navbar from "../Navigation";
import Footer from "../footer";
import React from "react";
const Layout = ({ children }) => {
    return (
      <div>
       
        <header><Navbar/></header>
        <main>
            {/* Place other components inside the main tag */}
            {children}
        </main>
        <footer><Footer/></footer>
      </div>
    );
  };
  
  export default Layout;