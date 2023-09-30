import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useAuth } from "./hook/useAuth/useAuth";
import { refreshUser } from "./redux/user/userOperations";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/homePage/HomePage";
import Registration from "./pages/Registration/Registration";

import { LoaderSpinner } from "./components/LoaderSpinner/loaderSpinner";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log(isRefreshing);

  return isRefreshing ? (
    <LoaderSpinner />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={<RestrictedRoute component={<HomePage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Registration />} />}
        />
      </Routes>
    </>
  );
}

export default App;
