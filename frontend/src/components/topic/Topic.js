import React from 'react'
import "./Topic.css"
import { AiOutlineArrowRight } from "react-icons/ai"

function Topic() {

    const data = [
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-01/resrcid28211_gettyimages-1090918676-modernizing-the-worlds-mission-critical-operations.jpg",
            title: "Modernizing the  most."
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2021-09/NOK0835-724x362px-image%20only.jpg",
            title: "Accelerating Industry 4.0 digitalization"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-02/future-of-work-refrence-thumbnail-1920x1080_0.jpg",
            title: "Shaping the future of work"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-02/industrial-metaverse-refrence-thumbnail-1920x1080.jpg",
            title: "Powering the industrial metaverse"
        },
    ]

  return (
    <div className='topic'>
        <h1>Featured topics</h1>
        <div className="topic__products">
            {
                data?.map((item, inx)=> <div key={inx} className='topic__pro'>
                    <img src={item?.url} alt="" />
                    <h3>{item?.title} <span> <AiOutlineArrowRight/> </span> </h3>
                </div>)
            }
        </div>
    </div>
  )
}

export default Topic