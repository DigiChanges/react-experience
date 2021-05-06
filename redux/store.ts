import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createWrapper} from 'next-redux-wrapper';
import rootReducers from "./reducers";
import rootSagas from "./sagas";
import {config} from '../api/config';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  // @ts-ignore
  const store = createStore(rootReducers, bindMiddleware([sagaMiddleware]))

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSagas)

  return store
}

export const wrapper = createWrapper(makeStore, { debug: config.debug })

export default wrapper;
