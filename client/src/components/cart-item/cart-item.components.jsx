import React from 'react';
import './cart-item.style.scss';
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-each-item">
      <img src={imageUrl} alt="img" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {price}*{quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
