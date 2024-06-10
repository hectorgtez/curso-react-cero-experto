import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleSubstract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleSubstract }>
        -1
      </button>
      <button aria-label='btn-reset' onClick={ handleReset }>
        Reset
      </button>
      <button onClick={ handleAdd }>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
