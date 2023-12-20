import React, { useState, useMemo, useCallback } from 'react';
import getUserData from '../api';
import { SUBJECT_URL } from '../constants/apiUrl';

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const handleUserData = useCallback(async subjectId => {
    try {
      const userData = await getUserData(SUBJECT_URL, `${subjectId}/`);
      setUser(userData);
    } catch (error) {
      throw Error(error);
    }
  }, []);

  const providerValue = useMemo(
    () => ({ user, handleUserData }),
    [user, handleUserData],
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}
