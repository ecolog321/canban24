import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../lib/routes";
import { useUserContext } from "../context/hooks/useUser";

export const PrivateRoute = () => {
  const { user } = useUserContext();
  return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
};
