import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     resolve(getHeroeById(2));
//     reject('No se pudo encontrar el héroe...');
//   }, 2000);
// });

// promesa.then( (heroe) => {
//   console.log('Heroe:', heroe);
// }).catch( error => console.warn(error) );

const getHeroeByIdAsync = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve( heroe );
      } else {
        reject('No se pudo encontrar el héroe...');
      }
    }, 2000);
  });
}

getHeroeByIdAsync(2)
  .then( (heroe) => console.log('Héroe:', heroe) )
  .catch( (error) => console.warn(error) )