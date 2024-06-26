import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationsNumber = 100) => {
  for (let i = 0; i < iterationsNumber; i++) {
    console.log('Ahí vamos...');
  }

  return `${ iterationsNumber } iterations done`;
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [ show, setShow ] = useState(true);

  const memorizedValue = useMemo( () => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: 
        &nbsp;
        <small>{ counter }</small>
      </h1>

      <hr/>

      <h4>{ memorizedValue }</h4>

      <button
        className='btn btn-primary mt-2'
        onClick={ () => increment() }
      >     
        +1
      </button>

      <button
        className='btn btn-outline-primary mt-2'
        onClick={ () => setShow(!show) }
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
}
