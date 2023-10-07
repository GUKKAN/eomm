import React from 'react';
import Image from './images/shopping_cart.png';

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <img className='cart-icon'src={Image} alt="Shopping Cart" />
    </div>
  );
}

export default ShoppingCart;
