import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Obtener la gema del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Obtener la gema del poder',
    done: false,
  },
]

export const TodoApp = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(todo);
  }

  return (
    <>
      <h1>Todo App (10)</h1>
      <h5>Pendientes: 2</h5>
      <hr/>

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={ todos }/>
        </div>

        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr/>

          <TodoAdd onNewTodo={ handleNewTodo }/>
        </div>
      </div>
    </>
  )
}
