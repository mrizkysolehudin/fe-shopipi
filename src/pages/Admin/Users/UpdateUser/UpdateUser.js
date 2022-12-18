import React from "react";
import MetaData from "components/MetaData/MetaData";
import SideBar from "pages/Admin/SideBar/SideBar";
import { Form } from "react-bootstrap";
import "./UpdateUser.css";

const UpdateUser = () => {
	return (
		<div className="page-update-user d-flex">
			<MetaData title="Update User" />
			<div>
				<SideBar />
			</div>

			<main className="d-flex">
				<Form className="form">
					<h1>Update User</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Email</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Role</Form.Label>
						<Form.Select aria-label="Floating label select example">
							<option>user</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Form.Group>

					<button className="btn-orange btn-update">Update</button>
				</Form>
			</main>
		</div>
	);
};

export default UpdateUser;
