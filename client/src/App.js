import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import ShopPage from './pages/shop/shop.components';
import Homepage from './pages/homepage/homepage.component.jsx';
import Checkoutpage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { GlobalStyle } from './global.style';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); //current

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* shop:hot이런식으로 할거라 exact안함 */}
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkoutpage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
