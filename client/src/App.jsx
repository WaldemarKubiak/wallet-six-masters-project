import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/home" element={<DashboardPage />} />
				<Route path="/currency" element={<CurrencyPage />} />
			</Routes>
		</>
	);
}

export default App;
