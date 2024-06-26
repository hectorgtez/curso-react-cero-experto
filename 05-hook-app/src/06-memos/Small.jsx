import React from 'react';
import PropTypes from 'prop-types';

export const Small = React.memo( ({ value }) => {
  console.log('Me volví a dibujar...');

  return (
    <small>{ value }</small>
  )
});

Small.displayName = 'Small';
Small.propTypes = {
  value: PropTypes.number.isRequired
}
