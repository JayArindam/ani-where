import React from 'react';
import { assets } from '../../assets/assets'
import './Loli.css'

const Loli = () => {
  return (
    <div className="lolita">
      <img className='lolita-dance' src={assets.dance} alt="Animated GIF"/>
    </div>
  );
};

export default Loli;