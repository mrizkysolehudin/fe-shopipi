import MetaData from "components/MetaData/MetaData";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, register } from "redux/actions/userActions";
import "./Register.css";
import { useAlert } from "react-alert";
import { Loader } from "components/Loader/Loader";

const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const alert = useAlert();

	const auth = useSelector((state) => state?.auth);
	const { isAuthenticated, error, loading } = auth;

	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		avatar: "",
		avatarPreview: "/images/default_avatar.jpg",
	});

	const handleChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader?.readyState === 2) {
					setForm({
						...form,
						avatarPreview: reader.result,
						avatar: reader.result,
					});
				}
			};

			reader.readAsDataURL(e.target.files[0]);
		} else {
			setForm({
				...form,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.set("name", form?.name);
		formData.set("email", form?.email);
		formData.set("password", form?.password);
		formData.set("avatar", form?.avatar);

		dispatch(register(formData));
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [navigate, error, loading, dispatch, alert, isAuthenticated]);

	return (
		<div className="mt-5">
			<MetaData title="Register" />

			<div className="container-reg">
				<h1>Register</h1>

				{loading ? (
					<Loader />
				) : (
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label className="fw-bolder">Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								onChange={handleChange}
								value={form?.name}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="fw-bolder">Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								onChange={handleChange}
								value={form?.email}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bolder">
								Password
							</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleChange}
								value={form?.password}
							/>
						</Form.Group>

						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label className="fw-bolder">
								Avatar
							</Form.Label>
							<div className="d-flex align-items-center position-relative">
								<img
									src={form?.avatarPreview}
									alt=""
									className="user-icon-reg"
								/>
								<Form.Control
									type="file"
									accept="image/*"
									className="input-file-reg"
									name="avatar"
									onChange={handleChange}
								/>
								<div className="d-flex position-absolute lbl-input-file-reg">
									<div className="avatar">Choose Avatar</div>
									<div className="browse">Browse</div>
								</div>
							</div>
						</Form.Group>

						<button type="submit" className="btn-register">
							Register
						</button>
					</Form>
				)}
			</div>
		</div>
	);
};

export default Register;
