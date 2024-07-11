import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';

describe('AppRouter', () => {
  test('should show login if not authenticated', () => {
    // Arrange
    const contextValue = {
      logged: false
    }

    // Act
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Assert
    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });
  
  test('should show marvel component if is authenticated', () => {
    // Arrange
    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Test'
      }
    }

    // Act
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter/>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Assert
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });
});