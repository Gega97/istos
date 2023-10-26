import { useReducer } from "react";
import { AppReducer } from "./reducer";
import { AppContext } from ".";
import { IstosContext, IstosState, User } from "../types";
import { ContextProviderProps } from "../interfaces";
import { service } from "../service";

// const getPrincipal = async (): Promise<string | undefined> => {
//   const identity = await service.getPrincipal();
//   if (identity === "2vxsx-fae") return undefined;
//   else return identity;
// };

const initialState: IstosState = {
  user: undefined,
  loading: false,
  isOpenSidebar: false,
};

const init = (): IstosState => {
  const user: User | undefined = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : undefined;
  initialState.user = user;
  return initialState;
};

export const AppProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, init);
  console.log({ state });
  const login = (user: User): void => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "login",
      payload: user,
    });
  };

  const logout = (): void => {
    dispatch({
      type: "logout",
    });
  };

  const handleLoading = (action: boolean): void => {
    dispatch({
      type: "loading",
      payload: action,
    });
  };

  const handleSidebar = (action: boolean): void => {
    dispatch({
      type: "sidebar",
      payload: action,
    });
  };

  const appContext: IstosContext = {
    state,
    login,
    logout,
    handleLoading,
    handleSidebar,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};
