import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const changeAuthentication = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, changeAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
