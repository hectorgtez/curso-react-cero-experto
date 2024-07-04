import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('todoReducer', () => {
  const initialState = [{
    id: 1,
    description: 'Demo ToDo',
    done: false
  }];

  test('should return initial state', () => {
    // Arrange & Act
    const newState = todoReducer(initialState, {});

    // Assert
    expect(newState).toEqual(initialState);
  });
  
  test('should add ToDo', () => {
    // Arrange
    const action = {
      type: 'add',
      payload: {
        id: 2,
        description: 'New ToDo',
        done: false
      }
    }

    // Act
    const newState = todoReducer(initialState, action);

    // Assert
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });
  
  test('should delete ToDo', () => {
    // Arrange
    const action = {
      type: 'remove',
      payload: 1
    };

    // Act
    const newState = todoReducer(initialState, action);

    // Assert
    expect(newState.length).toBe(0);
  });
  
  test('should toggle ToDo', () => {
    // Arrange
    const action = {
      type: 'toggle',
      payload: 1
    };

    // Act
    const newState = todoReducer(initialState, action);

    // Assert
    expect(newState[0]).toBeTruthy();
  });
});