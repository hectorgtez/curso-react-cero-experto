import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [ formState, setFormState ] = useState({
    username: 'hectorgtez',
    email: 'correo@correo.com'
  });

  const { username, email } = formState;

  useEffect( () => {
    // console.log('useEffect called!');
  }, []);

  useEffect( () => {
    // console.log('formState changed!');
  }, [ formState ]);
  
  useEffect( () => {
    // console.log('email changed!');
  }, [ email ]);

  const onInputChange = ({ target }) => {
    const  { value, name } = target;

    setFormState({
      ...formState,
      [ name ]: value
    });
  }

  return (
    <>
      <h1>Simple Form</h1>
      <hr/>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />
      
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        username === 'hectorgtez' && <Message/>
      }
    </>
  )
}
