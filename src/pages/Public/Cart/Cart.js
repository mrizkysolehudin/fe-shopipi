import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Container } from "react-bootstrap";
import "./Cart.css";
import { TrashIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart, removeItemFromCart } from "redux/actions/cartActions";

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const auth = useSelector((state) => state.auth);
	const { isAuthenticated } = auth;

	const handlePlusQty = (id, quantity, stock) => {
		const newQty = quantity + 1;

		if (newQty > stock) return;

		dispatch(addItemCart(id, newQty));
	};

	const handleMinusQty = (id, quantity) => {
		const newQty = quantity - 1;

		if (newQty <= 0) return;

		dispatch(addItemCart(id, newQty));
	};

	const handleRemoveCartItem = (id) => {
		dispatch(removeItemFromCart(id));
	};

	const handleCheckout = () => {
		if (isAuthenticated) {
			navigate(`/shipping`);
		} else {
			navigate("/login");
		}
	};

	return (
		<div>
			<MetaData title="Cart" />

			{cartItems?.length === 0 ? (
				<p
					className="h1 text-center"
					style={{
						color: "rgba(0,0,0,0.3)",
						marginTop: "14rem",
						marginBottom: "16rem",
					}}>
					Your cart is empty
				</p>
			) : (
				<Container className="mt-4 page-cart">
					<h2 className="h2">
						Your Cart:{" "}
						<span className="fw-bolder">
							{cartItems?.length} items
						</span>
					</h2>

					<main className="d-flex">
						<div style={{ width: "66%" }}>
							{cartItems?.map((cartItem, index) => (
								<article
									key={index}
									className="card-product-cart mt-4 row">
									<img
										src={cartItem?.image}
										alt=""
										className="col-2"
									/>

									<div className="name_price-cart col-4 d-flex">
										<Link
											to={`/product/${cartItem.product}`}
											className="name">
											{cartItem?.name}
										</Link>
										<p className="title ms-4">
											${cartItem?.price}
										</p>
									</div>

									<div
										className="d-flex col mt-2"
										style={{ marginLeft: -20 }}>
										<button
											onClick={() =>
												handleMinusQty(
													cartItem.product,
													cartItem.quantity
												)
											}
											className="btn-minus-cart me-4">
											-
										</button>
										<input
											readOnly
											type="number"
											value={cartItem.quantity}
											className="count "
											style={{ height: "fit-content" }}
										/>
										<button
											onClick={() =>
												handlePlusQty(
													cartItem.product,
													cartItem.quantity,
													cartItem.stock
												)
											}
											className="btn-plus-cart">
											+
										</button>
									</div>

									<button
										onClick={() =>
											handleRemoveCartItem(
												cartItem.product
											)
										}
										className="col-1 btn-trash-cart mt-2">
										<TrashIcon
											style={{
												width: "1.25rem",
												height: "1.25rem",
												color: "red",
											}}
										/>
									</button>
								</article>
							))}
						</div>

						<div style={{ width: "34%" }}>
							<section className="card-order">
								<h5>Order Summary</h5>

								<div className="d-flex justify-content-between">
									<p>Subtotal:</p>
									<span>
										{cartItems?.reduce(
											(acc, item) =>
												acc + Number(item.quantity),
											0
										)}{" "}
										(Units)
									</span>
								</div>

								<div className="d-flex justify-content-between total">
									<p>Est. total:</p>
									<span>
										$
										{cartItems
											?.reduce(
												(acc, item) =>
													acc +
													item.quantity * item.price,
												0
											)
											.toFixed(2)}
									</span>
								</div>

								<button
									onClick={() => handleCheckout()}
									className="btn-checkout">
									Check out
								</button>
							</section>
						</div>
					</main>
				</Container>
			)}
		</div>
	);
};

export default Cart;
