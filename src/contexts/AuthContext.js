import React, { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  return (
    <>
      <AuthContext.Provider>
        {children}
      </AuthContext.Provider>
    </>
  );
}
