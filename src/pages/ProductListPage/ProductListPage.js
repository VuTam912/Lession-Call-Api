import React, { Component } from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-dom
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	actFetchProductsRequest,
	actDeleteProductRequest,
} from "../../actions/index";

class ProductListPage extends Component {
	// componentWillMount được gọi trước khi component được render lần đầu tiên
	// nghia la component thuc hien truoc khi xuat hien tren giao dien
	componentWillMount() {
		// note: Cài thêm redux-thunk và import { applyMiddleware } from redux
		// để fix lỗi :tác vụ bất đồng bộ.
		this.props.fetchAllProducts();
	}

	onDelete = (id) => {
		// xem o trong actions/index
		this.props.onDeleteProduct(id);
	};

	// goi sau khi componentWillMount thuc hien xong
	render() {
		// su dung redux de lay data tu Reducer

		// lay du lieu tu url API
		var { products } = this.props;

		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to="/product/add" className="btn btn-primary">
					Thêm Sản phẩm
				</Link>

				<ProductList>{this.showProducts(products)}</ProductList>
			</div>
		);
	}

	showProducts(products) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					// chuyen props cho ProductItem
					<ProductItem
						key={index}
						product={product}
						index={index} // STT
						onDelete={this.onDelete}
					/>
				);
			});
		}
		return result;
	}
}

// get data from store (reducer) => mới có thể sử dụng dc => this.props
const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

// thuc thi lay du lieu sau do truyen vao props
const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllProducts: () => {
			dispatch(actFetchProductsRequest());
		},
		onDeleteProduct: (id) => {
			dispatch(actDeleteProductRequest(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
