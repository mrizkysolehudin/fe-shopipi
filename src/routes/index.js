import Login from "pages/Public/Login/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SNavbar from "../components/Navigation/Navbar/Navbar";
import PublicRoute from "../components/Navigation/PublicRoute/PublicRoute";
import Home from "../pages/Public/Home/Home";
import "../App.css";
import Register from "pages/Public/Register/Register";
import Footer from "components/Footer/Footer";
import ForgotPassword from "pages/Public/ForgotPassword/ForgotPassword";
import Cart from "pages/Public/Cart/Cart";
import ProductDetails from "pages/Public/Product/ProductDetails";
import MyProfile from "pages/Private/Profile/MyProfile/MyProfile";
import UpdateProfile from "pages/Private/Profile/UpdateProfile/UpdateProfile";
import ChangePassword from "pages/Public/ChangePassword/ChangePassword";
import Shipping from "pages/Private/Cart/Shipping/Shipping";
import Payment from "pages/Private/Cart/Payment/Payment";
import ConfirmOrder from "pages/Private/Cart/ConfirmOrder/ConfirmOrder";
import OrderSuccess from "pages/Private/Cart/OrderSuccess/OrderSuccess";
import Dashboard from "pages/Admin/Dashboard/Dashboard";

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<SNavbar />
						<PublicRoute />
						<Footer />
					</>
				}>
				<Route path="" element={<Home />} />
				<Route path="/search/:keyword" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/password/forgot" element={<ForgotPassword />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/password/change" element={<ChangePassword />} />

				<Route path="/myprofile" element={<MyProfile />} />
				<Route path="/myprofile/update" element={<UpdateProfile />} />
				<Route path="/shipping" element={<Shipping />} />
				<Route path="/confirm" element={<ConfirmOrder />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/success" element={<OrderSuccess />} />

				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
