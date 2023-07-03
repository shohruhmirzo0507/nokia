import React from 'react'
import "./Standard.css"
import { FiArrowRight } from "react-icons/fi"

function Standard() {
  return (
    <div className='container'>
        <div className="standards">
        <div className="standard__img"></div>
        <div className="standard__text">
            <h1>Standards leadership <FiArrowRight/> </h1>
            <p>How Nokia convinced the 5G world that less is more</p>
        </div>
        </div>
    </div>
  )
}

export default Standard