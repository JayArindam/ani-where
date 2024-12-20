import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-image" src={assets.logo} alt="" />
            <p>Done exploring ani-where... well... good for you... now that you are looking at this wonderful footer there is 
              something else we would like you to know... we would always love to get in touch with you and to do that we left 
              out phone number and our mail... hope you find that useaful...</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#footer">Contact Us</a></li>
                <li><a href="/privacy-policy">Privacy policy</a></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact: aniwhere@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © ani-where - All Right Reserved.</p>
    </div>
  )
}

export default Footer
