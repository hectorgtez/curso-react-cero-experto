import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('MainApp', () => {
  test('should show HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp/>
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });
  
  test('should show LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
      </MemoryRouter>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
  
  test('should show AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp/>
      </MemoryRouter>
    );

    expect(screen.getByText('AboutPage')).toBeTruthy();
  });
});
