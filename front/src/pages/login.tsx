import { useContext } from "react";

import DesktopView from "../views/login/desktop";
import MobileView from "../views/login/mobile";

import { data } from "../data";
import { IPage } from "../interfaces";
import { service } from "../service";
import { AppContext } from "../context";
import { ActorConfig } from "@dfinity/agent";
import { User } from "../types";

const Login: React.FC<IPage> = (props) => {
  const { login, handleLoading } = useContext(AppContext);

  // const createUser = async (actor: any): Promise<void> => {
  //   const newUser = await actor.createUser({
  //     user: {
  //       },
  //   });

  //   return newUser;
  // };

  const onLogin = async (): Promise<void> => {
    handleLoading(true);

    try {
      const authClient = await service.createAuthClient();
      await authClient.login({
        onSuccess: async (): Promise<void> => {
          const actor = await service.generateActor();
          const user: User[] = await actor.getUserByCaller();
          console.log({ user: user.length });
          if (user.length === 0) {
            props.navigateTo("/app/register");

            // const newUser = await createUser(actor);
            // console.log({ newUser });
          } else {
            login(user[0]);
            props.navigateTo("/app/main");
          }
          handleLoading(false);
        },
        onError: (err: string | undefined): void => {
          console.log(err);
          handleLoading(false);
        },
        identityProvider: "https://nfid.one" + data.AUTH_PATH,
        windowOpenerFeatures:
          `left=${window.screen.width / 2 - 525 / 2}, ` +
          `top=${window.screen.height / 2 - 705 / 2},` +
          `toolbar=0,location=0,menubar=0,width=525,height=705`,
      });
    } catch (err: any) {
      console.log(err);
    }
  };

  return props.isMobile ? <MobileView onLogin={onLogin} /> : <DesktopView />;
};

export default Login;
