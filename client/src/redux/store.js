//store는 middle웨어로 중간에서 값 전달. 그러기위해서 아래가 필요.
import { applyMiddleware, createStore } from 'redux';
//store cache depend on certain config option
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootsaga from './shop/root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootsaga);

export const persistor = persistStore(store); //persist version of store
