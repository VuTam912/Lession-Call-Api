import React, { Component } from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-domm
import { Link } from "react-router-dom";

class ProductItem extends Component {
	onDelete = (id) => {
		if (confirm("Bạn chắc chắn muốn xóa ?")) {
			this.props.onDelete(id);
		}
	};

	render() {
		var { product, index } = this.props;
		// check status to set text,css..
		var statusName = product.status ? "Còn Hàng" : "Hết hàng";
		var statusClass = product.status ? "warning" : "danger";
		var statusText = product.status ? "text-dark" : "text-light";
		return (
			<tr>
				<th>{index + 1}</th>
				<th>{product.id}</th>
				<th>{product.name}</th>
				<th>{product.price}</th>
				<td>
					<span className={`badge bg-${statusClass} ${statusText}`}>
						{statusName}
					</span>
				</td>
				<td>
					{/* để chuyển đến trang product/id/edit nên cần đến thẻ Link  */}
					<Link to={`/product/${product.id}/edit`} className="btn btn-success">
						Sửa
					</Link>
					&nbsp;
					<button
						type="button"
						className="btn btn-danger"
						onClick={() => this.onDelete(product.id)}
					>
						Xoá
					</button>
				</td>
			</tr>
		);
	}
}

export default ProductItem;
