import React from 'react'
import "./Solutions.css"
import { AiOutlineArrowRight } from "react-icons/ai"

function Solutions() {

    const data = [
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/490x260-midblue-01_92_2.jpg",
            title: "Energy"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/public-safety_0.jpg",
            title: "Manufacturing "
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/nokia_telecomsaas_statement_of_vision_0.jpg",
            title: "Public sector"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/gettyimages-676914839_innotrans.jpg",
            title: "Transportation"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/blog.png",
            title: "Research and Edu"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/digitalfutures_0.jpg",
            title: "More industries"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/nokia_petrochem_glp_1920x1080_v1.jpg",
            title: "More industries"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/nokia_petrochem_glp_1920x1080_v2-1.jpg",
            title: "More industries"
        },
    ]

  return (
    <div className='solutions'>
        <h1>Learn more</h1>
        <div className="solution__products">
            {
                data?.map((item, inx)=> <div key={inx} className='solution__pro'>
                    <img src={item?.url} alt="" />
                    <h3>{item?.title} <span> <AiOutlineArrowRight/> </span> </h3>
                </div>)
            }
        </div>
    </div>
  )
}

export default Solutions