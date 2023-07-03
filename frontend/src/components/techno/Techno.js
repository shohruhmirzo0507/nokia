import React from 'react'
import "./Techno.css"
import { AiOutlineArrowRight } from "react-icons/ai"

function Techno() {

    const data = [
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2019-05/RS631_OI_Energy_03_HR_RGB-low.jpg",
            title: "Energy"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2020-11/Supply%20Chain%20and%20Logistics.jpg",
            title: "Manufacturing and logistics"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2020-10/SR1904034629EN_images_public_sector_3840x1100.jpg",
            title: "Public sector"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2019-05/OI_Trains_02_LR_RGB_1.jpg",
            title: "Transportation"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-05/header-option1-1920x600.jpg",
            title: "Research and Education Networks"
        },
        {
            url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2022-10/25711_transform.jpg",
            title: "More industries"
        },
    ]


 
    return (
        <div className='technos'>
            <h1>Explore our solutions for enterprises and government</h1>
            <div className="techno__products">
                {
                    data?.map((item, inx)=> <div key={inx} className='techno__pro'>
                        <img src={item?.url} alt="" />
                        <h3>{item?.title} <span> <AiOutlineArrowRight/> </span> </h3>
                    </div>)
                }
            </div>
        </div>
      )
}

export default Techno