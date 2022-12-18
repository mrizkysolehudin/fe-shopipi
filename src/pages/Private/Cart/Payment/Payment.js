import MetaData from "components/MetaData/MetaData";
import React from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import "./Payment.css";
import Form from "react-bootstrap/Form";

const Payment = () => {
	return (
		<div>
			<MetaData title="Payment" />

			<CheckoutSteps shipping confirmOrder payment />

			<main className="page-payment">
				<Form className="form">
					<h1>Card Info</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Card Number</Form.Label>
						<Form.Control
							type="number"
							placeholder="1234 1234 1234 1234"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Card Expire</Form.Label>
						<Form.Control type="text" placeholder="MM/YY" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Card CVC</Form.Label>
						<Form.Control type="text" placeholder="CVC" />
					</Form.Group>

					<button className="btn-orange btn-pay">Pay Order</button>
				</Form>
			</main>
		</div>
	);
};

export default Payment;
