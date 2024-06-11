import { useState } from "react"

export const AddCategory = () => {
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
