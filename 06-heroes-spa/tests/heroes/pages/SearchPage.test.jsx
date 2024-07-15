import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('SearchPage', () => {
  beforeEach( () => jest.clearAllMocks() );

  test('should show default values', () => {
    // Arrange & Act
    const { container } = render(
      <MemoryRouter>
        <SearchPage/>
      </MemoryRouter>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('should show batman card', () => {
    // Arrange & Act
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage/>
      </MemoryRouter>
    );

    const img = screen.getByRole('img');
    const alert = screen.getByLabelText('alert-danger');

    // Assert
    expect(img.src).toContain('/src/assets/heroes/dc-batman.jpg');
    expect(alert.style.display).toBe('none');
  });

  test('should show error if hero not found (batman123)', () => {
    // Arrange & Act
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage/>
      </MemoryRouter>
    );

    const alert = screen.getByLabelText('alert-danger');

    // Assert
    expect(alert.style.display).toBe('');
  });
  
  test('should call navigate to new screen', () => {
    // Arrange
    const inputValue = 'superman';

    // Act
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage/>
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { name: 'searchText', value: inputValue} });
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    // Assert
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${ inputValue }`);
  });
});