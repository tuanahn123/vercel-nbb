import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { getProfileFromLS, setProfileToLS, clearLS } from '../../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const profile = getProfileFromLS();
    setUser(profile);
  }, []);
  
  const loginAuth = useCallback((user) => {    
    setUser(user);
    setProfileToLS(user);
  }, []);

  const logoutAuth = useCallback(() => {
    setUser(null);
    clearLS();
  }, []);
  
  const isClb = user && user.type === 'club';
  const isUser = user && user.type === 'player';

  return (
    <AuthContext.Provider value={{ user, loginAuth, logoutAuth, isClb, isUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
