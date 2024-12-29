import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          // <>
          //   <i data-aos='zoom-in'>{item.icon}</i>
          // </>
          // <div style={{ display:"flex", alignContent:"center"}}>
          //   <h3 data-aos='zoom-out-left'>{item.title}</h3>
          //   <a href={item.link} > - Click</a>

          // </div>
          <button className='primaryBtn' data-aos='zoom-out-down'>
          <a href={item.link} >{item.title}</a>
        </button>
          
        ))}
        <p data-aos='zoom-in'>All Right Resceved 2018</p>
      </footer>
    </>
  )
}

export default Footer
