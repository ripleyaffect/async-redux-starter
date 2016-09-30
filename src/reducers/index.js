import { combineReducers } from 'redux'

export const todos = (state=[], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      console.log('Adding new todos')
      return state.concat(action.todos)
    case 'MARK_TODO_COMPLETED':
      return state.map(
        todo => todo.id === action.id ? { ...todo, completed: true } : todo)
    case 'MARK_TODO_NOT_COMPLETED':
      return state.map(
        todo => todo.id === action.id ? { ...todo, completed: false } : todo)
    default:
      return state
  }
}

export const app = combineReducers({
  todos,
})
