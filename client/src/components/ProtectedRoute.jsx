import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth/useAuth";

export const ProtectedRoute = ({ component, redirectTo }) => {
  const { isAuthorized, isRefreshing } = useAuth();

  const shouldRecirect = !isAuthorized && !isRefreshing;

  return shouldRecirect ? <Navigate to={redirectTo} /> : component;
};
