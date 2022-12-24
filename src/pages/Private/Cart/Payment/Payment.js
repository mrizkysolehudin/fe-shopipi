import MetaData from "components/MetaData/MetaData";
import React, { useEffect } from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import "./Payment.css";
import Form from "react-bootstrap/Form";
import { useAlert } from "react-alert";
import {
	useStripe,
	useElements,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createOrder } from "redux/actions/orderActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const options = {
	style: {
		base: {
			fontSize: "16px",
		},
		invalid: {
			color: "#9e2146",
		},
	},
};

const Payment = () => {
	const alert = useAlert();
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);
	const { cartItems, shippingInfo } = useSelector((state) => state.cart);
	const { error } = useSelector((state) => state.newOrder);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, alert, error]);

	const order = {
		orderItems: cartItems,
		shippingInfo,
	};

	const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

	if (orderInfo) {
		order.subTotalPrice = orderInfo?.subTotalPrice;
		order.shippingInfo = orderInfo?.shippingInfo;
		order.taxPrice = orderInfo?.taxPrice;
		order.totalPrice = orderInfo?.totalPrice;
	}

	const paymentData = {
		amount: Math.round(orderInfo?.totalPrice * 100),
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		document.querySelector("#pay_btn").disabled = true;

		let res;

		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			res = await axios.post(
				"/api/v1/payment/process",
				paymentData,
				config
			);

			const clientSecret = res.data.client_secret;
			console.log(clientSecret);

			if (!stripe || !elements) {
				return;
			}

			const result = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardNumberElement),
					billing_details: {
						name: user?.name,
						email: user?.email,
					},
				},
			});

			if (result.error) {
				alert.error(result.error.message);
				document.querySelector("#pay_btn").disabled = false;
			} else {
				if (result.paymentIntent.status === "succeeded") {
					order.paymentInfo = {
						id: result.paymentIntent.id,
						status: result.paymentIntent.status,
					};

					dispatch(createOrder(order));

					navigate("/success");
				} else {
					alert.error("There is some issue while payment processing");
				}
			}
		} catch (error) {
			document.querySelector("#pay_btn").disabled = false;
			alert.error(error.response.data.message);
		}
	};

	return (
		<div>
			<MetaData title="Payment" />

			<CheckoutSteps shipping confirmOrder payment />

			<main className="page-payment">
				<Form onSubmit={handleSubmit} className="form">
					<h1>Card Info</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Card Number</Form.Label>
						<CardNumberElement
							type="text"
							placeholder="1234 1234 1234 1234"
							options={options}
							className="border py-2 px-2"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Card Expire</Form.Label>
						<CardExpiryElement
							type="text"
							placeholder="MM/YY"
							options={options}
							className="border py-2 px-2"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Card CVC</Form.Label>
						<CardCvcElement
							type="text"
							placeholder="CVC"
							options={options}
							className="border py-2 px-2"
						/>
					</Form.Group>

					<button
						id="pay_btn"
						type="submit"
						className="btn-orange btn-pay">
						Pay {`- $${orderInfo && orderInfo?.totalPrice}`}
					</button>
				</Form>
			</main>
		</div>
	);
};

export default Payment;
