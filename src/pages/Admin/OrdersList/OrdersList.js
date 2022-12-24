import { Loader } from "components/Loader/Loader";
import MetaData from "components/MetaData/MetaData";
import { MDBDataTable } from "mdbreact";
import React from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	allOrders,
	clearErrors,
	deleteOrder,
} from "redux/actions/orderActions";
import { DELETE_ORDER_RESET } from "redux/constants/orderConstants";
import SideBar from "../SideBar/SideBar";
import "./OrdersList.css";

const OrdersList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();

	const { loading, error, orders } = useSelector((state) => state.allOrders);
	const { isDeleted } = useSelector((state) => state.order);

	useEffect(() => {
		dispatch(allOrders());

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (isDeleted) {
			alert.success("Order deleted successfully");
			navigate("/admin/orders");
			dispatch({ type: DELETE_ORDER_RESET });
		}
	}, [dispatch, alert, error, isDeleted]);

	const handleDeleteOrder = (id) => {
		dispatch(deleteOrder(id));
	};

	const setOrders = () => {
		const data = {
			columns: [
				{
					label: "Order ID",
					field: "id",
					sort: "asc",
				},
				{
					label: "No of Items",
					field: "numofItems",
					sort: "asc",
				},
				{
					label: "Amount",
					field: "amount",
					sort: "asc",
				},
				{
					label: "Status",
					field: "status",
					sort: "asc",
				},
				{
					label: "Actions",
					field: "actions",
				},
			],
			rows: [],
		};

		orders.forEach((order) => {
			data.rows.push({
				id: order?._id,
				numofItems: order?.orderItems?.length,
				amount: `$${order?.totalPrice}`,
				status:
					order?.orderStatus &&
					String(order?.orderStatus).includes("Delivered") ? (
						<p style={{ color: "green" }}>{order.orderStatus}</p>
					) : (
						<p style={{ color: "red" }}>{order.orderStatus}</p>
					),
				actions: (
					<div className="d-flex gap-2">
						<Link
							to={`/admin/order/${order?._id}`}
							className="btn btn-primary py-1 px-2">
							<i className="fa fa-eye"></i>
						</Link>
						<button
							className="btn btn-danger py-1 px-2 ml-2"
							onClick={() => handleDeleteOrder(order?._id)}>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				),
			});
		});

		return data;
	};

	return (
		<div className="page-orders-list d-flex">
			<MetaData title="All Orders" />

			<div>
				<SideBar />
			</div>

			<main className="m-5">
				<h1>All Orders</h1>

				{loading ? (
					<Loader />
				) : (
					<MDBDataTable
						data={setOrders()}
						className="px-3 d-grid gap-3 data-table"
						bordered
						striped
						hover
					/>
				)}
			</main>
		</div>
	);
};

export default OrdersList;
