const persona = {
  nombre: 'Hector',
  apellido: 'Gutierrez',
  edad: 25,
  direccion: {
    ciudad: 'Navolato',
    zip: 803494,
  },
}

const persona2 = {...persona};
persona2.nombre = 'Manuel';

console.log(persona);
console.log(persona2);