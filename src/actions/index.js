import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/apiCaller";

// Su dung goi ham long nhau
// GET ALL DATA
export const actFetchProductsRequest = () => {
	return (dispatch) => {
		return callApi("products", "GET", null).then((res) => {
			dispatch(actFetchProducts(res.data));
		});
	};
};

export const actFetchProducts = (products) => {
	return {
		type: Types.FETCH_PRODUCTS,
		products,
	};
};

// DELETE PRODUCT
export const actDeleteProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`products/${id}`, "DELETE", null).then((res) => {
			dispatch(actDeleteProduct(res.id));
		});
	};
};

export const actDeleteProduct = (id) => {
	return {
		type: Types.DELETE_PRODUCT,
		id,
	};
};

// ADD PRODUCT
export const actAddProductRequest = (product) => {
	return (dispatch) => {
		return callApi("products", "POST", product).then((res) => {
			dispatch(actAddProduct(res.data));
		});
	};
};

export const actAddProduct = (product) => {
	return {
		type: Types.ADD_PRODUCT,
		product,
	};
};

// EDIT PRODUCT
export const actGetProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`products/${id}`, "GET", null).then((res) => {
			dispatch(actGetProduct(res.data));
		});
	};
};

export const actGetProduct = (product) => {
	return {
		type: Types.EDIT_PRODUCT,
		product,
	};
};

// UPDATE A PRODUCT

export const actUpdateProductRequest = (product) => {
	return (dispatch) => {
		return callApi(`products/${product.id}`, "PUT", product).then((res) => {
			dispatch(actUpdateProduct(res.data));
		});
	};
};

export const actUpdateProduct = (product) => {
	return {
		type: Types.UPDATE_PRODUCT,
		product,
	};
};
