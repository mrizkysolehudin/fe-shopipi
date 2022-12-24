import React, { useEffect, useState } from "react";
import MetaData from "components/MetaData/MetaData";
import SideBar from "pages/Admin/SideBar/SideBar";
import { Form } from "react-bootstrap";
import "./UpdateProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	clearErrors,
	getProductDetails,
	updateProduct,
} from "redux/actions/productActions";
import { useAlert } from "react-alert";
import { UPDATE_ORDER_RESET } from "redux/constants/orderConstants";
import { Loader } from "components/Loader/Loader";

const UpdateProduct = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const alert = useAlert();

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [stock, setStock] = useState(0);
	const [seller, setSeller] = useState("");
	const [images, setImages] = useState([]);

	const [oldImages, setOldImages] = useState([]);
	const [imagesPreview, setImagesPreview] = useState([]);

	const { product, error } = useSelector((state) => state.productDetails);
	const {
		isUpdated,
		error: updateError,
		loading,
	} = useSelector((state) => state.product);

	useEffect(() => {
		if (product?._id !== id) {
			dispatch(getProductDetails(id));
		} else {
			setName(product?.name);
			setPrice(product?.price);
			setDescription(product?.description);
			setCategory(product?.category);
			setSeller(product?.seller);
			setStock(product?.stock);
			setOldImages(product?.images);
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
			navigate("/admin/products");
			alert.success("Product updated successfully");
			dispatch({ type: UPDATE_ORDER_RESET });
		}
	}, [dispatch, isUpdated, alert, loading, error, updateError, id, product]);

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

	const handleChange = (e) => {
		const files = Array.from(e.target.files);

		setImagesPreview([]);
		setImages([]);
		setOldImages([]);

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
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.set("name", name);
		formData.set("price", price);
		formData.set("description", description);
		formData.set("category", category);
		formData.set("stock", stock);
		formData.set("seller", seller);

		images.forEach((image) => {
			formData.append("images", image);
		});

		dispatch(updateProduct(product._id, formData));
	};

	return (
		<div className="page-update-product d-flex">
			<MetaData title="Update Product" />
			<div>
				<SideBar />
			</div>

			{loading ? (
				<Loader />
			) : (
				<main className="d-flex">
					<Form onSubmit={handleSubmit} className="form">
						<h1>Update product</h1>

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
							<Form.Label className="fw-bold">Price</Form.Label>
							<Form.Control
								type="number"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
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
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword">
							<Form.Label className="fw-bold">
								Category
							</Form.Label>
							<Form.Select
								aria-label="Floating label select example"
								value={category}
								onChange={(e) => setCategory(e.target.value)}>
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
								value={stock}
								onChange={(e) => setStock(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="fw-bold">
								Seller Name
							</Form.Label>
							<Form.Control
								type="text"
								value={seller}
								onChange={(e) => setSeller(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label className="fw-bold">Images</Form.Label>
							<Form.Control
								type="file"
								onChange={handleChange}
								multiple
							/>

							<div className="mt-3 d-flex gap-3">
								{oldImages &&
									oldImages.map((img) => (
										<img
											src={img ? img.url : ""}
											alt=""
											style={{ width: 60, height: 60 }}
										/>
									))}

								{imagesPreview.map((img) => (
									<img
										key={img}
										src={img ? img : ""}
										alt=""
										style={{ width: 60, height: 60 }}
									/>
								))}
							</div>
						</Form.Group>
						<button
							disabled={loading}
							type="submit"
							className="btn-orange btn-update">
							Update
						</button>
					</Form>
				</main>
			)}
		</div>
	);
};

export default UpdateProduct;
