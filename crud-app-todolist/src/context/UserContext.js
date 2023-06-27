import React, { createContext, useReducer,useEffect } from 'react';
import { userReducer } from './userReducer';
import { getUsers} from '../services/api';


export const UserContext = createContext();

const initialState = {
  users: []
};

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      dispatch({ type: 'SET_USERS', payload: fetchedUsers });
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
