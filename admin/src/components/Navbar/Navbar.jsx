import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.icon} alt="" />
      <p>Welcome to the Admin panel of Ani-where <br /> P.S. this is supposed to be a boring part of the same website T_T</p>
    </div>
  )
}

export default Navbar
