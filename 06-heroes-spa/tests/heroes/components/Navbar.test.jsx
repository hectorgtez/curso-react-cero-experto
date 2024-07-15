import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/heroes/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Navbar', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 123,
      name: 'Test Name'
    },
    logout: jest.fn()
  }

  beforeEach( () => jest.clearAllMocks() );

  test('should show logged user name', () => {
    // Arrange & Act
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Assert
    expect(screen.getByText('Test Name')).toBeTruthy();
  });
  
  test('should call logout and navigate when logout button is clicked', () => {
    // Arrange & Act
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click( logoutBtn );

    // Assert
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { 'replace': true });
  });
})