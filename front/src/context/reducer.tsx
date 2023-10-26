import { IstosActions, IstosState } from "../types";

export const AppReducer = (
  state: IstosState,
  action: IstosActions
): IstosState => {
  switch (action.type) {
    case "logout":
      return {
        ...state,
        user: undefined,
      };

    case "login":
      return {
        ...state,
        user: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "sidebar":
      return {
        ...state,
        isOpenSidebar: action.payload,
      };

    default:
      return state;
  }
};
