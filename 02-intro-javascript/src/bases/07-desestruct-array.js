const personajes = ['All Might', 'Deku', 'Lemillion'];

const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const getState = (valor) => {
  return [valor, () => { console.log('Hola, mundo!') }];
}

const [nombre, getNombre] = getState('All Might');
console.log(nombre);
getNombre();