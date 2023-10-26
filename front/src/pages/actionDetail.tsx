import { useState, useEffect, useContext } from "react";

import DesktopView from "../views/actionDetail/desktop";
import MobileView from "../views/actionDetail/mobile";

import { useParams } from "react-router-dom";

import { IPage } from "../interfaces";
import { data } from "../data";
import { PaperActionItem } from "../types";
import { AppContext } from "../context";

const ActionDetail: React.FC<IPage> = (props) => {
  const { handleLoading } = useContext(AppContext);
  const [currentAction, setCurrentAction] = useState<
    PaperActionItem | undefined
  >(undefined);

  const params = useParams();

  useEffect(() => {
    handleLoading(true);
    setTimeout(() => {
      if (params.id) {
        const actions = data.actionsPapers;
        const currentAction = actions.find(
          (action: PaperActionItem) => action.id === Number(params.id)
        );
        if (currentAction) {
          setCurrentAction(currentAction);
        } else {
          props.navigateTo(-1);
        }
      } else {
        props.navigateTo(-1);
      }
      handleLoading(false);
    }, 3000);
  }, []);

  return props.isMobile ? (
    <MobileView navigateTo={props.navigateTo} currentAction={currentAction} />
  ) : (
    <DesktopView />
  );
};

export default ActionDetail;
