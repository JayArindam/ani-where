import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {location_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Available holiday anime packages...</h1>
      <p className='explore-menu-text'>
        Chose the type of package that you want for your vacation here.... <br /> <br />
        P.S. The creator of this website was inebriated at the time of making this website and nothing here is real so dont make any purchases unless you want to donate us some money XD...      
      </p>
      <div className="explore-menu-list">
        {location_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <p className='Btn'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
