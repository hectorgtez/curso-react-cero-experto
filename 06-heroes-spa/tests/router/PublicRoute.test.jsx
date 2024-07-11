import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('PublicRoute', () => {
  test('should show children if not authenticated', () => {
    // Arrange
    const contextValue = {
      logged: false
    }

    // Act
    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    // Assert
    expect(screen.getByText('Public Route')).toBeTruthy();
  });
  
  test('should navigate if is authenticated', () => {
    // Arrange
    const contextValue = {
      logged: true,
      user: {
        name: 'Test',
        id: 'ABC123'
      }
    }

    // Act
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Public Route</h1>
              </PublicRoute>
            }/>

            <Route path='marvel' element={
              <h1>Marvel Page</h1>
            }/>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Assert
    expect(screen.getByText('Marvel Page')).toBeTruthy();
  });
});