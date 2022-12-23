import MetaData from "components/MetaData/MetaData";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, updatePassword } from "redux/actions/userActions";
import { UPDATE_PASSWORD_RESET } from "redux/constants/userConstants";
import "./ChangePassword.css";

const ChangePassword = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();

	const user = useSelector((state) => state.user);
	const { loading, error, isUpdated } = user;

	const [oldPassword, setOldPassword] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.set("oldPassword", oldPassword);
		formData.set("password", password);

		dispatch(updatePassword(formData));
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (isUpdated) {
			alert.success("Password updated successfully");

			navigate("/myprofile");

			dispatch({
				type: UPDATE_PASSWORD_RESET,
			});
		}
	}, [error, loading, alert, isUpdated, dispatch, navigate]);

	return (
		<div className="page-change-password">
			<MetaData title="Change Password" />

			<main>
				<Form onSubmit={handleSubmit} className="form">
					<h1>Change Password</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">
							Old Password
						</Form.Label>
						<Form.Control
							type="password"
							value={oldPassword}
							onChange={(e) => setOldPassword(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">
							New Password
						</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<button
						disabled={loading}
						type="submit"
						className="btn-orange btn-update">
						{loading ? "Please wait..." : "Update Password"}
					</button>
				</Form>
			</main>
		</div>
	);
};

export default ChangePassword;
