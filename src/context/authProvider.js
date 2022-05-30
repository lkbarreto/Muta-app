import React, { createContext, useState } from "react";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [collectionItems, setCollectionItems] = useState([]);
  const [IDs, setIDs] = useState(0);
  return (
    <AuthContext.Provider
      value={{
        collectionItems,
        setCollectionItems,
        IDs,
        setIDs
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
