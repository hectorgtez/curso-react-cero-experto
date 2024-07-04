import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false
  }
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( () => {
    jest.clearAllMocks();
  });

  test('should show todo item', () => {
    // Arrange & Act
    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');
    
    // Assert
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });
  
  test('should show done todo item', () => {
    // Arrange & Act
    todo.done = true;
    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    const spanElement = screen.getByLabelText('span');
    
    // Assert
    expect(spanElement.className).toBe('text-decoration-line-through');
  });
  
  test('should call onToggleTodo when click', () => {
    // Arrange & Act
    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    
    // Assert
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  
  test('should call onDeleteTodo when button clicked', () => {
    // Arrange & Act
    render(
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    
    // Assert
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});