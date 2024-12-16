import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const SideBareCon = createContext();
const SideBarContext = ({ children }) => {
  const [barState, setBarState] = useState();
  return (
    <SideBareCon.Provider value={{ barState, setBarState }}>
      {children}
    </SideBareCon.Provider>
  );
};

export default SideBarContext;
