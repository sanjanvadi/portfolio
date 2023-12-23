import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faFile
  } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
import resume from '../images/Sanjan_Vadi_Resume.pdf'
import profile from '../images/profile.png'


const Navbar = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth',
        });
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Avatar
            alt="Sanjan Vadi"
            src={profile}
            sx={{ width: 56, height: 56 }}
        />
      <a href="https://www.linkedin.com/in/sanjanvadi/" aria-label="linkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} fontSize={'1.5em'}/></a>
      <a href="https://github.com/sanjanvadi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} fontSize={'1.5em'}/></a>
      <a href="https://www.instagram.com/sanjan_vadi/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} fontSize={'1.5em'}/></a>
      <a href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFile} fontSize={'1.5em'}/></a>
      </div>
      <div className="links">
        <Link to="/" onClick={() => handleScroll("home")}>
          Home
        </Link>
        <Link to="/skills" onClick={() => handleScroll("skills")}>
          Skills
        </Link>
        <Link to="/projects" onClick={() => handleScroll("projects")}>
          Projects
        </Link>
        <Link to="/about" onClick={() => handleScroll("about")}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
