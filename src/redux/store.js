//store는 middle웨어로 중간에서 값 전달. 그러기위해서 아래가 필요.
import { applyMiddleware, createStore } from 'redux';
//store cache depend on certain config option
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store); //persist version of store
