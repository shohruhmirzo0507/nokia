import React from 'react'
import Products from '../../components/products/Products'
import Category from "../../components/category/Category"
import Standard from '../../components/standard/Standard'
import Explore from '../../components/explore/Explore'
import Banner from "../../components/banner/Banner"

function Home() {
  return (
    <div>
        <Banner/>
        <br />
        <Products/>
        <br />
        <Category/>
        <br />
        <Standard/>
        <br />
        <Explore/>
        <br />
    </div>
  )
}

export default Home