import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
