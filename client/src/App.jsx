import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hook/useAuth/useAuth';
import { refreshUser } from './redux/user/userOperations';
import { RestrictedRoute } from './components/RestrictedRoute';
import { ProtectedRoute } from './components/ProtectedRoute';
import HomePage from './pages/homePage/HomePage';
import Registration from './pages/Registration/Registration';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CurrencyPage from './pages/CurrencyPage/CurrencyPage';
import { selectIsLoggedIn } from './redux/user/userSelectors';
import { LoaderSpinner } from './components/LoaderSpinner/loaderSpinner';
import { getFinance } from './redux/finance/financeOperations';
import DiagramTab from './pages/DiagramTab/DiagramTab';
import Layout from './components/Layout/Layout';
import { selectAddedTransaction } from './redux/finance/financeSelectors';

function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const addedTransaction = useSelector(selectAddedTransaction);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	useEffect(() => {
		if (selectIsLoggedIn) dispatch(getFinance());
	}, [dispatch, isLoggedIn, addedTransaction]);

	return isRefreshing ? (
		<LoaderSpinner />
	) : (
		<>
			<Routes>
				<Route
					path='/'
					element={<RestrictedRoute component={<HomePage />} />}
				/>
				<Route
					path='/register'
					element={<RestrictedRoute component={<Registration />} />}
				/>

				<Route path='/' element={<Layout />}>
					<Route
						path='/home'
						element={
							<ProtectedRoute component={<DashboardPage />} redirectTo={'/'} />
						}
					/>
					<Route
						path='/currency'
						element={
							<ProtectedRoute component={<CurrencyPage />} redirectTo={'/'} />
						}
					/>
					<Route
						path='/statistics'
						element={
							<ProtectedRoute component={<DiagramTab />} redirectTo={'/'} />
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
