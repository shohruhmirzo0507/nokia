import React from 'react'
import "./Network.css"






function Network() {
  return (
    <div className="about__us">
        <div className="container about__container">
          <div className="about__wrapper">
         <div className="about__image__one"></div>  
            <div className="about__text__one">
              <h1>Network solutions for industry</h1>
              <h4>Transformative network solutions for enterprises and governments</h4>
              <button className='about__button'>Explore our industry solutions</button>
            </div>
          </div>
          <div className="about__wrapper">
            <div className="about__text__two order-2">
              <h3>Technology training</h3>
              <h4>Nokia's industry-recognized certification programs build your technical expertise and enhance your professional standing.</h4>
              <button className='about__botton'>Explore our training offers</button>
            </div>
            <div className="about__image__two order-1"></div>
          </div>
         
        </div>
    </div>
  )
}

export default Network