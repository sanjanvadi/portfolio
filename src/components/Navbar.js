import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return(
        <nav class="navbar">
            <h1 class="logo">LOGO</h1>
            <div class="links">
                <Link to="/" onClick={() => handleScroll('home')}>
                    Home
                </Link>
                <Link to="/about" onClick={() => handleScroll('about')}>
                    About
                </Link>
                <Link to="/contact" onClick={() => handleScroll('contact')}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;