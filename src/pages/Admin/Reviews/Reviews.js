import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Button, Form } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import "./Reviews.css";

const Reviews = () => {
	return (
		<div className="page-reviews d-flex">
			<MetaData title="Reviews" />

			<div>
				<SideBar />
			</div>

			<main>
				<Form className="form">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">
							Enter Product ID
						</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Button className="btn-search">SEARCH</Button>
				</Form>

				<p className="text-center mt-5">No Reviews.</p>
			</main>
		</div>
	);
};

export default Reviews;
