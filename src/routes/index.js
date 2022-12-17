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
import MyProfile from "pages/Private/Profile/MyProfile";

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

				<Route path="/myprofile" element={<MyProfile />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
