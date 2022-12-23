import MetaData from "components/MetaData/MetaData";
import React, { useState } from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import Form from "react-bootstrap/Form";
import "./Shipping.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "redux/actions/cartActions";
import { countries } from "countries-list";

const Shipping = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { shippingInfo } = cart;

	const [address, setAddress] = useState(shippingInfo.address);
	const [city, setCity] = useState(shippingInfo.city);
	const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
	const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
	const [country, setCountry] = useState(shippingInfo.country);

	const countryList = Object.values(countries);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			saveShippingInfo({ address, city, phoneNo, postalCode, country })
		);

		navigate("/confirm");
	};

	return (
		<div>
			<MetaData title="Shipping" />

			<CheckoutSteps shipping />

			<main className="page-shipping">
				<Form onSubmit={handleSubmit} className="form">
					<h1>Shipping Info</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Address</Form.Label>
						<Form.Control
							type="text"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">City</Form.Label>
						<Form.Control
							type="text"
							value={city}
							onChange={(e) => setCity(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Phone No</Form.Label>
						<Form.Control
							type="phone"
							value={phoneNo}
							onChange={(e) => setPhoneNo(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Postal Code</Form.Label>
						<Form.Control
							type="number"
							value={postalCode}
							onChange={(e) => setPostalCode(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Country</Form.Label>
						<Form.Select
							aria-label="Default select example"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							required>
							{countryList.map((country) => (
								<option key={country.name} value={country.name}>
									{country.name}
								</option>
							))}
						</Form.Select>
					</Form.Group>

					<button type="submit" className="btn-orange btn-continue">
						Continue
					</button>
				</Form>
			</main>
		</div>
	);
};

export default Shipping;
