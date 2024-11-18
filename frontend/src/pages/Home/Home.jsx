import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import LocationDisplay from '../../components/LocationDisplay/LocationDisplay'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <AboutUs />
      <LocationDisplay category={category}/>
    </>
  )
}

export default Home
