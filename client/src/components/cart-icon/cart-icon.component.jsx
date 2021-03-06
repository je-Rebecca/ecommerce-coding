import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItmesCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-cart" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItmesCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
