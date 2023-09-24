import { Route, Routes } from "react-router-dom";

import { RestrictedRoute } from "./components/RestrictedRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/homePage/HomePage";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
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
