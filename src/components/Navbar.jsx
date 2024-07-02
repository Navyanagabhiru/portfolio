import logo from "../assets/NavLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    const linkedinUrl = "https://www.linkedin.com/in/navya-nagabhiru/";
    const githubUrl = "https://github.com/Navyanagabhiru?tab=repositories"; 
   return <nav className="mb-8 flex items-center justify-between py-2">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
    </div>
   </nav>;
 };
 export default Navbar;



 
 
 