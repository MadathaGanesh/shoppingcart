import React, { createContext, useReducer } from "react";
import CartReducerFunction from "./CartReducerFunction";

export const cartcontext = createContext();
const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducerFunction, []);
  return (
    <cartcontext.Provider value={{ cart, dispatch }}>
      {children}
    </cartcontext.Provider>
  );
};

export default ContextProvider;
