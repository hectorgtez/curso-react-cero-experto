import { useState } from 'react';
import PropTypes from 'prop-types';

import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.array,
}