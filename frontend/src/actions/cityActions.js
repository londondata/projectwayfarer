
import uuid from 'uuid'

export function addTodo (task) {
  return {
    type: 'ADD_TODO',
    todo: {
      id: uuid(),
      task: task,
      completed: false
    }
  }
}
