import React, { useContext } from 'react'
import './LocationDisplay.css'
import Location from '../Location/Location'
import { StoreContext } from '../../Context/StoreContext'

const LocationDisplay = ({category}) => {

  const {location_list} = useContext(StoreContext);

  return (
    <div className='location-display' id='location-display'>
      <h2>Top places to explore...</h2>
      <div className='location-display-list'>
        {location_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <Location key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default LocationDisplay
