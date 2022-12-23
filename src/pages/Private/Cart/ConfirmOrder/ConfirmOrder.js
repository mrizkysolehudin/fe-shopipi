import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Container } from "react-bootstrap";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import "./ConfirmOrder.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
	const navigate = useNavigate();

	const auth = useSelector((state) => state.auth);
	const { user } = auth;
	const cart = useSelector((state) => state.cart);
	const { cartItems, shippingInfo } = cart;

	const subTotalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const shippingPrice = subTotalPrice > 200 ? 0 : 25;
	const taxPrice = Number((0.05 * subTotalPrice).toFixed(2));
	const totalPrice = (subTotalPrice + shippingPrice + taxPrice).toFixed(2);

	const processToPayment = () => {
		const data = {
			subTotalPrice: subTotalPrice.toFixed(2),
			shippingPrice,
			taxPrice,
			totalPrice,
		};

		sessionStorage.setItem("orderInfo", JSON.stringify(data));
		navigate("/payment");
	};

	return (
		<div>
			<MetaData title="Confim Order" />

			<Container className="page-confirm">
				<CheckoutSteps shipping confirmOrder />

				<main className="d-flex">
					<div className="col-9 left">
						<section className="shipping">
							<h3 className="h2">Shipping Info</h3>
							<div className="ms-4 mt-4">
								<p>
									<span className="fw-bolder">Name:</span>{" "}
									{user?.name}
								</p>
								<p>
									<span className="fw-bolder">Phone:</span>{" "}
									{shippingInfo?.phoneNo}
								</p>
								<p className="d-flex">
									<span className="fw-bolder me-2">
										Address:
									</span>{" "}
									{shippingInfo?.address},{" "}
									{shippingInfo?.city},{" "}
									{shippingInfo?.postalCode},{" "}
									{shippingInfo?.country}
								</p>
							</div>
						</section>

						<section className="mt-4">
							<h3>Your Cart Items:</h3>

							<div className="d-grid mt-4 gap-4">
								{cartItems?.map((cartItem, index) => (
									<article
										key={index}
										className="card-product">
										<img src={cartItem?.image} alt="" />

										<p className="col-6 title">
											{cartItem?.name}
										</p>

										<p className="col-auto price">
											{cartItem?.quantity} x $
											{cartItem?.price} ={" "}
											<span className="fw-bold">
												{(
													cartItem.quantity *
													cartItem.price
												).toFixed(2)}
											</span>
										</p>
									</article>
								))}
							</div>
						</section>
					</div>

					<div className="card-order">
						<h3>Order Summary</h3>

						<section>
							<div className="d-flex justify-content-between">
								<p>Subtotal:</p>
								<span className="fw-bolder">
									${subTotalPrice.toFixed(2)}
								</span>
							</div>
							<div className="d-flex justify-content-between">
								<p>Shipping:</p>
								<span className="fw-bolder">
									${shippingPrice}
								</span>
							</div>
							<div className="d-flex justify-content-between">
								<p>Tax:</p>
								<span className="fw-bolder">${taxPrice}</span>
							</div>

							<div className="d-flex justify-content-between total">
								<p>Total:</p>
								<span className="fw-bolder">${totalPrice}</span>
							</div>

							<button
								onClick={processToPayment}
								className="btn-orange btn-proceed">
								Proceed to Payment
							</button>
						</section>
					</div>
				</main>
			</Container>
		</div>
	);
};

export default ConfirmOrder;
