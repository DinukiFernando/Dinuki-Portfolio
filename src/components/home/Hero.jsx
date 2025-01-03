import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`, `${val.design1}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='primaryBtn' data-aos='fade-up-right'>
            <a
              href="/Dinuki Fernando.pdf" // Link to your CV
              download="Dinuki Fernando.pdf" // Custom filename for download
            >
              Download CV
            </a>
            </button>
            
          </div>
        ))}
      </section>
    </>
  )
}
