describe('Pruebas en <DemoComponent/>', () => {
  test('El mensaje1 debe ser igual al mensaje2',  () => {
    // Arrange
    const message1 = 'Hola, mundo!';
  
    // Act
    const message2 = message1.trim();
  
    // Assert
    expect(message1).toBe(message2);
  });
});
