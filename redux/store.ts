import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createWrapper, Context} from 'next-redux-wrapper';
import rootReducers, {appState} from "./reducers";
import rootSagas from "./sagas";

// export const makeStore = (context: Context) => {
//     // 1: Create the middleware
//     const sagaMiddleware = createSagaMiddleware();
//
//     // 2: Add an extra parameter for applying middleware:
//     const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
//
//     // 3: Run your sagas on server
//     (store as appState).sagaTask = sagaMiddleware.run(rootSagas);
//
//     // 4: now return the store:
//     return store;
// };
//
// // @ts-ignore
// export const wrapper = createWrapper<Store<appState>>(makeStore, {debug: true});
//
// export default wrapper;

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()

  // @ts-ignore
  const store = createStore(rootReducers, bindMiddleware([sagaMiddleware]))

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSagas)

  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper;
