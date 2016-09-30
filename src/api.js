const defaultTodos = [
  {
    name: 'one',
    id: 1,
    completed: false,
  },
  {
    name: 'two',
    id: 2,
    completed: true,
  },
  {
    name: 'three',
    id: 3,
    completed: false,
  }
]

export const fetchTodos = () => {
  console.log('Fetching todos from the api')
  return defaultTodos
}
