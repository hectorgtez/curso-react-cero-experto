import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      className='list-group-item d-flex justify-content-between align-items-center'
    >
      <span
        aria-label='span'
        className={`${ todo.done ? 'text-decoration-line-through' : '' }`}
        onClick={ () => onToggleTodo(todo.id) }
      >
        { todo.description }
      </span>

      <button
        className='btn btn-danger'
        onClick={ () => onDeleteTodo(todo.id) }
      >
        X
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}
