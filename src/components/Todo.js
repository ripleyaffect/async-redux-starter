import React from 'react'
import { connect } from 'react-redux'

import { markTodoCompleted, markTodoNotCompleted } from '../actions'

const Todo = ({ name, completed, id, dispatchMarkTodoCompleted, dispatchMarkTodoNotCompleted }) => {
  const forVal = `todo-${id}`
  const onChange = () => {
    if (completed) {
      dispatchMarkTodoNotCompleted(id)
    }
    else {
      dispatchMarkTodoCompleted(id)
    }
  }
  return <li>
    <input onChange={onChange} type="checkbox" id={forVal} checked={completed} />
    <label htmlFor={forVal}>{name}</label>
  </li>
}

export default connect(
  null,
  {
    dispatchMarkTodoCompleted: markTodoCompleted,
    dispatchMarkTodoNotCompleted: markTodoNotCompleted,
  }
)(Todo)
