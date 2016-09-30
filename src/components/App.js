import React from 'react'
import { connect } from 'react-redux'

import TodoList from './TodoList'

const App = ({ value, increment, decrement }) => {
  return <div className="app">
    <TodoList />
  </div>
}

export default connect(
  state => state
)(App)
