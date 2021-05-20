//store는 middle웨어로 중간에서 값 전달.
// 그러기위해서 아래가 필요.
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
