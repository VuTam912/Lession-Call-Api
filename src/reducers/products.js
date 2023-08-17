import * as Types from "./../constants/ActionTypes";
var initialState = [];
//Cac ham Thuc thi xu ly tac vu del,update,get....

var findIndex = (products, id) => {
	var result = -1; // -1 => not found
	products.forEach((product, index) => {
		if (product.id === id) {
			result = index;
		}
	});
	return result;
};

const products = (state = initialState, action) => {
	var index = -1;
	var { id, product } = action;
	switch (action.type) {
		// Lay all DATA
		case Types.FETCH_PRODUCTS:
			// copy data va tra ve data (da copy)
			state = action.products;
			return [...state];
		// Delete a data by id
		case Types.DELETE_PRODUCT:
			index = findIndex(state, id);
			// cat voi 1 phan tu o vi tri index
			state.splice(index, 1);
			return [...state];
		// add a new product
		case Types.ADD_PRODUCT:
			state.push(action.product);
			return [...state];
		// update a product
		case Types.UPDATE_PRODUCT:
			index = findIndex(state, product.id);
			state[index] = product;
			return [...state];
		default:
			return [...state];
	}
};

export default products;
