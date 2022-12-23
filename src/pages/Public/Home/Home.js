import MetaData from "components/MetaData/MetaData";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Home.css";
import { StarIcon } from "@heroicons/react/solid";
import StarIconOutline from "@heroicons/react/outline/StarIcon";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "redux/actions/productActions";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { useAlert } from "react-alert";
import Product from "../Product/Product";
import Pagination from "react-js-pagination";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const alert = useAlert();

	const products = useSelector((state) => state.products);
	const { loading, error, productsCount, resPerPage, filteredProductsCount } =
		products;

	const [currentPage, setCurrentPage] = useState(1);
	const [price, setPrice] = useState([1, 1000]);
	const [category, setCategory] = useState("");
	const [rating, setRating] = useState(0);

	const setCurrentPageNo = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	let count = productsCount;

	const keyword = params?.keyword;

	if (keyword) {
		count = filteredProductsCount;
	}

	useEffect(() => {
		if (error) {
			return alert.error(error);
		}

		dispatch(getProducts(keyword, currentPage, price, category, rating));
	}, [price, dispatch, keyword, currentPage, category, rating, error, alert]);

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

	const bintang = [
		<div>
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
		</div>,
		<div>
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIconOutline className="icon-star" />
		</div>,
		<div>
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIconOutline className="icon-star" />
			<StarIconOutline className="icon-star" />
		</div>,
		<div>
			<StarIcon className="icon-star" />
			<StarIcon className="icon-star" />
			<StarIconOutline className="icon-star" />
			<StarIconOutline className="icon-star" />
			<StarIconOutline className="icon-star" />
		</div>,
		<div>
			<StarIcon className="icon-star" />
			<StarIconOutline className="icon-star" />
			<StarIconOutline className="icon-star" />
			<StarIconOutline className="icon-star" />
			<StarIconOutline className="icon-star" />
		</div>,
	];

	return (
		<div>
			<MetaData title="Home" />

			<Container className="mt-4 page-home">
				<h1>Latest Products</h1>

				{loading ? (
					<Loader />
				) : (
					<main className="col-12">
						<div className="d-flex col-12">
							<div className="col-2">
								<section className="row pt-5 ">
									<div className="px-4 mx-5 slider">
										<Range
											marks={{
												1: `$1`,
												1000: `$1000`,
											}}
											min={1}
											max={1000}
											defaultValue={[1, 1000]}
											tipFormatter={(value) =>
												`$${value}`
											}
											tipProps={{
												placement: "top",
												visible: true,
											}}
											value={price}
											onChange={(price) =>
												setPrice(price)
											}
										/>
									</div>

									<div className="mx-5 mt-5 categories">
										<p className="h4">Categories</p>
										<div
											className="grid row"
											style={{ fontWeight: 500 }}>
											{categories.map(
												(category, index) => (
													<button
														onClick={() =>
															setCategory(
																category
															)
														}
														key={index}
														className="link-category">
														{category}
													</button>
												)
											)}
										</div>
									</div>

									<div className="mx-5">
										<p className="rate">Ratings</p>

										<div>
											{bintang.reverse() &&
												bintang.map((star, index) => (
													<span
														onClick={() =>
															setRating(index + 1)
														}
														className="bintang">
														{star}
													</span>
												))}
										</div>
									</div>
								</section>
							</div>

							<div
								className="col-10 grid row gap-4 mt-5"
								style={{ marginLeft: 120 }}>
								{loading ? (
									<Loader />
								) : products?.products?.length <= 0 ? (
									<p className="text-center mt-5 pt-5 h1 fw-bolder">
										No product found
									</p>
								) : (
									products?.products?.map((item) => (
										<Product item={item} />
									))
								)}
							</div>
						</div>

						{resPerPage <= count && (
							<div className="d-flex justify-content-center mt-5">
								<Pagination
									activePage={currentPage}
									itemsCountPerPage={resPerPage}
									totalItemsCount={productsCount}
									onChange={setCurrentPageNo}
									nextPageText="Next"
									prevPageText="Prev"
									firstPageText="First"
									lastPageText="Last"
									itemClass="page-item"
									linkClass="page-link"
								/>
							</div>
						)}
					</main>
				)}
			</Container>
		</div>
	);
};

export default Home;
