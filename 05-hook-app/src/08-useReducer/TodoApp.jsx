import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  } = useTodo();

  return (
    <>
      <h1>Todo App ({ todosCount })</h1>
      <h5>Pendientes: { pendingTodosCount }</h5>
      <hr/>

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={ todos }
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
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
