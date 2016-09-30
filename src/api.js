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

export const fetchTodos = (callback) => {
  console.log('Fetching todos from the api')
  setTimeout(() => {
    console.log('Finished fetching todos')
    callback(defaultTodos)
  }, 1000)
  return defaultTodos
}
