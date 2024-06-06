import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('07-deses-arr', () => {
  test('debe retornar un string y un número', () => {
    // Arrange
    const [letters, numbers] = retornaArreglo();

    // Act & Assert
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
    
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});