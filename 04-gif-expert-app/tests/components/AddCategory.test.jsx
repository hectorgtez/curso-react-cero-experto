import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('AddCategory', () => {
  test('should change the input value', () => {
    // Act
    render( <AddCategory onNewCategory={ () => {} }/> );
    const input = screen.getByRole('textbox');
    
    fireEvent.input( input, { target: { value: 'Saitama' }} );

    // Assert
    expect( input.value ).toBe('Saitama');
  });

  test('should call onNewCategory if input have a value', () => {
    // Arrange
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    // Act
    render( <AddCategory onNewCategory={ onNewCategory }/> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue }} );
    fireEvent.submit( form );

    // Assert
    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if input its empty', () => {
    // Arrange
    const onNewCategory = jest.fn();

    // Act
    render( <AddCategory onNewCategory={ onNewCategory }/> );

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    // Assert
    expect( onNewCategory ).not.toHaveBeenCalled();
  });
});