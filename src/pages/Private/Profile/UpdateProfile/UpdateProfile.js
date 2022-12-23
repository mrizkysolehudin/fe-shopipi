import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./UpdateProfile.css";
import MetaData from "components/MetaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
	clearErrors,
	loadUser,
	updateProfile,
} from "redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "redux/constants/userConstants";

const UpdateProfile = () => {
	const alert = useAlert();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const auth = useSelector((state) => state.auth);
	const { user } = auth;

	const { error, loading, isUpdated } = useSelector((state) => state.user);

	const [form, setForm] = useState({
		name: "",
		email: "",
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

	useEffect(() => {
		if (user) {
			setForm({
				...form,
				name: user?.name,
				email: user?.email,
				avatarPreview: user?.avatar?.url,
			});
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (isUpdated) {
			alert.success("User updated successfully");
			dispatch(loadUser());

			navigate("/myprofile");

			dispatch({
				type: UPDATE_PROFILE_RESET,
			});
		}
	}, [user, dispatch, error, alert, isUpdated, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.set("name", form?.name);
		formData.set("email", form?.email);
		formData.set("avatar", form?.avatar);

		dispatch(updateProfile(formData));
	};

	return (
		<div>
			<MetaData title="Update Profile" />

			<main className="page-update-profile">
				<Form onSubmit={handleSubmit} className="form">
					<h1>Update Profile</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Name</Form.Label>
						<Form.Control
							type="name"
							name="name"
							value={form?.name}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Email</Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={form?.email}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Avatar</Form.Label>
						<div className="d-flex align-items-center">
							<img src={form?.avatarPreview} alt="" />
							<Form.Control
								name="avatar"
								type="file"
								accept="image/*"
								className="input-file"
								onChange={handleChange}
							/>
							<div className="d-flex position-absolute label-input">
								<p className="choose">Choose Avatar</p>
								<p className="browse">Browse</p>
							</div>
						</div>
					</Form.Group>

					<button
						disabled={loading}
						type="submit"
						className="btn-orange btn-update">
						{loading ? "Please wait..." : "Update"}
					</button>
				</Form>
			</main>
		</div>
	);
};

export default UpdateProfile;
