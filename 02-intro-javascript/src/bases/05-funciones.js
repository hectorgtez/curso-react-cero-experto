const saludar = function (nombre) {
  return `Hola, ${ nombre }!`;
}

const saludar2 = (nombre) => {
  return `Hola, ${ nombre }!`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }!`;

const saludar4 = () => `Hola, mundo!`;

console.log(saludar('Hector'));
console.log(saludar2('All Might'));
console.log(saludar3('Midoriya'));
console.log(saludar4());

const getUser = () => ({
  uid: 'ABC123',
  username: 'Guzamah'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
  uid: 'ABC123',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Hector');
console.log(usuarioActivo);