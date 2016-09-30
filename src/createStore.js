import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

// const thunkMiddleware = require('redux-thunk')

import { app } from './reducers'

const loggerMiddleware = function (store) {
  return function (next) {
    return function (action) {
      console.log(store.getState())
      console.log(action)
      const result = next(action)
      console.log(store.getState())
      return result
    }
  }
}

export default () => {
  return createStore(
    app,
    {},
    applyMiddleware(loggerMiddleware, thunkMiddleware))
}
