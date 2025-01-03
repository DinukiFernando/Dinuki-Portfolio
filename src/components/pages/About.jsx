import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"


export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src="images/Dinuki.jpg" style={about[0].style} alt="Dinuki" />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <p>{val.desc2}</p>
                {/* <button>Download CV</button>
                <button className='primaryBtn'>Download CV</button> */}
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
