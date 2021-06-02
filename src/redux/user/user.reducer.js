import UserActionTypes from './user.types';
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

//if state is not set, state = INITIAL_STATE
//state: 현재/ 과거 상태

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        //랜더링
        //props 다를떄마다 랜더링되는 리액트 props가 다르다는건 new Object
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      //랜더링 안됨
      return state;
  }
};

export default userReducer;
