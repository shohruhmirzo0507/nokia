import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./Insig.css";


function Insig() {

  const data = [
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-02/connectivity-article-16-9-thumbnail.jpg",
      title: "Five ways connectivity supercharges our world",
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-01/resrcid28211_gettyimages-1090918676-modernizing-the-worlds-mission-critical-operations.jpg",
      title: "Modernizing",
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-01/resrcid32233_people-on-top-of-the-mountain_gettyimages-1299097271-dawn-of-industry-4.0.jpg",
      title: "The dawn of Industry 4.0",
    },
    
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-01/resrcid24425_gettyimages-1091790362-more-than-machines.jpg",
      title: "Changi Airport: Driving.",
    },
  ]

  return (
        <div className="insigs">
        <div className="insig">
          <h1> Featured insights</h1>
          <div className="insig__products">
            {
              data?.map((item, inx)=> <div key={inx} className="insig__product">
                <img src={item?.url} alt="" />
                <h3>{item?.title} <span> <AiOutlineArrowRight/> </span> </h3>
                <p>{item?.desc}</p>
              </div>)
            }
          </div>
        </div>
    </div>

   
  );
}

export default Insig
