import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//window local store 뜻함  sessionStore에도 접근 가능
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import direcotryReducer from './direcotry/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root', //루트부터 시작하고 싶다  start store at root
  storage, //위의 storage를 전달
  whitelist: ['cart'], //String 형태 배열 리덕스 저장하고 싶은 것 담음
  //cart 를 지속적으로 기억하고 싶음.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: direcotryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
