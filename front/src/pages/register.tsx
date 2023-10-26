import { useContext } from "react";

import DesktopView from "../views/register/desktop";
import MobileView from "../views/register/mobile";
import { IPage } from "../interfaces";
import { service } from "../service";
import { CreateUser } from "../types";
import { AppContext } from "../context";

const Register: React.FC<IPage> = (props) => {
  const { login, handleLoading } = useContext(AppContext);

  const createUser = async (payload: CreateUser): Promise<void> => {
    const actor = await service.generateActor();

    const newUser = await actor.createUser({
      user: payload,
    });
    if (newUser?.ok === null) {
      login(payload);
    }
    return newUser;
  };

  const onRegister = async (payload: CreateUser): Promise<void> => {
    handleLoading(true);
    await createUser(payload);
    handleLoading(false);
    props.navigateTo("/app/main");
  };

  return props.isMobile ? (
    <MobileView onRegister={onRegister} navigateTo={props.navigateTo} />
  ) : (
    <DesktopView />
  );
};

export default Register;
