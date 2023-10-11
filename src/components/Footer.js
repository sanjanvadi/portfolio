import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'  

const Footer = ()=>{

    return(
        <>
        <nav class="navbar2">
                <FontAwesomeIcon
                icon={faLinkedin}
                color="#bdc6be"
                fontSize={'30px'}
                className="anchor-icon"
                />

                <FontAwesomeIcon
                icon={faGithub}
                color="#bdc6be"
                fontSize={'30px'}
                className="anchor-icon"
                />

                <FontAwesomeIcon
                icon={faInstagram}
                color="#bdc6be"
                fontSize={'30px'}
                className="anchor-icon"
                />
                
        </nav>
        <div class="navbar2"><p>@copyright template design</p></div>
        </>
    )
}

export default Footer;