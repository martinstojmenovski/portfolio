import slides from "./projectContent"
import SwiperJsWork from './SwiperJsWork'
import { useMediaQuery } from 'react-responsive'

function Project({ project }) {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:  768px)' })

  return (
    <section ref={project} id='PROJECT' className='PROJECT'>
      <h1 style={{ paddingTop: "80px", color:"orange", textAlign:"center" }}>EXPLORE PREVIOUS WORK</h1>

      {isDesktopOrLaptop &&

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "80%",
          margin:"auto",

        }}>{slides.map((slide, index) => (
          
          <div key={index} style={{
            width: "320px",
            height: "370px",
            border: "4px solid #393939",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-around",
            padding: "10px",
            margin:"20px"
              }}>
            <h5>{slide.name}</h5>
            <p>{slide.content}</p>
            <a href={slide.link} target="_blank"><span>MORE</span></a>
          </div>
        ))}

        </div>}
        {
          !isDesktopOrLaptop && <SwiperJsWork />
        }
        
        

    </section>
  );
}

export default Project;
