import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "" });
  useEffect(() => {
    const tempAuth = JSON.stringify(localStorage.getItem("auth"));
    if (tempAuth) {
      setAuth({ user: tempAuth.user, token: tempAuth.token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
