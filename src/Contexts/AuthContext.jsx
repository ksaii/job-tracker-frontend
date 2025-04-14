import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function that sets the user data
  const login = userData => {
    setUser(userData); // Save user data
  };

  // Logout function that clears the user data
  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// Custom hook to access AuthContext
export const useAuth = () => useContext(AuthContext);
