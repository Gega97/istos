import DesktopView from "../views/main/desktop";
import MobileView from "../views/main/mobile";

import { IPage } from "../interfaces";
import { data } from "../data";

const Main: React.FC<IPage> = (props) => {
  // const { state, logout } = useContext(AppContext);

  return props.isMobile ? (
    <MobileView
      actionsPapers={data.actionsPapers}
      navigateTo={props.navigateTo}
    />
  ) : (
    <DesktopView />
  );
};

export default Main;
