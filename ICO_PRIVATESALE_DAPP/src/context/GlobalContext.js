import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  account: null,
  bnbBalance: null,
  tokenBalance: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const delAccount = () => {
    dispatch({
      type: "DELETE_ACCOUNT",
    });
  };

  const addAccount = (account) => {
    dispatch({
      type: "ADD_ACCOUNT",
      payload: account.id,
    });
  };

  const updateTokenBalance = (balance) => {
    dispatch({
      type: "UPDATE_TOKEN_BALANCE",
      payload: balance,
    });
  };

  const updateBNBBalance = (balance) => {
    dispatch({
      type: "UPDATE_BNB_BALANCE",
      payload: balance,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        account: state.account,
        bnbBalance: state.bnbBalance,
        tokenBalance: state.tokenBalance,
        delAccount,
        addAccount,
        updateTokenBalance,
        updateBNBBalance,
      }}
    >
      {children}{" "}
    </GlobalContext.Provider>
  );
};
