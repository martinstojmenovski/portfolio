
import { transition } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery, } from '@chakra-ui/react'


function DropdownMenu({ scrollToSection, about, skills, project,  }) {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

    const showListStyle = {
        position: "absolute",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        right: "0",
        top: "0",
        height: "100vh",
        width: "600%",
        backgroundColor: "black",
        // padding: " 155px",
        boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.8)",
        transition: "opacity 150ms ease-in-out, transform 150ms ease-in-out"

    }

    // Function to set a border to the selected page
    const spans = document.querySelectorAll('nav button div span')
    const makeBorderbox = () => {
        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('nav li')
        
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop
            if (window.scrollY + 20 >= sectionTop) {
                current = section.getAttribute('class')
            }
            if (section.classList.contains(current)) {
                
                if (current === "PROJECT" || current === "CONTACT") {
                    document.getElementsByClassName('DASHBOARD')[0].style.color = "black"
                    spans.forEach(span => span.style.backgroundColor = "black")
                       
                }else{
                    document.getElementsByClassName('DASHBOARD')[0].style.color = 'white'  
                    spans.forEach(span => span.style.backgroundColor = "orange")
                }
            }
        })
        navLi.forEach(li => {
            li.style.borderBottom = "2px solid transparent"
            if (li.classList.contains(current)) {
                li.style.borderBottom = "2px solid"
            }
        })
    }
    window.addEventListener('scroll', makeBorderbox)

    function closeHamburger() {
        if (window.scrollY > 50) {
            setNavbarOpen(false)
        }
    }
    window.addEventListener('scroll', closeHamburger)

    // spans.forEach(span => span.style.backgroundColor = "white")
    
    return (
        <div className='hamburgerButton' style={{
            position: "absolute",
            top: "0", right: "0",
            transform: !isLargerThan480 ? "translatex(0)" : "translatex(60px)", 
            opacity: !isLargerThan480 ? "1" : "0",
             transition: "opacity 200ms linear, transform 200ms linear",
        }} >
            <button
                onClick={() => {
                    setNavbarOpen((prev) => !prev)
                    if(navbarOpen === false){
                        spans.forEach(span => span.style.backgroundColor = "orange")
                    }else{
                        if(document.getElementsByClassName('DASHBOARD')[0].style.color === "black"){
                            spans.forEach(span => span.style.backgroundColor = "black")
                        } 
                    }
                }}
            >

                <div style={{
                    position: "relative", top: "10px", right: "10px", zIndex: "1", padding: "20px",
                }}>
                    <span style={{ ...barStyle,  transform: navbarOpen ? "translateY(4px) rotate(45deg)" : "translateY(0) rotate(0)" }} ></span>
                    <span style={{ ...barStyle,  transform: navbarOpen ? "translateY(-4px) rotate(-45deg)" : "translateY(0) rotate(0)" }} ></span>
                </div>
            </button>
            <ul style={{
                ...showListStyle,
                 opacity: navbarOpen ? "1" : "0",
                transform: navbarOpen ? "translateX(0)" : "translateX(350px)",
            }}>
                <li style={{...styleList, paddingTop:"30px"}} className={'PROJECT'} onClick={() => { scrollToSection(project); setNavbarOpen((prev) => !prev) }} >Work</li>
                <li style={{...styleList, paddingTop:"30px"}} className={'ABOUT'} onClick={() => { scrollToSection(about); setNavbarOpen((prev) => !prev) }} >About</li>
                <li style={{...styleList, paddingTop:"30px"}} className={'CONTACT'} onClick={() => { scrollToSection(skills); setNavbarOpen((prev) => !prev) }} >Contact</li>
            </ul>
        </div>

    );
}

export default DropdownMenu;
const styleList = {
    listStyle: "none",
    cursor: "pointer",
    color: "#ececec",
    fontWeight: "500",
    padding: "10px",
}
const barStyle = {
    display: "block",
    width: "45px",
    height: "2.5px",
    margin: "7px auto",
    backgroundColor: "orange",
    transition: "transform 150ms ease-in-out"
}
export { styleList, barStyle, }
