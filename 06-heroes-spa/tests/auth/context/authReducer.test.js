import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('authReducer', () => {
  test('should return default state', () => {
    // Arrange & Act
    const state = authReducer({ logged: false }, {});

    // Assert
    expect(state).toEqual({ logged: false });
  });
  
  test('should call login and set the user', () => {
    // Arrange
    const action = {
      type: types.login,
      payload: {
        name: 'Test',
        id: '123'
      }
    }

    // Act
    const state = authReducer({ logged: false }, action);

    // Assert
    expect(state).toEqual({ logged: true, user: action.payload });
  });
  
  test('should logout remove user and set logged as false', () => {
    // Arrange
    const initialState = {
      logged: true,
      user: {
        name: 'Test',
        id: '123'
      }
    }

    const action = {
      type: types.logout
    }

    // Act
    const newState = authReducer(initialState, action);

    // Assert
    expect(newState).toEqual({ logged: false });
  });
});