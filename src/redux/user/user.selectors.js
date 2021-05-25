import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

//만약 여러개 필요하면 이렇게 보낼수 있음,
// const selectCart =state => state.cart;

// [] array로 보내는거고, 안하면 arugment로 보내기

// export const selectCurrentUser= createSelector([selectUser ,selectCart], (user ,cart)=>user.currentUser)
// export const selectCurrentUser= createSelector(selectUser ,selectCart, (user ,cart)=>user.currentUser)

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
