import {FaFacebookF,FaYoutube,FaLinkedin,FaTwitter} from "react-icons/fa"
import {RiInstagramFill,RiTwitterFill} from 'react-icons/ri'
import { Link } from "react-router-dom";
const Footer = () => {
    
    return(
        <footer className="footer">
            <div>
                <Link to = "https://www.linkedin.com/in/shreshtha-gupta-013024242/" target ="_blank"><FaLinkedin/></Link>
                <Link to = {""} target ="_blank"><FaTwitter/></Link> 
                <Link to = {""} target ="_blank"><RiInstagramFill/></Link>
            </div>
        </footer>
    )
}

export default  Footer;