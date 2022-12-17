import MetaData from "components/MetaData/MetaData";
import React from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import Form from "react-bootstrap/Form";
import "./Shipping.css";

const Shipping = () => {
	return (
		<div>
			<MetaData title="Shipping" />

			<CheckoutSteps shipping />

			<main className="page-shipping">
				<Form className="form">
					<h1>Shipping Info</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Address</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">City</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Phone No</Form.Label>
						<Form.Control type="phone" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Postal Code</Form.Label>
						<Form.Control type="number" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Country</Form.Label>
						<Form.Select aria-label="Default select example">
							<option>Indonesia</option>
							<option value="1">Australia</option>
							<option value="2">Singapore</option>
							<option value="3">Japan</option>
						</Form.Select>
					</Form.Group>

					<button className="btn-orange btn-continue">
						Continue
					</button>
				</Form>
			</main>
		</div>
	);
};

export default Shipping;
