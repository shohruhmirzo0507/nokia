import React, { useEffect, useState } from 'react'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import "./Category.css";
import axios from '../../api'
import { toast } from 'react-toastify'



function Category({blogReload}) {
  const [category, setCategory] = useState("")
  const [data, setData] = useState()
  const [reload, setReload] = useState(false)


  useEffect(()=>{
    axios.get("/products")
      .then(res=> {
        console.log(res.data)
      setData(res.data.innerData)
      })
      .catch(err=> {
        toast.error(err.response.data.msg)
        console.log(err)}
        )
  }, [reload])


  const pro = [
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-06/metaverse-research-thumbnail_1.png.jpg",
      title: "Metaverse",
      desc: "Discover the metaverse at work"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-06/microsoftteams-image-53.png.jpg",
      title: "Real Conversation",
      desc: "Discover the metaverse at work"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-06/nokia_know-now_thumbnail_1080x1080-1.jpg?h=57024e64",
      title: "Get in the Know, now",
      desc: "Discover the metaverse at work"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-04/6054_nokia_lightstorm_thumbnail_1080x1080_cn_v1.jpg?h=57024e64",
      title: "Disruptive Newcomer",
      desc: "Amajit Gupta is reshaping the fabric of telecoms"
    },
    {
      url: "https://www.nokia.com/sites/default/files/styles/scale_720_square/public/2023-05/nokia_1080x1080_video_grab.jpg?h=57024e64",
      title: "Green energy",
      desc: "Experts discuss why the answer is to start locally"
    },
  ]

  return (
        <div className="categorys">
        <div className="category">
          <h1>Discover the power of n</h1>
          <div className="category__products">
            {
              data?.map((item, inx)=> <div key={inx} className="category__product">
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

export default Category
