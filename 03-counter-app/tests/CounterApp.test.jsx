import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('CounterApp', () => {
  const initialValue = 10;

  test('Debe hacer match con el snapshot', () => {
    // Act
    const { container } = render(
      <CounterApp value={ initialValue }/>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
  
  test('Debe mostrar el valor inicial de 100', () => {
    // Act
    render(
      <CounterApp value={ 100 }/>
    );

    // Assert
    expect( screen.getByText(100) ).toBeTruthy();
  });
  
  test('Debe incrementar con el boton +1', () => {
    // Act
    render(
      <CounterApp value={ initialValue }/>
    );
    fireEvent.click( screen.getByText('+1') );

    // Assert
    expect( screen.getByText('11') ).toBeTruthy();
  });
  
  test('Debe decrementar con el boton -1', () => {
    // Act
    render(
      <CounterApp value={ initialValue }/>
    );
    fireEvent.click( screen.getByText('-1') );

    // Assert
    expect( screen.getByText('9') ).toBeTruthy();
  });
  
  test('Debe funcionar el boton de reset', () => {
    // Act
    render(
      <CounterApp value={ initialValue }/>
    );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );

    fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

    // Assert
    expect( screen.getByText(initialValue) ).toBeTruthy();
  });
});