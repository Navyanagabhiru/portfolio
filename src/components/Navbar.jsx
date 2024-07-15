import logo from "../assets/NavLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    const linkedinUrl = "https://www.linkedin.com/in/navya-nagabhiru/";
    const githubUrl = "https://github.com/Navyanagabhiru?tab=repositories";
    const scrollToSection = (sectionId) => {
        var section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = document.querySelector('nav').offsetHeight; // Get navbar height
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // Adjusted scroll position with additional offset
            window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
            })
        } else {
            console.warn(`Section with id '${sectionId}' not found.`);
        }
    };
   return <nav className="mb-5 flex items-center justify-between py-2 fixed top-0 left-0 right-0  bg-gray-900 z-50">
    <div className="flex items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
    <button className="mb-2 md:mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200" onClick={() => scrollToSection('Home')}>Home</button>
    <button className="mb-2 md:mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200" onClick={() => scrollToSection('About')}>About</button>
        <button className="mb-2 md:mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200" onClick={() => scrollToSection('Technologies')}>Technologies</button>
        <button className="mb-2 md:mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200" onClick={() => scrollToSection('Experience')}>Experience</button>
        <button className="mb-2 md:mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200" onClick={() => scrollToSection('Projects')}>Projects</button>
        <button className="mb-2 md:mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200" onClick={() => scrollToSection('Contact')}>Contact</button>
    </div>
    <div className="flex mt-4 md:mt-0">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="mr-4 mx-2 w-5 text-2xl">
            <FaLinkedin />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="mx-2 w-10 text-2xl">
            <FaGithub />
        </a>
    </div>
   </nav>;
 };
 export default Navbar;



 
 
 