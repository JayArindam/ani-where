import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import LocationDisplay from '../../components/LocationDisplay/LocationDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      {/* <ExploreMenu setCategory={setCategory} category={category}/> */}
      <LocationDisplay category={category}/>
    </>
  )
}

export default Home
