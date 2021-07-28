import React from 'react';
// import React, {useState} from "react";
import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from 'react-icons/gi';
import './styles.css';


function Navigation() {

  // const [navbarOpen, setNavbarOpen] = useState(false);
  // const handleToggle = () => {
  //   setNavbarOpen(prev => !prev)
  // }
  
  // const hamNavClick = () => {
  //   setNavbarOpen(!navbarOpen)
  //   // console.log('mobilehamnavclick');
  // }

    return (
<div>
  <div>
      <div><Link to="./"></Link></div>
        <nav>
          <ul className="navLink">
            <li className="linkItems"><Link to="./about">About</Link></li>
            <li className="linkItems"><Link to="./graphicdesign">Graphics</Link></li>
            <li className="linkItems"><Link to="./webdev">WebDev</Link></li>
            <li className="linkItems"><Link to="./photography">Photography</Link></li>
          </ul>
        </nav>
  </div>
            {/* <div className="hamburger"><GiHamburgerMenu onClick={hamNavClick}/>
              <div className="mobile-nav" style={navbarOpen ? {display:"flex"} : {display:"none"}}>
                <ul className="mobile-links">
                  <li><Link to="./about">About</Link></li>
                  <li><Link to="./graphicdesign">GD</Link></li>
                </ul>
              </div>
            </div> */}
</div>
  
    );
}



export default Navigation;