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
});

export default rootReducer;
