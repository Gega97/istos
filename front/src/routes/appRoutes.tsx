import { useEffect, useContext } from "react";
import { Routes, Route, Location } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { IPage } from "../interfaces";
import { service } from "../service";
import Main from "../pages/main";
import AppBar from "../components/appBar";
import Drawer from "../components/drawer";
import ActionDetail from "../pages/actionDetail";
// import NavigationBar from "../components/navigationBar";
import { AppContext } from "../context";
import Profile from "../pages/profile";
import Register from "../pages/register";
import { User } from "../types";

const AppRouter: React.FC<IPage> = (props) => {
  const { state, handleLoading } = useContext(AppContext);
  const location: Location = useLocation();
  const getPrincipal = async (): Promise<void> => {
    const identity = await service.getPrincipal();
    if (identity === "2vxsx-fae") props.navigateTo("/auth/login");
  };

  useEffect(() => {
    getPrincipal();
  }, [location.pathname]);

  return (
    <>
      {location.pathname.split("/")[2] !== "register" && (
        <AppBar navigateTo={props.navigateTo} />
      )}
      {location.pathname.split("/")[2] !== "register" && (
        <Drawer navigateTo={props.navigateTo} />
      )}

      <Routes>
        <Route
          path="main"
          element={
            <Main isMobile={props.isMobile} navigateTo={props.navigateTo} />
          }
        />
        <Route
          path="action/detail/:id"
          element={
            <ActionDetail
              isMobile={props.isMobile}
              navigateTo={props.navigateTo}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile isMobile={props.isMobile} navigateTo={props.navigateTo} />
          }
        />
        <Route
          path="/register"
          element={
            <Register isMobile={props.isMobile} navigateTo={props.navigateTo} />
          }
        />
      </Routes>
      {/* <NavigationBar navigateTo={props.navigateTo} /> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </>
  );
};

export default AppRouter;
