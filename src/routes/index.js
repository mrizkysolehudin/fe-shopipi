import Login from "pages/Public/Login/Login";
import React, { useEffect, useState } from "react";
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
import AddProduct from "pages/Admin/Product/AddProduct/AddProduct";
import Reviews from "pages/Admin/Reviews/Reviews";
import UpdateProduct from "pages/Admin/Product/UpdateProduct/UpdateProduct";
import UpdateUser from "pages/Admin/Users/UpdateUser/UpdateUser";
import store from "redux/store";
import { loadUser } from "redux/actions/userActions";
import { useSelector } from "react-redux";
import axios from "axios";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProductsList from "pages/Admin/Product/ProductsList/ProductsList";
import OrdersList from "pages/Admin/OrdersList/OrdersList";
import UsersList from "pages/Admin/Users/UsersList/UsersList";

const AppRoutes = () => {
	const [stripeApiKey, setStripeApiKey] = useState("");

	useEffect(() => {
		store.dispatch(loadUser());

		async function getStripeApiKey() {
			const { data } = await axios.get("/api/v1/stripeapi");

			setStripeApiKey(data.stripeApiKey);
		}

		getStripeApiKey();
	}, []);

	const { user, isAuthenticated, loading } = useSelector(
		(state) => state.auth
	);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<SNavbar />
						<PublicRoute />

						{(!loading && !isAuthenticated) ||
							(user?.role !== "admin" && <Footer />)}
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

				<Route
					path="/payment"
					element={
						<>
							{stripeApiKey && (
								<Elements stripe={loadStripe(stripeApiKey)}>
									<Payment />
								</Elements>
							)}
						</>
					}
				/>
				<Route path="/success" element={<OrderSuccess />} />
			</Route>

			<Route
				path="/"
				element={
					<>
						<SNavbar />
						<PublicRoute />
					</>
				}>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/admin/product" element={<AddProduct />} />
				<Route path="/admin/product/:id" element={<UpdateProduct />} />
				<Route path="/admin/reviews" element={<Reviews />} />
				<Route path="/admin/user/:id" element={<UpdateUser />} />
				<Route path="/admin/products" element={<ProductsList />} />
				<Route path="/admin/orders" element={<OrdersList />} />
				<Route path="/admin/users" element={<UsersList />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
