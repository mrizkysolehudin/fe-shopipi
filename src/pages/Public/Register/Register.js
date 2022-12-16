import { UserCircleIcon } from "@heroicons/react/solid";
import MetaData from "components/MetaData/MetaData";
import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
	return (
		<div className="mt-5 pt-5">
			<MetaData title="Register" />
			<div className="container-reg">
				<h1>Register</h1>

				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bolder">Name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bolder">Email</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bolder">Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>

					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label className="fw-bolder">Avatar</Form.Label>
						<div className="d-flex align-items-center position-relative">
							<UserCircleIcon className="user-icon-reg" />
							<Form.Control
								type="file"
								accept="image/*"
								className="input-file-reg"
							/>
							<div className="d-flex position-absolute lbl-input-file-reg">
								<div className="avatar">Choose Avatar</div>
								<div className="browse">Browse</div>
							</div>
						</div>
					</Form.Group>

					<Link to="" type="submit" className="btn-register">
						Register
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Register;
