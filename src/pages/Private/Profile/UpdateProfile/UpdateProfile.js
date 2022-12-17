import React from "react";
import Form from "react-bootstrap/Form";
import "./UpdateProfile.css";
import gon from "assets/gon.jpg";

const UpdateProfile = () => {
	return (
		<div>
			<main className="page-update-profile">
				<Form className="form">
					<h1>Update Profile</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Name</Form.Label>
						<Form.Control type="name" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Email</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Avatar</Form.Label>
						<div className="d-flex align-items-center">
							<img src={gon} alt="" />
							<Form.Control type="file" className="input-file" />
							<div className="d-flex position-absolute label-input">
								<p className="choose">Choose Avatar</p>
								<p className="browse">Browse</p>
							</div>
						</div>
					</Form.Group>

					<button className="btn-orange btn-update">Update</button>
				</Form>
			</main>
		</div>
	);
};

export default UpdateProfile;
