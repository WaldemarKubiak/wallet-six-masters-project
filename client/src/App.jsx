import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useAuth } from "./hook/useAuth/useAuth";
import { refreshUser } from "./redux/user/userOperations";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/homePage/HomePage";
import Registration from "./pages/Registration/Registration";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";
import { selectIsLoggedIn } from "./redux/user/userSelectors";
import { LoaderSpinner } from "./components/LoaderSpinner/loaderSpinner";
import { getFinance } from "./redux/finance/financeOperations";
import DiagramTab from './pages/DiagramTab/DiagramTab';

function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();
	const isLoggedIn = useSelector(selectIsLoggedIn);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


	useEffect(() => {
		if (selectIsLoggedIn) dispatch(getFinance());
	}, [dispatch, isLoggedIn]);


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
				<Route path="/home" element={<DashboardPage />} />
				<Route path="/currency" element={<CurrencyPage />} />
        <Route path='/statistics' element={<DiagramTab />} />
			</Routes>
		</>
	);
}

export default App;
