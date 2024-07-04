import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('HomePage', () => {
  const user = {
    id: 1,
    name: 'Hector'
  }

  test('should show component without user', () => {
    // Arrange & Act
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    // Assert
    expect(preTag.innerHTML).toBe('null');
  });
  
  test('should show component with user', () => {
    // Arrange & Act
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    // Assert
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});