import MetaData from "components/MetaData/MetaData";
import SideBar from "pages/Admin/SideBar/SideBar";
import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import {
	clearErrors,
	deleteProduct,
	getAdminProducts,
} from "redux/actions/productActions";
import { DELETE_PRODUCT_RESET } from "redux/constants/productConstants";
import { Loader } from "components/Loader/Loader";
import "./ProductsList.css";

const ProductsList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();

	const { loading, error, products } = useSelector((state) => state.products);
	const { error: deleteError, isDeleted } = useSelector(
		(state) => state.product
	);

	useEffect(() => {
		dispatch(getAdminProducts());

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (deleteError) {
			alert.error(deleteError);
			dispatch(clearErrors());
		}

		if (isDeleted) {
			alert.success("Product delete successfully");
			navigate("/admin/products");
			dispatch({ type: DELETE_PRODUCT_RESET });
		}
	}, [dispatch, alert, error, deleteError, isDeleted]);

	const setProducts = () => {
		const data = {
			columns: [
				{
					label: "ID",
					field: "id",
					sort: "asc",
				},
				{
					label: "Name",
					field: "name",
					sort: "asc",
				},
				{
					label: "Price",
					field: "price",
					sort: "asc",
				},
				{
					label: "Stock",
					field: "stock",
					sort: "asc",
				},
				{
					label: "Actions",
					field: "actions",
				},
			],
			rows: [],
		};

		products.forEach((product) => {
			data.rows.push({
				id: product?._id,
				name: product?.name,
				price: `$${product?.price}`,
				stock: product?.stock,
				actions: (
					<div className="d-flex gap-2">
						<Link
							to={`/admin/product/${product._id}`}
							className="btn btn-primary py-1 px-2">
							<i className="fa fa-pencil"></i>
						</Link>
						<button
							className="btn btn-danger py-1 px-2 ml-5"
							onClick={() => handleDeleteProduct(product._id)}>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				),
			});
		});

		return data;
	};

	const handleDeleteProduct = (id) => {
		dispatch(deleteProduct(id));
	};

	return (
		<div className="page-products-list d-flex">
			<MetaData title="All Products" />

			<div>
				<SideBar />
			</div>

			<main>
				<div className="">
					<h1 className="my-5">All Products</h1>

					{loading ? (
						<Loader />
					) : (
						<MDBDataTable
							data={setProducts()}
							className="px-3 gap-3 d-grid data-table"
							bordered
							striped
							hover
						/>
					)}
				</div>
			</main>
		</div>
	);
};

export default ProductsList;
