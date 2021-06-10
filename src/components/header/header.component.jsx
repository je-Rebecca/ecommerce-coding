import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.components';
import { selectCartHiddent } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
      {/* <Cart currentUser ={currentUser}/> */}
    </OptionsContainer>
    {hidden ? null : <Cart />}
  </HeaderContainer>
);

// root- reducer 에 access있는 함수.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHiddent,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
