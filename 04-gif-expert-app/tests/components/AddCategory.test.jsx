import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('AddCategory', () => {
  test('should change the input value', () => {
    // Act
    render( <AddCategory onNewCategory={ () => {} }/> );
    const input = screen.getByRole('textbox');
    
    fireEvent.input( input, { target: { value: 'Saitama' }});

    // Assert
    expect( input.value ).toBe('Saitama');
  });
});