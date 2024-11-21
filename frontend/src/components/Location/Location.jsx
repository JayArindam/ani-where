import React, { useContext, useState } from 'react';
import './Location.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const Location = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    const handleAddToCart = () => {
        addToCart(id);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(id);
    };

    return (
        <div className='location-item'>
            <div className='location-img-container'>
                <img className='location-item-image' src={`${url}/images/${image}`} alt={name} />
                <div className='number-of-people'>
                    <p className='text-numberof-people'>How many people:</p>
                    {!cartItems[id] ? (
                        <img
                            className='add'
                            onClick={handleAddToCart}
                            src={assets.add_icon_white}
                            alt="Add icon"
                        />
                    ) : (
                        <div className="people-counter">
                            <img
                                src={assets.remove_icon_red}
                                onClick={handleRemoveFromCart}
                                alt="Remove icon"
                            />
                            <p>{cartItems[id]}</p>
                            <img
                                src={assets.add_icon_green}
                                onClick={handleAddToCart}
                                alt="Add icon"
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="location-item-info">
                <div className="location-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="location-item-desc">{desc}</p>
                <p className="location-item-price">RS. {price}</p>
            </div>
        </div>
    );
};

export default Location;
