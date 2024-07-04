import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('useCounter', () => {
  test('should return default values', () => {
    // Arrange & Act
    const { result } = renderHook( () => useCounter() );
    const { counter, decrement, increment, reset } = result.current;

    // Assert
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should generate counter with value 100', () => {
    // Arrange & Act
    const { result } = renderHook( () => useCounter(100) );

    // Assert
    expect(result.current.counter).toBe(100);
  });
  
  test('should increment counter', () => {
    // Arrange
    const { result } = renderHook( () => useCounter(20) );
    const { increment } = result.current;

    // Act
    act( () => {
      increment(2);
    });

    // Assert
    expect(result.current.counter).toBe(22);
  });
  
  test('should decrement counter', () => {
    // Arrange
    const { result } = renderHook( () => useCounter(20) );
    const { decrement } = result.current;

    // Act
    act( () => {
      decrement(2);
    });

    // Assert
    expect(result.current.counter).toBe(18);
  });
  
  test('should reset counter', () => {
    // Arrange
    const { result } = renderHook( () => useCounter(20) );
    const { increment, reset } = result.current;

    // Act
    act( () => {
      increment(2);
      reset();
    });

    // Assert
    expect(result.current.counter).toBe(20);
  });
});