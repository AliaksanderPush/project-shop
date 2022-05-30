import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
);
