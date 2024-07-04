import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('useForm', () => {
  const initialForm = {
    name: 'Hector',
    email: 'correo@correo.com'
  }

  test('should return default values', () => {
    // Arrange & Act
    const { result } = renderHook( () => useForm(initialForm) );
    
    // Assert
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  
  test('should change name value in form', () => {
    // Arrange
    const newValue = 'Jazmin';

    // Act
    const { result } = renderHook( () => useForm() );
    const { onInputChange } = result.current;

    act( () => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });
    
    // Assert
    expect(result.current.name).toEqual(newValue);
    expect(result.current.formState.name).toEqual(newValue);
  });
  
  test('should reset form values', () => {
    // Arrange & Act
    const { result } = renderHook( () => useForm(initialForm) );
    const { onInputChange, onResetForm } = result.current;

    act( () => {
      onInputChange({ target: { name: 'name', value: 'Test' } });
      onResetForm();
    });
    
    // Assert
    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name);
  });
});