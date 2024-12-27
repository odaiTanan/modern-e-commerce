import React, { useState } from "react";
import { createContext } from "react";
/*context to update table component when press delete btn*/
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
