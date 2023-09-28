import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useAuth } from './hook/useAuth/useAuth';
import { refreshUser } from './redux/user/userOperations';
import { RestrictedRoute } from './components/RestrictedRoute';
// import { ProtectedRoute } from './components/ProtectedRoute';
import HomePage from './pages/homePage/HomePage';
import Registration from './pages/Registration/Registration';
import DiagramTab from './pages/DiagramTab/DiagramTab';

function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<h2>Loading...</h2>
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
				<Route path='/statistics' element={<DiagramTab />} />
			</Routes>
		</>
	);
}

export default App;
