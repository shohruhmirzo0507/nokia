import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import "./Explore.css";


function Explore() {

  const data = [
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-04/espoo-hq-03-1.jpg?h=e92932bd",
      title: "Metaverse",
      desc: "Discover the metaverse at work"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-06/800ge-webpage-image-3.jpeg.jpg",
      title: "Real Conversation",
      desc: "Discover the metaverse at work"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-06/broadband-edge.jpg?h=57024e64",
      title: "Get in the Know, now",
      desc: "Discover the metaverse at work"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-02/microsoftteams-image-45.jpg?h=cb0bbac9",
      title: "Disruptive Newcomer",
      desc: "Amajit Gupta is reshaping the fabric of telecoms"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-01/saasjan23.jpg?h=57024e64",
      title: "Green energy",
      desc: "Experts discuss why the answer is to start locally"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-01/c23_2.1_tech-explained_0.jpg?h=57024e64",
      title: "Green energy",
      desc: "Experts discuss why the answer is to start locally"
    },
  ]

  return (
    <div className="explores">
    <div className="explore">
      <h1>Explore Nokia</h1>
      <div className="explore__products">
        {
          data?.map((item, inx)=> <div key={inx} className="explore__product">
            <img src={item?.url} alt="" />
            <h3>{item?.title}</h3>
            <p>{item?.desc}</p>
          </div>)
        }
      </div>
    </div>
  </div>
   
  );
}

export default Explore
