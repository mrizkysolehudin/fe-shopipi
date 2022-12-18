import MetaData from "components/MetaData/MetaData";
import React from "react";
import Form from "react-bootstrap/Form";
import "./ChangePassword.css";

const ChangePassword = () => {
	return (
		<div className="page-change-password">
			<MetaData title="Change Password" />

			<main>
				<Form className="form">
					<h1>Change Password</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">
							Old Password
						</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">
							New Password
						</Form.Label>
						<Form.Control type="password" />
					</Form.Group>

					<button className="btn-orange btn-update">
						Update Password
					</button>
				</Form>
			</main>
		</div>
	);
};

export default ChangePassword;
