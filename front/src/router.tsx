import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { IApp } from "./interfaces";
import AuthRouter from "./routes/authRoutes";
import AppRouter from "./routes/appRoutes";

const IstosRouter: React.FC<IApp> = (props) => {
  const navigate = useNavigate();

  const navigateTo = (path: any) => navigate(path);

  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <AuthRouter isMobile={props.isMobile} navigateTo={navigateTo} />
          }
        />
        <Route
          path="/app/*"
          element={
            <AppRouter isMobile={props.isMobile} navigateTo={navigateTo} />
          }
        />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};

export default IstosRouter;
