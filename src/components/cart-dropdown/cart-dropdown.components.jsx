import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.components';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItmes } from '../../redux/cart/cart.selectors';
import './cart-dropdown.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItmes,
});
//withRouter쓰면 history 사용가능
//return component, take component(their arguemnt) 가 우선순위 높음
//pass match history location obj in tothe compoennt with wrap
//receive those props. connect compoennt first,
export default withRouter(connect(mapStateToProps)(Cart));
