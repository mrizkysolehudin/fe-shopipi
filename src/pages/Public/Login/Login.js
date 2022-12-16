import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className="mt-5 pt-5">
			<div className="container-log">
				<Form>
					<h1>Login</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Email</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>

					<div className="d-flex justify-content-between mb-3 px-1 link">
						<Link to="/register">Register?</Link>
						<Link to="/password/forgot">Forgot Password?</Link>
					</div>

					<button className="btn-login-log" type="submit">
						Login
					</button>
				</Form>
			</div>
		</div>
	);
};

export default Login;
