import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem', () => {
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  test('should match with snapshot', () => {
    // Act
    const { container } = render( <GifItem title={ title } url={ url }/> );

    // Assert
    expect( container ).toMatchSnapshot();
  });

  test('should show image with the indicated url and alt', () => {
    // Act
    render( <GifItem title={ title } url={ url }/> );
    const { src, alt } = screen.getByRole('img');

    // Assert
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test('should show title in the component', () => {
    // Act
    render( <GifItem title={ title } url={ url }/> );

    // Assert
    expect( screen.getByText(title) ).toBeTruthy();
  })
});