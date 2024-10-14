import React from 'react'
import Navbar from '../componants/navbar'
import Categorymenu from '../componants/categorymenu'
import Fooditems from '../componants/fooditems'
import Cart from '../componants/cart'

function Home() {
  return (
    <>
    <Navbar/>
    <Categorymenu/>
    <Fooditems/>
    <Cart/>
    </>
  )
}

export default Home
