import { Loader } from "components/Loader/Loader";
import MetaData from "components/MetaData/MetaData";
import SideBar from "pages/Admin/SideBar/SideBar";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, newProduct } from "redux/actions/productActions";
import { NEW_PRODUCT_RESET } from "redux/constants/productConstants";
import "./AddProduct.css";

const AddProduct = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const alert = useAlert();

	const [form, setForm] = useState({
		name: "",
		price: 0,
		description: "",
		category: "",
		stock: "",
		seller: "",
	});
	const [images, setImages] = useState([]);
	const [imagesPreview, setImagesPreview] = useState([]);

	const { loading, success, error } = useSelector(
		(state) => state.newProduct
	);

	useEffect(() => {
		if (success) {
			navigate("/admin/products");
			alert.success("Product created successfully");
			dispatch({ type: NEW_PRODUCT_RESET });
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [success, error, dispatch, alert]);

	const handleChange = (e) => {
		if (e.target.name === "images") {
			const files = Array.from(e.target.files);

			setImagesPreview([]);
			setImages([]);

			files.forEach((file) => {
				const reader = new FileReader();

				reader.onload = () => {
					if (reader.readyState === 2) {
						setImagesPreview((oldArray) => [
							...oldArray,
							reader.result,
						]);
						setImages((oldArray) => [...oldArray, reader.result]);
					}
				};

				reader.readAsDataURL(file);
			});
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
		formData.set("price", form?.price);
		formData.set("description", form?.description);
		formData.set("category", form?.category);
		formData.set("stock", form?.stock);
		formData.set("seller", form?.seller);
		images.forEach((image) => {
			formData.append("images", image);
		});

		dispatch(newProduct(formData));
	};

	const categories = [
		"Electronics",
		"Cameras",
		"Laptops",
		"Accessories",
		"Headphones",
		"Food",
		"Books",
		"Clothes/Shoes",
		"Beauty/Health",
		"Sports",
		"Outdoor",
		"Home",
	];

	return (
		<div className="page-add-product d-flex">
			<MetaData title="Add Product" />
			<div className="">
				<SideBar />
			</div>

			{loading ? (
				<Loader />
			) : (
				<main className="d-flex">
					<Form onSubmit={handleSubmit} className="form">
						<h1>Add product</h1>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="fw-bold">Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								onChange={handleChange}
								value={form?.name}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">Price</Form.Label>
							<Form.Control
								type="number"
								name="price"
								onChange={handleChange}
								value={form?.price}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">
								Description
							</Form.Label>
							<Form.Control
								as="textarea"
								style={{ height: "200px" }}
								name="description"
								onChange={handleChange}
								value={form?.description}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">
								Category
							</Form.Label>
							<Form.Select
								name="category"
								value={form?.category}
								onChange={handleChange}
								aria-label="Floating label select example">
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</Form.Select>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">Stock</Form.Label>
							<Form.Control
								defaultValue="0"
								type="number"
								name="stock"
								onChange={handleChange}
								value={form?.stock}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="fw-bold">
								Seller Name
							</Form.Label>
							<Form.Control
								type="text"
								name="seller"
								onChange={handleChange}
								value={form?.seller}
							/>
						</Form.Group>

						<Form.Group
							controlId="formFileMultiple"
							className="mb-3">
							<Form.Label className="fw-bold">Images</Form.Label>
							<Form.Control
								name="images"
								accept="image/*"
								type="file"
								onChange={handleChange}
								multiple
							/>

							<div className="d-flex">
								{imagesPreview.map((img) => (
									<div key={img} className="mt-3">
										<img
											src={img}
											alt=""
											style={{ width: 60, height: 60 }}
										/>
									</div>
								))}
							</div>
						</Form.Group>

						<button
							disabled={loading}
							type="submit"
							className="btn-orange btn-create">
							Create
						</button>
					</Form>
				</main>
			)}
		</div>
	);
};

export default AddProduct;
