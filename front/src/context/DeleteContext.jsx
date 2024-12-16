import React, { useState } from "react";
import { createContext } from "react";

export const deleteContext = createContext();

const DeleteContext = ({ children }) => {
  const [deleted, setDeleted] = useState(false);
  return (
    <deleteContext.Provider value={{ deleted, setDeleted }}>
      {children}
    </deleteContext.Provider>
  );
};

export default DeleteContext;
