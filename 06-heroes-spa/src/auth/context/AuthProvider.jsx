import PropTypes from 'prop-types';
import { AuthContext } from "./AuthContext"
import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const handleLogin = (name = '') => {
    const user = { id: 'ABC', name: name };
    const action = {
      type: types.login,
      payload: user,
    }

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: handleLogin,
      logout: handleLogout,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.object,
}
