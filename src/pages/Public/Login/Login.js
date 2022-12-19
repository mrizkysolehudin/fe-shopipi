import MetaData from "components/MetaData/MetaData";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, login } from "redux/actions/userActions";
import { useAlert } from "react-alert";
import "./Login.css";
import { Loader } from "components/Loader/Loader";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();

	const auth = useSelector((state) => state.auth);
	const { isAuthenticated, error, loading } = auth;

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const onLogin = (e) => {
		e.preventDefault();
		dispatch(login(form.email, form.password));
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [isAuthenticated, error, loading, dispatch, alert, navigate]);

	return (
		<div>
			<MetaData title="Login" />

			{loading ? (
				<Loader />
			) : (
				<div className="container-log">
					<Form onSubmit={onLogin}>
						<h1>Login</h1>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="fw-bold">Email</Form.Label>
							<Form.Control
								name="email"
								type="email"
								onChange={handleChange}
								value={form?.email}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">
								Password
							</Form.Label>
							<Form.Control
								name="password"
								type="password"
								onChange={handleChange}
								value={form?.password}
							/>
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
			)}
		</div>
	);
};

export default Login;
