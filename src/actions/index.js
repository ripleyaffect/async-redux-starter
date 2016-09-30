
import { fetchTodos } from '../api'

export const getTodos = () => {
  console.log('getTodos dispatched, calling api')
  // Fetch the todos with the api
  return function(dispatch, getState) {
    const todos = fetchTodos(function (todos) {
        dispatch({
          type: 'GET_TODOS',
          todos,
        })
      }
    )
  }
}

export const markTodoCompleted = (id) => {
  return {
    type: 'MARK_TODO_COMPLETED',
    id,
  }
}

export const markTodoNotCompleted = (id) => {
  return {
    type: 'MARK_TODO_NOT_COMPLETED',
    id,
  }
}

