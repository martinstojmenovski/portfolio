import { useEffect, useRef, useState } from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

function Navbar() {


    //useRef declaration for page navigation
    const about = useRef(null)
    const project = useRef(null)
    const skills = useRef(null)
    const home = useRef(null)
    // console.log(home.current)
    // const navigate = [home, about, project, skills]
    //useState to blur navbar
    const [blur, setBlur] = useState(false)

    //useState progressBar
    const [progressBar, setProgresBar] = useState(0)

    // useState to dropdown menu
    const [hamburger, setHamburger] = useState(true)


    // const theEmployees = ['HOME', 'ABOUT', 'PROJECT', 'CONTACT']
    
    
    // const clas = theEmployees.map((employee, index) => {
        
    //     return <li 
    //     key={index}    
    //     className={ classNames(blur ? 'li-768 active' : 'li-768', employee ) }
    //     onClick={() => scrollToSection(navigate[index])}>{employee}</li>
    // })

    // Function to set a border to the selected page
    const sections = document.querySelectorAll('section')
    const navLi = document.querySelectorAll('nav ul li')
    const makeBorderbox = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('class')
            }
        })
        navLi.forEach(li => {
            li.classList.remove('border')
            if(li.classList.contains(current)){
                li.classList.add('border')
            }
        })
    }
    window.addEventListener('scroll', makeBorderbox)



    // ProgresBar function
    const scrollProgress = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        // console.log(scrolled)
        setProgresBar(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollProgress)

        return () => window.removeEventListener('scroll', scrollProgress)
    }, [])


    //Page navigation function - overflow hidden to stop page from scrolling
    const scrollToSection = (elementRef) => {
        // console.log(elementRef.current.offsetTop)
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })


        setHamburger(!hamburger)
        document.body.style.overflow = ""
    }

    // blur navigation menu when scroll
    const blurNavbar = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 1) {
            setBlur(true)
        } else {
            setBlur(false)
        }
    }
    window.addEventListener('scroll', blurNavbar)


    // dropdown menu function - overflow hidden to stop page from scrolling
    const showHamburger = (index) => {
        if (hamburger) {
            document.body.style.overflow = "hidden"
            setHamburger(!hamburger)
        } else {
            setHamburger(!hamburger)
            document.body.style.overflow = ""
        }
    }
    const closeHamburger = () => {
        if (!hamburger) {
            setHamburger(!hamburger)
            document.body.style.overflow = ""
        }
    }

    const ulHolder = ( <ul>
        <li className={ classNames( blur ? 'li-768 active' : 'li-768', 'HOME border' ) } onClick={() => scrollToSection(home)} >HOME</li>
        <li className={ classNames( blur ? 'li-768 active' : 'li-768', 'ABOUT' ) } onClick={() => scrollToSection(about)} >ABOUT</li>
        <li className={ classNames( blur ? 'li-768 active' : 'li-768', 'PROJECT' ) } onClick={() => scrollToSection(project)} >PROJECTS</li>
        <li className={ classNames( blur ? 'li-768 active' : 'li-768', 'CONTACT' ) } onClick={() => scrollToSection(skills)} >CONTACT</li>
    </ul>)



    return (
        <div>

            <nav className={blur ? 'navbar active' : 'navbar'} >
                <div id='min-768' className={blur ? 'min-768 active' : 'min-768'}>
                   {ulHolder}
                </div>
                <div className={hamburger ? 'dropmenu' : 'dropmenu active'} >

                    <div className='progress-bar' style={{ width: `${progressBar}%` }}></div>

                    <div className='logo' onClick={closeHamburger}>
                        <h3 className={blur ? 'brand active' : 'brand'} >Martin Stojmenovski</h3>
                    </div>

                    <div className={hamburger ? "hamburger" : "hamburger active"}  >
                        <div className={blur ? 'bars active' : 'bars'} onClick={showHamburger}>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                        </div>
                        <div className={hamburger ? "sidebar" : "sidebar active"} >
                           {ulHolder}
                        </div>

                    </div>
                </div>
            </nav>
            <Home home={home} />
            <About about={about} />
            <div className='project'><Project project={project} /></div>
            <Skills skills={skills} />
        </div>
    );
}

export default Navbar;