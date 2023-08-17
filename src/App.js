import React, { Component } from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-domm
import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
import routes from "./routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Menu />

					<div className="container my-3">
						<div className="row">
							{/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<button type="button" className="btn btn-primary">
								Thêm Sản phẩm
							</button>

							<ProductList />
							</div> */}

							{this.showContentMenus(routes)}
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}

	showContentMenus = (routes) => {
		var result = null;

		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				);
			});
		}

		return <Switch>{result}</Switch>;
	};
}

export default App;
