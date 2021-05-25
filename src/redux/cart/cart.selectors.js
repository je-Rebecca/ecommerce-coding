import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

//createStore(inputselector, function )
export const selectCartItmes = createSelector(
  [selectCart],
  (cart) => cart.cartItems // => 이부분은 아웃풋
);

export const selectCartItmesCount = createSelector(
  [selectCartItmes],
  (cartItems) =>
    cartItems.reduce((accu, cartItem) => accu + cartItem.quantity, 0)
);
