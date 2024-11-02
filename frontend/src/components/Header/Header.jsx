import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
                <video autoPlay muted loop>
                    <source src={assets.headvid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            <div className='header-contents'>
                <h2>Dive into the world of anime</h2>
            </div>
        </div>
    )
}

export default Header