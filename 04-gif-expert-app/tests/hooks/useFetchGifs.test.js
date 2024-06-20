import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs', () => {
  test('should return initial state', () => {
    // Act
    const { result } = renderHook( () => useFetchGifs('One Punch') );
    const { images, isLoading } = result.current;

    // Assert
    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });
  
  test('should return an image array and isLoading as false', async () => {
    // Act
    const { result } = renderHook( () => useFetchGifs('One Punch') );
    await waitFor( () => expect(result.current.images.length).toBeGraterThan(0) );

    const { images, isLoading } = result.current;

    // Assert
    expect( images.length ).toBeGraterThan(0);
    expect( isLoading ).toBeFalsy();
  });
});