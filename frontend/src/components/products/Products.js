import React from 'react'
import "./Products.css"
import { PRODUCTS } from "../../static"
import { FiArrowRight } from "react-icons/fi"

function Products() {
  return (
    <div className='container'>
        <div className="products">
            {
                PRODUCTS?.map((item, inx)=> <div key={inx} className='product'>
                    <img src={item?.url[0]} alt="" />
                    <h1>{item?.title} <FiArrowRight/> </h1>
                    <p>{item?.desc}</p>
                </div>)
            }
        </div>
    </div>
  )
}

export default Products