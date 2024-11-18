import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


// this is where the main goddamn navbar funtion starts 
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  // as the name suggests this goddamn function is used to logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  // const handlePackagesClick = () => {
  //   setMenu("packages");
  //   navigate('/package');
  // };
  // we can use the above function if we have a new page and want to navigate to it with the help of out beloved navbar XD

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <li><Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link></li>
        <li><a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact</a></li>
        <li><a href='#location-display' onClick={() => setMenu("location-display")} className={`${menu === "location-display" ? "active" : ""}`}>Packages</a></li>
        <li><a href='#about-us' onClick={() => setMenu("about-us")} className={`${menu === "about-us" ? "active" : ""}`}>AboutUs</a></li>

        {/* <li><a onClick={handlePackagesClick} className={`${menu === "packages" ? "active" : ""}`}>Packages</a></li> */}
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img className='cart-img' src={assets.cart} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img className="cart-user-image" src={assets.user} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
