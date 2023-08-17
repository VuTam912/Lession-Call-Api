import React, { Component } from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-domm

class NotFoundPage extends Component {
	render() {
		return (
			<div className="container">
				<div className="alert alert-warning" role="alert">
					<strong>404 - Không tìm Thấy Trang</strong>
				</div>
			</div>
		);
	}
}

export default NotFoundPage;
