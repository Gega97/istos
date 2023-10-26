import { useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

import { IPage } from "../interfaces";
import Login from "../pages/login";
import { service } from "../service";
import { AppContext } from "../context";

const AuthRouter: React.FC<IPage> = (props) => {
  const { state } = useContext(AppContext);

  const getPrincipal = async (): Promise<void> => {
    const identity = await service.getPrincipal();
    if (identity !== "2vxsx-fae") props.navigateTo("/app/main");
  };

  useEffect(() => {
    getPrincipal();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <Login isMobile={props.isMobile} navigateTo={props.navigateTo} />
          }
        />
        <Route path="/" element={<Navigate to="/auth/login" />} />
      </Routes>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </>
  );
};

export default AuthRouter;
