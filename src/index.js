import React from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-domm
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// ReduxDevTools in chromes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// React - redux
const store = createStore(
	appReducers,
	composeEnhancers(applyMiddleware(thunk))
	// Other enhancers can be added here
);

const root = document.getElementById("root");
const rootElement = (
	<Provider store={store}>
		<App />
	</Provider>
);

// Sử dụng createRoot API để thay thế cho ReactDOM.render()
const rootApp = ReactDOM.createRoot(root);
rootApp.render(rootElement);
