const persona = {
  nombre:  'Tony',
  edad: 45,
  clave: 'Iron Man'
};

// const { nombre, edad, clave } = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const getContext = ({ nombre, edad, clave, rango = 'General' }) => {
  return {
    nombreClave: clave,
    años: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

const { nombreClave, años, latlng:{ lat, lng } } = getContext(persona);
console.log(nombreClave, años);
console.log(lat, lng);