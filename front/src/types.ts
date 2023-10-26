export type IstosActions =
  | {
      type: "logout";
    }
  | {
      type: "login";
      payload: User;
    }
  | {
      type: "loading";
      payload: boolean;
    }
  | {
      type: "sidebar";
      payload: boolean;
    };

export type IstosState = {
  user: User | undefined;
  loading: boolean;
  isOpenSidebar: boolean;
};

export type User = {
  avatar: number[];
  description: string;
  id?: any;
  name: string;
  username: string;
};

export type CreateUser = {
  avatar: number[];
  description: string;
  name: string;
  username: string;
};

export type IstosContext = {
  state: IstosState;
  login: (user: User) => void;
  logout: () => void;
  handleLoading: (action: boolean) => void;
  handleSidebar: (action: boolean) => void;
};

export type SidebarItem = {
  id: number;
  title: string;
  path: string;
  action: () => void;
  // icon: React.ReactNode;
};

export type PaperActionItem = {
  id: number;
  title: string;
  image: string;
  amount: string;
  address: string;
  contributors: number;
};
