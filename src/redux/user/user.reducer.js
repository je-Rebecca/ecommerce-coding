import { UserActionTypes } from './user.types';
const INITIAL_STATE = {
  currentUser: null,
};

//if state is not set, state = INITIAL_STATE
//state: 현재/ 과거 상태

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        //랜더링
        //props 다를떄마다 랜더링되는 리액트 props가 다르다는건 new Object
        ...state,
        currentUser: action.payload,
      };
    default:
      //랜더링 안됨
      return state;
  }
};

export default userReducer;
