import React, { useState } from "react";
import MetaData from "components/MetaData/MetaData";
import SideBar from "pages/Admin/SideBar/SideBar";
import { Form } from "react-bootstrap";
import "./UpdateUser.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import {
	clearErrors,
	getUserDetails,
	updateUser,
} from "redux/actions/userActions";
import { UPDATE_USER_RESET } from "redux/constants/userConstants";
import { Loader } from "components/Loader/Loader";

const UpdateUser = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const alert = useAlert();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");

	const { user, error } = useSelector((state) => state.userDetails);
	const {
		isUpdated,
		error: updateError,
		loading,
	} = useSelector((state) => state.user);

	useEffect(() => {
		if (user?._id !== id) {
			dispatch(getUserDetails(id));
		} else {
			setName(user?.name);
			setEmail(user?.email);
			setRole(user?.role);
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (updateError) {
			alert.error(updateError);
			dispatch(clearErrors());
		}

		if (isUpdated) {
			navigate("/admin/users");
			alert.success("User updated successfully");
			dispatch({ type: UPDATE_USER_RESET });
		}
	}, [dispatch, isUpdated, alert, error, loading, updateError, id, user]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.set("name", name);
		formData.set("email", email);
		formData.set("role", role);

		dispatch(updateUser(user?._id, formData));
	};

	return (
		<div className="page-update-user d-flex">
			<MetaData title="Update User" />
			<div>
				<SideBar />
			</div>

			{loading ? (
				<Loader />
			) : (
				<main className="d-flex">
					<Form onSubmit={handleSubmit} className="form">
						<h1>Update User</h1>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="fw-bold">Name</Form.Label>
							<Form.Control
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">Email</Form.Label>
							<Form.Control
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">Role</Form.Label>
							<Form.Select
								value={role}
								onChange={(e) => setRole(e.target.value)}
								aria-label="Floating label select example">
								<option value="user">User</option>
								<option value="admin">Admin</option>
							</Form.Select>
						</Form.Group>

						<button
							type="submit"
							disabled={loading}
							className="btn-orange btn-update">
							Update
						</button>
					</Form>
				</main>
			)}
		</div>
	);
};

export default UpdateUser;
