import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [ categories, setCategories ] = useState(['One Punch', 'One Piece']);

  const onAddCategory = () => {
    setCategories(['Apex Legends', ...categories]);
  }

  return(
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory/>

      {/* Listado de Gifs */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { 
          categories.map( (category, index) => {
            return (
              <li key={ index }>
                { category }
              </li>
            )
          })
        }
      </ol>
    </>
  );
}