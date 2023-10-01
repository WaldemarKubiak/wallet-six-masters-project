import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth/useAuth";

// EWENUTLANIE ZMIENIĆ ŚCIEZKĘ REDIRECT TO JAK JUZ BEDZIE ZROBIONA TAMTA CZĘŚĆ
export const RestrictedRoute = ({ component, redirectTo = "/home" }) => {
  const { isAuthorized, isRefreshing } = useAuth();

	const shouldRecirect = !isAuthorized && !isRefreshing;

	return shouldRecirect ? component : <Navigate to={redirectTo} />;
};
