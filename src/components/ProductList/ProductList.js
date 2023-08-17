import React, { Component } from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-domm

class ProductList extends Component {
	render() {
		return (
			<div className="card my-3">
				<div className="card-header">Danh sách Sản phẩm</div>
				<div className="card-body">
					<table className="table table-hover">
						<thead>
							<tr>
								<th>STT</th>
								<th>Mã</th>
								<th>Tên</th>
								<th>Giá</th>
								<th>Trạng Thái</th>
								<th>Hành Động</th>
							</tr>
						</thead>
						{/* - khi ở ProductListPage.js duoc khai bao nay:
							+ <ProductList>{this.showProducts(products)}</ProductList>
							+ => this.props.children
						 */}
						<tbody>{this.props.children}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ProductList;
