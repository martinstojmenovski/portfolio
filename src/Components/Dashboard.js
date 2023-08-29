import Background from '../Components/images/pexels-burst-373965.jpg'
import BackgroundMobile from '../Components/images/pexels-burst-mobile.jpg'
import { useMediaQuery } from 'react-responsive'
import TheCircle from "./TheCircle";
import "./theCircle.css"

export default function Dashboard({ project, dashboard, scrollToSection, sectionOpacity }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })


    const background = {
        position: "relative",
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.4)), url(${Background})`,
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
        WebkitBackgroundPosition: "center",

        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",

        backgroundAttachment: "fixed",
        WebkitBackgroundAttachment: "fixed ",
    }
    const backgroundMobile = {

        height: "100vh",
        width: "100vw",
        background: `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.4)), url(${BackgroundMobile})`,
        // background:"#1e1e1e",
        opacity: sectionOpacity,
        backgroundRepeat: "no-repeat",
        position: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",

    }
    const styleArrow = {
        display: "block",
        width: "60px",
        height: "4px",
        backgroundColor: "#FB8122",
        position: "absolute",
        right: "50%",
    }

    return (

        <section
            style={{
                height: "100dvh",
                overflow: "hidden"
            }}
            ref={dashboard} id='DASHBOARD' className='DASHBOARD'>

            <TheCircle />
            <div style={{
                ...backgroundMobile,
            }}>

            </div>

            <div
                style={{
                    padding: "170px 20px 20px",
 

                }}
            >
                <h2 style={{ fontSize: "2.5em", }}> Hi,</h2>

                <h4 style={{
                    fontSize: "2.3rem",
                    marginLeft: "25px",


                }}

                >
                    I create unique digital experiences.
                </h4>
            </div>
            <div style={{
                cursor: "pointer",
                position: "absolute",
                top: "70dvh",
                padding: "45px",
                transform: " translatex(50%)",
                right: "50%",
                overflow: "hidden"

            }} onClick={() => scrollToSection(project)}>
                <span style={{
                    ...styleArrow, transform: " translatex(50%)  translatex(-20px) rotate(-45deg)"
                }}></span>
                <span style={{
                    display: "block",
                    ...styleArrow,
                    transform: " translatex(50%)  translatex(20px) rotate(45deg)"
                }}> </span>
                <span style={{
                    ...styleArrow,
                    transform: " translatex(50%) translatex(-20px) rotate(-45deg)",
                    bottom: "20px"
                }}></span>
                <span style={{
                    display: "block",
                    ...styleArrow,
                    transform: " translatex(50%)  translatex(20px) rotate(45deg)",
                    bottom: "20px"
                }}> </span>

            </div>

        </section>



    )
}