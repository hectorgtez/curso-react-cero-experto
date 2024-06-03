const nombre = 'Hector';
const apellido = 'Gutierrez';

const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);
console.log(`Desde función: ${ getSaludo(nombre) }`);

function getSaludo(nombre) {
  return `Hola, ${ nombre }!`;
}