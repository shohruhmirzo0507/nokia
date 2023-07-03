import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./Meet.css";


function Meet() {

  const data = [
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-06/vlcsnap-2023-06-09-11h01m06s989.jpg",
      title: "Elevating public safety with advanced ",
      desc: "The highest priority of the Vermont."
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-05/railways.png",
      title: "Alstom and NCRTC: Speeding rail",
      desc: "e National Capital Region Transport Corporation (NCRTC) is creating a safer and faster travel experience"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-03/ent_pta.jpg",
      title: "PTA: Digitalization for Perth",
      desc: "The Public Transport Authority (PTA) of Western Australia is building a next generation communication"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-03/ent_ren.jpg",
      title: "Modernizing power transmission networks",
      desc: "Redes Enérgeticas Nacionais (REN) is Portugal’s energy transmission system."
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-03/ent_changi_final.jpg",
      title: "Changi Airport: Driving.",
      desc: "Singapore’s Changi Airport is advancing its digital transformation to become the world’s."
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-03/ent_esnet.jpg",
      title: "ESNet: Advancing collaborative",
      desc: "Experts discuss why the answer is to start locally"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-03/ent_irish_aviation.jpg",
      title: "Irish Aviation Authority: Taking air traffic",
      desc: "With a next-generation air traffic control network for the North Atlantic."
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2022-04/ResrcID28101_Paris_GettyImages-1003630988.jpg",
      title: "Green energy",
      desc: "Experts discuss why the answer is to start locally"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-02/communicationsfitfortmr.jpg",
      title: "Communications",
      desc: "SA Power Networks deploys IP/MPLS for applications including current differential protection"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/c1_reference/public/2023-02/denmarksdigitalrevolution.jpg",
      title: "Denmarks degital revolution",
      desc: "Experts discuss why the answer is to start locally"
    },
  ]

  return (
        <div className="meets">
        <div className="meet">
          <h1> Meet the visionary leaders of the digital era</h1>
          <div className="meet__products">
            {
              data?.map((item, inx)=> <div key={inx} className="meet__product">
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

export default Meet
