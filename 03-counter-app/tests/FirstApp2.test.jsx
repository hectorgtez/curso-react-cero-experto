import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('FirstApp', () => {
  const title = 'Hola, soy All Might!';

  test('Debe hacer match con el snapshot', () => {
    // Act
    const { container } = render(
      <FirstApp title={ title }/>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
  
  test('Debe mostrar el mensaje "Hola, soy All Might!"', () => {
    // Act
    render(
      <FirstApp title={ title }/>
    );

    // Assert
    expect( screen.getByText(title) ).toBeTruthy();
  });
  
  test('Debe mostrar el titulo en un h1', () => {
    // Act
    render(
      <FirstApp title={ title }/>
    );

    // Assert
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
  });
  
  test('Debe mostrar el subtitulo enviado por propss', () => {
    // Arrange
    const subtitle = 'Soy un subtitulo';

    // Act
    render(
      <FirstApp title={ title } subTitle={ subtitle }/>
    );

    // Assert
    expect( screen.getAllByText(subtitle).length ).toBe(2);
  });
});