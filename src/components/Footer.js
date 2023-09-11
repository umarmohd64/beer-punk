import React from 'react'
import "./Footer.css"
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
            <p> © Made by Umar | Jamia Millia Islamia</p>
            <div className="socialIcons">
                    <a href="https://github.com/umarmohd64">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a> 
           
                    <a href="https://www.linkedin.com/in/mohammadumar64/">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a> 

                    <a href="https://instagram.com/umaryaarrr?igshid=MzRlODBiNWFlZA==">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a> 

                    <a href="https://www.facebook.com/profile.php?id=100068907237290">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </a>
                </div>
    </footer>
  )
}

export default Footer