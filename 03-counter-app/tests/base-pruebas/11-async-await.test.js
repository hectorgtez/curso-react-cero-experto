import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('11-async-await', () => {
  test('getImagen debe retornar un URL de la imagen', async () => {
    // Arrange & Act
    const url = await getImagen();
    
    // Assert
    expect(typeof url).toBe('string');
  });
});