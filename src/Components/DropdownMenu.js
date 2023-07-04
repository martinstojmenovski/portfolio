
import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'  

function DropdownMenu({ scrollToSection, about, skills, project }) {
    const [navbarOpen, setNavbarOpen] = useState(false);




    
  
const fadeInLeft =
        keyframes`
        0% {
            opacity: 0;
            transform: translateX(30px);
            
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
    `
    const AnimatedHamburger = styled.div`
    animation: ${fadeInLeft} 550ms linear
    ` ;
    const hamburger = (
        <AnimatedHamburger style={{zIndex:"66"}}>
            <span style={barStyle}></span>
            <span style={barStyle}></span>
        </AnimatedHamburger>
    )
    const x = (
        <div>
            <span style={{ ...barStyle, transform: "translateY(4px) rotate(45deg)" }}></span>
            <span style={{ ...barStyle, transform: "translateY(-4px) rotate(-45deg)" }}></span>
        </div>
    )

    const showHamburgerStyle = {
        position: "absolute",
        right: "0",
        top: "70px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: " 20px",
        boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.8)",
        transition: "opacity 150ms ease-in-out, transform 150ms ease-in-out"

    }
    
       
    return (
        <div>
            <button
                onClick={() => setNavbarOpen((prev) => !prev)}
            >
                {navbarOpen ? x : hamburger}
            </button>
            <ul style={{ ...showHamburgerStyle, transform: navbarOpen ? "translateY(0)" : "translateX(300px)", opacity: navbarOpen ? "1" : "0" }} >
                <li style={styleList} className={'PROJECT'} onClick={() => { scrollToSection(project); setNavbarOpen((prev) => !prev) }} >Work</li>
                <li style={styleList} className={'ABOUT'} onClick={() => { scrollToSection(about); setNavbarOpen((prev) => !prev) }} >About</li>
                <li style={styleList} className={'CONTACT'} onClick={() => { scrollToSection(skills); setNavbarOpen((prev) => !prev) }} >Contact</li>
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
    width: "35px",
    height: "3px",
    margin: "5px auto",
    backgroundColor: "#ececec",
    transition: "transform 150ms ease-in-out"
}
export { styleList, barStyle }