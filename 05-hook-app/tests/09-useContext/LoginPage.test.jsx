import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('LoginPage', () => {
  const user = {
    id: 123,
    name: 'Hector Gutierrez',
    email: 'correo@correo.com'
  }

  test('should show component without user', () => {
    // Arrange & Act
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    // Assert
    expect(preTag.innerHTML).toBe('null');
  });
  
  test('should show user info when button is clicked', () => {
    // Arrange 
    const setUserMock = jest.fn();

    // Act
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage/>
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Assert
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});