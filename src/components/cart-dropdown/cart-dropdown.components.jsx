import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.components';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItmes } from '../../redux/cart/cart.selectors';
import './cart-dropdown.style.scss';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItmes(state),
});
export default connect(mapStateToProps)(Cart);
