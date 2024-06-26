import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const divRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect( () => {
    const { width, height } = divRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);

  return (
    <section
      style={{ height: 200 }}
    >
      <h2 className='text-capitalize'>#{ id } - { name }</h2>

      <div ref={ divRef }>
        {
          sprites.map( sprite => (
            <img
              key={ sprite }
              src={ sprite }
              alt={ name }
            />
          ))
        }
      </div>

      <code>{ JSON.stringify( boxSize ) }</code>
    </section>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array
}
