import { createContext, useReducer } from "react";
export const Context = createContext();


const INITIAL_STATE = {
  currencies: [], chats: ["Hola soy ConvertIO. Escribe la cantidad que desas convertir", '']
};

const ContextReducer = (state, action) => {
  switch (action.type) {
    case "ADDCHAT":
      return {
        ...state,
        chats: [...state.chats, action.payload]
      }
    case "CURRENCIES":
      return {
        ...state,
        currencies: [...action.payload]
      }
    default:
      return state;
  }
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(ContextReducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};