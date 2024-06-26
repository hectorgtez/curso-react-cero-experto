import React from 'react';
import PropTypes from 'prop-types';

export const Child = React.memo(({ number, increment }) => {
  console.log('Me volví a generar...');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={ () => increment(number) }
    >
      { number }
    </button>
  )
})

Child.displayName = 'Child';
Child.propTypes = {
  number: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}
