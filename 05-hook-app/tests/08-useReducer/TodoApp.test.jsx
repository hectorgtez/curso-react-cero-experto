import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('TodoApp', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'ToDo #1', done: false },
      { id: 2, description: 'ToDo #2', done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  });

  test('should render component correctly', () => {
    // Arrange & Act
    render( <TodoApp/> );

    // Assert
    expect(screen.getByText('ToDo #1')).toBeTruthy();
    expect(screen.getByText('ToDo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});