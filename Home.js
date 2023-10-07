// src/components/Home.js
import React from 'react';
import './Home.css';
import Shoppingcart from './Shoppingcart';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">Valentine❤️‍🔥</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products" />
          <button type="button">Search</button>
        </div>
        <div className="shopping-cart-container">
          <Shoppingcart />
        </div>
        <div className="user-account">
          <span className="user-name">Hello, User</span>
          <Link to="/login" className="login">Log In</Link> {/* Use Link for Log In */}
          <Link to="/register" className="register">Register</Link> {/* Use Link for Register */}
        </div>
      </header>
      {/* ... Rest of your homepage content */}
    </div>
  );
}

export default Home;
