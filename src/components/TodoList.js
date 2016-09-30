import React from 'react'
import { connect } from 'react-redux'

import { getTodos } from '../actions'

import Todo from './Todo'

class TodoList extends React.Component {
  componentWillMount() {
    console.log('TodoList mounting, dispatching getTodos')
    this.props.dispatchGetTodos()
  }

  render() {
    return <ul>
      {this.props.todos.map(todo => <Todo {...todo} key={todo.id} />)}
    </ul>
  }
}

export default connect(
  state => state,
  { dispatchGetTodos: getTodos }
)(TodoList)
