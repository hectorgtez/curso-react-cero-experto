import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('09-promesas', () => { 
  test('getHeroeByIdAsync debe retornar un héroe', (done) => {
    // Arrange
    const id = 1;
    const expected = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    // Act
    getHeroeByIdAsync(id)
      .then( hero => {
        // Assert
        expect(hero).toEqual(expected);
        done();
      });
  });
  
  test('getHeroeByIdAsync debe retornar un error si no exite heroe', (done) => {
    // Arrange
    const id = 100;
    const expected = `No se pudo encontrar el héroe ${ id }`

    // Act
    getHeroeByIdAsync(id)
      .then( hero => {
        // Assert
        expect(hero).toBeFalsy();
        done();
      })
      .catch( error => {
        // Assert
        expect(error).toBe(expected);
        done();
      });
  });
});