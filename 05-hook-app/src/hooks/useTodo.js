import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter( todo => (!todo.done) ).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  const handleNewTodo = (todo) => {
    dispatch({
      type: 'add',
      payload: todo
    });
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'remove',
      payload: id
    });
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'toggle',
      payload: id
    });
  }

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
