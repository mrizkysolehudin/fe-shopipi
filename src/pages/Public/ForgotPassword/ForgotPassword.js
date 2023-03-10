import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Form } from "react-bootstrap";
import "./ForgotPassword.css";

const ForgotPassword = () => {
	return (
		<div>
			<MetaData title="Forgot Password" />
			<div className="container-forgot">
				<h1>Forgot Password</h1>

				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bolder">
							Enter Email
						</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<button className="btn-send-forgot">Send Email</button>
				</Form>
			</div>
		</div>
	);
};

export default ForgotPassword;
