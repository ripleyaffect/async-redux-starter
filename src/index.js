import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Root from './components/Root'
import createStore from './createStore'

import './index.css'

const store = createStore()
store.dispatch({ type: 'TEST' })

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
