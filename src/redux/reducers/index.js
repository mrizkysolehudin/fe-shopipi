import { combineReducers } from "redux";
import {
	authReducer,
	userReducer,
	forgotPasswordReducer,
	allUsersReducer,
	userDetailsReducer,
} from "./userReducers";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	forgotPassword: forgotPasswordReducer,
	allUsers: allUsersReducer,
	userDetails: userDetailsReducer,
});

export default rootReducer;
