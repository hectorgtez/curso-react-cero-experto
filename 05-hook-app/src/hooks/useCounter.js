import { useState } from 'react';
import PropTypes from 'prop-types';

export const useCounter = ( initialValue = 10 ) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter( counter + value );
  }

  const decrement = (value = 1) => {
    setCounter( counter - value );
  }

  const reset = () => {
    setCounter( initialValue );
  }
  
  return {
    counter,
    increment,
    decrement,
    reset
  }
}

useCounter.propTypes = {
  initialValue: PropTypes.number
}