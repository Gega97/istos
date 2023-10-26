//Top level interfaces

import { CreateUser, PaperActionItem } from "./types";

export interface IApp {
  isMobile: boolean;
}

export interface IPage {
  isMobile: boolean;
  navigateTo: (path: any) => void;
}

export type ContextProviderProps = {
  children: React.ReactNode;
};

//view interfaces

export interface ILoginView {
  onLogin: () => void;
}

export interface IRegisterView {
  onRegister: (payload: CreateUser) => void;
  navigateTo: (path: any) => void;
}

export interface IMainView {
  actionsPapers: PaperActionItem[];
  navigateTo: (path: any) => void;
}

export interface IActionDetailView {
  navigateTo: (path: any) => void;
  currentAction: PaperActionItem | undefined;
}

export interface IProfileView {
  deleteUser: () => void;
  navigateTo: (path: any) => void;
}

// Components interfaces

export interface ISidebarComponent {
  navigateTo: (path: any) => void;
}

export interface IPaperActionComponent {
  value: PaperActionItem;
  navigateTo: (path: any) => void;
}

export interface INavigationBarComponent {
  navigateTo: (path: any) => void;
}

export interface IAppBarComponent {
  navigateTo: (path: any) => void;
}

export interface ICarrouselComponent {
  data: string[];
}

export interface ITenderComponent {
  onClick: () => void;
  avatarURL: string;
  username: string;
}

export interface ISupportComponent {
  onDonate: () => void;
  onShared: () => void;
}

export interface IActionDescription {
  description: string;
}
