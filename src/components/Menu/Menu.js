import React, { Component } from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-domm
import { Route, Link } from "react-router-dom";

const menus = [
	{
		name: "Trang chủ",
		to: "/",
		exact: true,
	},
	{
		name: "Quản lý Sản phẩm",
		to: "/product-list",
		exact: false,
	},
];

// Struct của 1 đường link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			// {match} : cap ngoạc trong là ám chỉ match là object
			children={({ match }) => {
				var active = match ? "active" : "";
				return (
					<li className="nav-item">
						<Link to={to} className={`nav-link ${active}`}>
							{label}
						</Link>
					</li>
				);
			}}
		/>
	);
};

class Menu extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-expand-sm navbar-light"
				style={{ backgroundColor: "#DDE6ED" }}
			>
				<div className="container">
					<a className="navbar-brand">CALL API</a>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavId">
						<ul className="navbar-nav me-auto mt-2 mt-lg-0">
							{this.showMenus(menus)}
						</ul>
					</div>
				</div>
			</nav>
		);
	}

	// Show Menu
	showMenus(menus) {
		var result = null;

		if (menus.length > 0) {
			result = menus.map((menu, index) => {
				return (
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact}
					/>
				);
			});
		}

		return result;
	}
}

export default Menu;
