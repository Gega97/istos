import { useContext } from "react";

import DesktopView from "../views/profile/desktop";
import MobileView from "../views/profile/mobile";

import { IPage } from "../interfaces";
import { service } from "../service";
import { AppContext } from "../context";
import { Principal } from "@dfinity/principal";

const Profile: React.FC<IPage> = (props) => {
  const { logout, handleSidebar, handleLoading } = useContext(AppContext);

  const onLogout = async (): Promise<void> => {
    await service.onLogoutNFID();
    logout();
    props.navigateTo("/");
    handleSidebar(false);
  };

  const deleteUser = async (): Promise<void> => {
    handleLoading(true);
    const actor = await service.generateActor();
    const principal: string = await service.getPrincipal();
    await actor.deleteUser({ id: Principal.fromText(principal) });
    await onLogout();
    handleLoading(false);
  };

  return props.isMobile ? (
    <MobileView navigateTo={props.navigateTo} deleteUser={deleteUser} />
  ) : (
    <DesktopView />
  );
};

export default Profile;
