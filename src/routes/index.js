import Login from "pages/Public/Login/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SNavbar from "../components/Navigation/Navbar/Navbar";
import PublicRoute from "../components/Navigation/PublicRoute/PublicRoute";
import Home from "../pages/Public/Home/Home";

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<SNavbar />
						<PublicRoute />
					</>
				}>
				<Route path="" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
