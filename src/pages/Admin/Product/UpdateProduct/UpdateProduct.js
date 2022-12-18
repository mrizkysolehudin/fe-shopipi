import React from "react";
import MetaData from "components/MetaData/MetaData";
import SideBar from "pages/Admin/SideBar/SideBar";
import { Form } from "react-bootstrap";
import "./UpdateProduct.css";

const UpdateProduct = () => {
	return (
		<div className="page-update-product d-flex">
			<MetaData title="Update Product" />
			<div className="">
				<SideBar />
			</div>

			<main className="d-flex">
				<Form className="form">
					<h1>Update product</h1>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Price</Form.Label>
						<Form.Control type="number" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Description</Form.Label>
						<Form.Control
							as="textarea"
							style={{ height: "200px" }}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Category</Form.Label>
						<Form.Select aria-label="Floating label select example">
							<option>Electronics</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label className="fw-bold">Stock</Form.Label>
						<Form.Control defaultValue="0" type="number" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="fw-bold">Seller Name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label className="fw-bold">Images</Form.Label>
						<Form.Control type="file" />
					</Form.Group>

					<button className="btn-orange btn-update">Create</button>
				</Form>
			</main>
		</div>
	);
};

export default UpdateProduct;
