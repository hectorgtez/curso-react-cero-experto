import PropTypes from 'prop-types';
import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volví a generar!');

  return (
    <button
      className='btn btn-primary'
      onClick={ () => increment(5) }
    >
      Increment
    </button>
  )
})

ShowIncrement.displayName = 'ShowIncrement';
ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}
