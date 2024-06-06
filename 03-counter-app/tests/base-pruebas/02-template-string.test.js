import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('02-template-string', () => {
  test('getSaludo debe retornar "Hola Hector"', () => {
    const name = 'Hector';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${ name }`);
  });
})