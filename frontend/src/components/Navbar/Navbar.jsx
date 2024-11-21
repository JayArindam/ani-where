import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FaShoppingCart, FaUserCircle, FaSignOutAlt, FaBoxOpen } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`${menu === "home" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={`${menu === "contact" ? "active" : ""}`}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#location-display"
            onClick={() => setMenu("location-display")}
            className={`${menu === "location-display" ? "active" : ""}`}
          >
            Packages
          </a>
        </li>
        <li>
          <a
            href="#about-us"
            onClick={() => setMenu("about-us")}
            className={`${menu === "about-us" ? "active" : ""}`}
          >
            About Us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="/cart" className="navbar-search-icon">
          <FaShoppingCart className="icon" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <FaUserCircle className="cart-user-image" onClick={toggleDropdown} />
            {dropdownVisible && (
              <ul className="navbar-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <FaBoxOpen />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <FaSignOutAlt />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
