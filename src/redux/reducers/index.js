import { combineReducers } from "redux";
import {
	authReducer,
	userReducer,
	forgotPasswordReducer,
	allUsersReducer,
	userDetailsReducer,
} from "./userReducers";
import {
	productsReducer,
	newProductReducer,
	productReducer,
	productDetailsReducer,
	newReviewReducer,
	productReviewsReducer,
	reviewReducer,
} from "./productReducers";
import { cartReducer } from "./cartReducers";
import {
	newOrderReducer,
	myOrdersReducer,
	orderDetailsReducer,
	allOrdersReducer,
	orderReducer,
} from "./orderReducers";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	forgotPassword: forgotPasswordReducer,
	allUsers: allUsersReducer,
	userDetails: userDetailsReducer,
	products: productsReducer,
	product: productReducer,
	productDetails: productDetailsReducer,
	newProduct: newProductReducer,
	newReview: newReviewReducer,
	productReviews: productReviewsReducer,
	review: reviewReducer,
	cart: cartReducer,
	newOrder: newOrderReducer,
	myOrder: myOrdersReducer,
	orderDetails: orderDetailsReducer,
	allOrders: allOrdersReducer,
	order: orderReducer,
});

export default rootReducer;
