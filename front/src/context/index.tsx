import { createContext } from "react";
import { IstosContext, IstosState, User } from "../types";

const initialState: IstosState = {
  user: undefined,
  loading: false,
  isOpenSidebar: false,
};

export const AppContext = createContext<IstosContext>({
  state: initialState,
  login: (user: User) => {},
  logout: () => {},
  handleLoading: (action: boolean) => {},
  handleSidebar: (action: boolean) => {},
});
