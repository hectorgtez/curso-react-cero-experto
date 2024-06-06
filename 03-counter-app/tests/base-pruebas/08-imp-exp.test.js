import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por ID', () => {
    // Arrange
    const id = 1;
    const expected = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    // Act
    const hero = getHeroeById(id);

    // Assert
    expect(hero).toEqual(expected);
  });
  
  test('getHeroeById debe retornar undefined si no existe el ID', () => {
    // Arrange
    const id = 100;

    // Act
    const hero = getHeroeById(id);

    // Assert
    expect(hero).toBeFalsy();
  });
  
  test('getHeroesByOwner debe retornar heroes de DC', () => {
    // Arrange
    const owner = 'DC';

    // Act
    const heroes = getHeroesByOwner(owner);

    // Assert
    expect(heroes.length).toEqual(3);
    heroes.forEach(hero => {
      expect(hero.owner).toEqual(owner);
    });
  });

  test('getHeroesByOwner debe retornar heroes de Marvel', () => {
    // Arrange
    const owner = 'Marvel';

    // Act
    const heroes = getHeroesByOwner(owner);

    // Assert
    expect(heroes.length).toEqual(2);
    heroes.forEach(hero => {
      expect(hero.owner).toEqual(owner);
    });
  });
});