import React, { Component } from "react"; // nạp thư viện React
import ReactDOM from "react-dom/client"; // thư viện react-domm
import { Link } from "react-router-dom";
import {
	actAddProductRequest,
	actGetProductRequest,
	actUpdateProductRequest,
} from "../../actions";
import { Connect, connect } from "react-redux";
import itemEditing from "../../reducers/itemEditing";

// Chúc nang xử lý edit, Add
class ProductActionPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			txtName: "",
			txtPrice: "",
			chkbStatus: "",
		};
	}

	// Ham thuc thi truoc khi render thuc hien
	// componentDidMount executes before it executes render component
	componentDidMount() {
		console.log("componentDidMount");
		// if have (main: ({ match }) => <ProductActionPage match={match} />>)
		var { match } = this.props;
		if (match) {
			var id = match.params.id;
			this.props.onEditProduct(id);
		}
	}

	// Xử lý thay đổi trong props hoặc state
	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log("componentWillUnmount");
		if (nextProps && nextProps.itemEditing) {
			var { itemEditing } = nextProps;
			this.setState({
				id: itemEditing.id,
				txtName: itemEditing.name,
				txtPrice: itemEditing.price,
				chkbStatus: itemEditing.status,
			});
		}
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({
			[name]: value,
		});
	};

	//  ADD a new Data (product)
	onSave = (e) => {
		e.preventDefault();
		var { id, txtName, txtPrice, chkbStatus } = this.state;
		var { history } = this.props;
		var product = {
			id: id,
			name: txtName,
			price: txtPrice,
			status: chkbStatus,
		};

		// update
		if (id) {
			// http://localhost:3000/products/:id => HTTP method : PUT
			this.props.onUpdateProduct(product);
			history.goBack();
			// Add a product
		} else {
			this.props.onAddProduct(product);
			//cap nhap xong quay lai trang product-list
			history.goBack();
		}
	};

	render() {
		var { txtName, txtPrice, chkbStatus } = this.state;

		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form onSubmit={this.onSave}>
					<div className="mb-3">
						<label className="form-label">Tên Sản Phẩm: </label>
						<input
							type="text"
							className="form-control"
							name="txtName"
							value={txtName}
							onChange={this.onChange}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Giá: </label>
						<input
							type="number"
							className="form-control"
							name="txtPrice"
							value={txtPrice}
							onChange={this.onChange}
						/>
					</div>
					<div className="">
						<label className="form-label">Trạng Thái: </label>
					</div>
					<div className="form-check">
						<label className="form-check-label">
							<input
								type="checkbox"
								className="form-check-input"
								name="chkbStatus"
								value={chkbStatus}
								onChange={this.onChange}
								// tick
								checked={chkbStatus ? true : false}
							/>
							Còn hàng
						</label>
					</div>
					<Link to="/product-list" className="btn btn-danger my-2">
						Trở lại
					</Link>
					&nbsp;
					<button type="submit" className="btn btn-primary my-2">
						Lưu lại
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		itemEditing: state.itemEditing,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddProduct: (product) => {
			dispatch(actAddProductRequest(product));
		},
		onEditProduct: (id) => {
			dispatch(actGetProductRequest(id));
		},
		onUpdateProduct: (product) => {
			dispatch(actUpdateProductRequest(product));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
