/* eslint-disable import/no-dynamic-require import/no-webpack-loader-syntax */

import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer from './createReducers';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
  ];
  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = {
    ...createStore(createReducer(), fromJS(initialState), composeWithDevTools(...enhancers)),
    runSaga: sagaMiddleware.run,
  };

  if (module.hot) {
    module.hot.accept('./createReducers', () => {
      // eslint-disable-next-line
      System.import('./createReducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers();

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
