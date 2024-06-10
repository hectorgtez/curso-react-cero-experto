import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('FirstApp', () => {
  // test('Debe hacer match con el snapshot', () => {
  //   // Arrange
  //   const title = 'Hola, soy All Might';

  //   // Act
  //   const { container } = render(<FirstApp title={ title }/>);

  //   // Assert
  //   expect(container).toMatchSnapshot();
  // });
  
  test('Debe mostrar el titulo en un h1', () => {
    // Arrange
    const title = 'Hola, soy All Might';

    // Act
    const { getByText, getByTestId } = render(
      <FirstApp
        title={ title }
      />
    );

    // Assert
    expect( getByText(title) ).toBeTruthy();
    expect( getByTestId('test-title').innerHTML ).toContain(title);
  });
  
  test('Debe mostrar el subtitulo enviado por props', () => {
    // Arrange
    const title = 'Hola, soy All Might';
    const subtitle = 'Soy un subtitulo';

    // Act
    const { getAllByText } = render(
      <FirstApp
        title={ title } 
        subTitle={ subtitle }
      />
    );

    // Assert
    expect( getAllByText(subtitle).length ).toBe(2);
  });
});