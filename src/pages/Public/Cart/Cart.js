import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Container } from "react-bootstrap";
import usb from "assets/usb.jpg";
import "./Cart.css";
import { TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Cart = () => {
	return (
		<div className="pt-5 mt-5">
			<MetaData title="Cart" />

			<Container className="mt-4 page-cart">
				<h2 className="h2">
					Your Cart: <span className="fw-bolder">2 items</span>
				</h2>

				<main className="d-flex">
					<div style={{ width: "66%" }}>
						<article className="card-product-cart mt-4 row">
							<img src={usb} alt="" className="col-2" />

							<div className="name_price-cart col-4 d-flex">
								<Link to="" className="name">
									SanDisk Ultra 128GB SDXC UHS-I Memory Card
									up to 80MB/s
								</Link>
								<p className="title">$22</p>
							</div>

							<div className="d-flex col">
								<button className="btn-plus-cart">-</button>
								<p>22</p>
								<button className="btn-minus-cart">+</button>
							</div>

							<button className="col-1 btn-trash-cart">
								<TrashIcon
									style={{
										width: "1.25rem",
										height: "1.25rem",
										color: "red",
									}}
								/>
							</button>
						</article>

						<article className="product-card-cart mt-4 row">
							<img src={usb} alt="" className="col-2" />

							<div className="name_price-cart col-4 d-flex">
								<Link to="" className="name">
									SanDisk Ultra 128GB SDXC UHS-I Memory Card
									up to 80MB/s
								</Link>
								<p className="title">$22</p>
							</div>

							<div className="d-flex col">
								<button className="btn-plus-cart">-</button>
								<p>22</p>
								<button className="btn-minus-cart">+</button>
							</div>

							<button className="col-1 btn-trash-cart">
								<TrashIcon
									style={{
										width: "1.25rem",
										height: "1.25rem",
										color: "red",
									}}
								/>
							</button>
						</article>
					</div>

					<div style={{ width: "34%" }}>
						<section className="card-order">
							<h5>Order Summary</h5>

							<div className="d-flex justify-content-between">
								<p>Subtotal:</p>
								<span>33 (Units)</span>
							</div>

							<div className="d-flex justify-content-between total">
								<p>Est. total:</p>
								<span>$605.00</span>
							</div>

							<button className="btn-checkout">Check out</button>
						</section>
					</div>
				</main>
			</Container>
		</div>
	);
};

export default Cart;
