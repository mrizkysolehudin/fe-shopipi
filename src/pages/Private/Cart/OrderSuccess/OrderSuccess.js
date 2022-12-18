import { CheckCircleIcon } from "@heroicons/react/solid";
import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
	return (
		<div>
			<MetaData title="Order Success" />

			<main className="page-order-success">
				<CheckCircleIcon className="check" />
				<h1 className="h2">
					Your Order has been placed <br /> successfully
				</h1>
				<Link to="/my-orders" className="text-primary fw-bolder">
					Go to Orders
				</Link>
			</main>
		</div>
	);
};

export default OrderSuccess;
