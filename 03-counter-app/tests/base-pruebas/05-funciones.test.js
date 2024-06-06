import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    // Arrange
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    // Act
    const user = getUser();

    // Assert
    expect(testUser).toEqual(user);
  });

  test('getUsuario debe retornar un objeto', () => {
    // Arrange
    const name = 'Hector';
    const expected = {
      uid: 'ABC567',
      username: name
    }

    // Act
    const user = getUsuarioActivo(name);

    // Assert
    expect(user).toEqual(expected)
  });
});