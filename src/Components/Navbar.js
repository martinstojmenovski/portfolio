import { useRef, useState } from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

function Navbar() {

    //useRef declaration for page navigation
    const about = useRef(null)
    const project = useRef(null)
    const skills = useRef(null)
    const home = useRef(null)

    //useState to blur navbar
    const [blur, setBlur] = useState(false)

    const [hamburger, setHamburger] = useState(true)



    //Page navigation function
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const blurNavbar = () => {
        if(window.scrollY >= 80){
            setBlur(true)
        }else {
            setBlur(false)
        }
    }
    window.addEventListener('scroll', blurNavbar)

    const showHamburger = () => setHamburger(!hamburger)


    return (
        <div>
            <nav className={blur ? 'navbar active' : 'navbar'} >
                <div>
                    <h3 className='brand-name' onClick={() => scrollToSection(home)} >Martin Stojmenovski</h3>
                </div>
                <div>
                    {hamburger && <div className='hamburger'>
                    <FaIcons.FaBars onClick={showHamburger}/>
                    </div>}
                    {!hamburger && <div className='sidebar'>
                    <AiIcons.AiOutlineClose onClick={showHamburger} />
                    <ul className='navigation-list'>
                        <li onClick={() => scrollToSection(about)} >About</li>
                        <li onClick={() => scrollToSection(project)}>Project</li>
                        <li onClick={() => scrollToSection(skills)}>Skills</li>
                    </ul>
                    
                    </div> }
                    
                </div>
            </nav>
            <Home home={home} />
            <About about={about} />
            <Project project={project} />
            <Skills skills={skills} />
        </div>
    );
}

export default Navbar;
