import PropTypes from 'prop-types';
import { useForm } from './../hooks';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({ description: '' })

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!description) return;

    onNewTodo({
      id: new Date().getTime(),
      description: description,
      done: false,
    });
    
    onResetForm();
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type='text'
        placeholder='What to do?'
        className='form-control'
        name='description'
        value={ description }
        onChange={ onInputChange }
      />

      <button
        type='submit'
        className='btn btn-outline-primary mt-2'
      >
        Add
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired
}
