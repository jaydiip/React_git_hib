export const CREATE_TODOS = 'CREATE_TODOS'

export const createTodos = (title) => ({
    type: CREATE_TODOS,
    payload: title,
  })