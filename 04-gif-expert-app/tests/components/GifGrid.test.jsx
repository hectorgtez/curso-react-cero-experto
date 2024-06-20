import { render, screen } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { GifGrid } from '../../src/components/GifGrid';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid', () => {
  const category = 'One Punch';

  test('should show loading at start', () => {
    // Arrange
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    // Act
    render( <GifGrid category={ category }/> );

    // Assert
    expect( screen.getByText('Cargando...') );
    expect( screen.getByText(category) );
  });

  test('should show items when load images with useFetchGifs', () => {
    // Arrange
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.gif'
      },
      {
        id: '123',
        title: 'Luffy',
        url: 'https://localhost/luffy.gif'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    // Act
    render( <GifGrid category={ category }/> );

    // Assert
    expect( screen.getAllByRole('img').length ).toBe(2);
  });
});