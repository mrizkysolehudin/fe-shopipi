import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Container } from "react-bootstrap";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import "./ConfirmOrder.css";
import usb from "assets/usb.jpg";

const ConfirmOrder = () => {
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
									zeus nolimit
								</p>
								<p>
									<span className="fw-bolder">Phone:</span>{" "}
									324432
								</p>
								<p>
									<span className="fw-bolder">Address:</span>{" "}
									New York, South, 3433, USA
								</p>
							</div>
						</section>

						<section className="mt-4">
							<h3>Your Cart Items:</h3>

							<div className="d-grid mt-4 gap-4">
								<article className="card-product">
									<img src={usb} alt="" />

									<p className="col-6 title">
										SanDisk Ultra 128GB SDXC UHS-I Memory
										Card up to 80MB/s
									</p>

									<p className="col-auto price">
										11 x $11 ={" "}
										<span className="fw-bold">$121.00</span>
									</p>
								</article>

								<article className="card-product">
									<img src={usb} alt="" />

									<p className="col-6 title">
										SanDisk Ultra 128GB SDXC UHS-I Memory
										Card up to 80MB/s
									</p>

									<p className="col-auto price">
										11 x $11 ={" "}
										<span className="fw-bold">$121.00</span>
									</p>
								</article>
							</div>
						</section>
					</div>

					<div className="card-order">
						<h3>Order Summary</h3>

						<section>
							<div className="d-flex justify-content-between">
								<p>Subtotal:</p>
								<span className="fw-bolder">$605</span>
							</div>
							<div className="d-flex justify-content-between">
								<p>Shipping:</p>
								<span className="fw-bolder">$605</span>
							</div>
							<div className="d-flex justify-content-between">
								<p>Tax:</p>
								<span className="fw-bolder">$605</span>
							</div>

							<div className="d-flex justify-content-between total">
								<p>Total:</p>
								<span className="fw-bolder">$685</span>
							</div>

							<button className="btn-orange btn-proceed">
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
