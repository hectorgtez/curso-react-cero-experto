import { useState } from "react";
import { useGetTodoByIdQuery } from "./store/apis"

export const TodoApp = () => {
  const [ todoId, setTodoId ] = useState(1)
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  }
  
  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr/>

      <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

      <pre>{ JSON.stringify(todo) }</pre>

      {/* <ul>
        {
          todos.map( todo => (
            <li key={ todo.id }>
              <strong>{ todo.completed ? 'DONE' : 'PENDING' }</strong>
              &nbsp;
              { todo.title }
            </li>
          ))
        }
      </ul> */}

      <button onClick={ prevTodo }>
        Prev ToDo
      </button>
      <button onClick={ nextTodo }>
        Next ToDo
      </button>
    </>
  )
}
