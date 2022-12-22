import MetaData from "components/MetaData/MetaData";
import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import {
	clearErrors,
	getProductDetails,
	newReview,
} from "redux/actions/productActions";
import { useParams } from "react-router-dom";
import bintang from "components/Bintang/Bintang";
import { addItemCart } from "redux/actions/cartActions";
import { useAlert } from "react-alert";
import { Loader } from "components/Loader/Loader";
import { NEW_REVIEW_RESET } from "redux/constants/productConstants";

const ProductDetails = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const alert = useAlert();

	const [quantity, setQuantity] = useState(1);
	const [show, setShow] = useState(false);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");
	const handleClose = () => setShow(false);

	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	const { user } = useSelector((state) => state.auth);
	const { error: reviewError, success } = useSelector(
		(state) => state.newReview
	);

	useEffect(() => {
		dispatch(getProductDetails(id));

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (reviewError) {
			alert.error(reviewError);
		}

		if (success) {
			alert.success("Review posted successfully");
			dispatch({ type: NEW_REVIEW_RESET });
		}
	}, [dispatch, id, alert, error, success, reviewError]);

	const handlePlusQty = () => {
		const count = document.querySelector(".count");

		if (count.valueAsNumber >= product?.stock) return;

		const qty = count.valueAsNumber + 1;
		setQuantity(qty);
	};

	const handleMinusQty = () => {
		const count = document.querySelector(".count");

		if (count.valueAsNumber <= 1) return;

		const qty = count.valueAsNumber - 1;
		setQuantity(qty);
	};

	const addToCart = () => {
		dispatch(addItemCart(id, quantity));
		alert.success("Item added to Cart");
	};

	function HandleSetUserRatings() {
		setShow(true);

		const stars = document.querySelectorAll(".star");

		stars.forEach((star, index) => {
			star.starValue = index + 1;

			["click", "mouseover", "mouseout"].forEach(function (e) {
				star.addEventListener(e, showRatings);
			});
		});

		function showRatings(e) {
			stars.forEach((star, index) => {
				if (e.type === "click") {
					if (index < this.starValue) {
						star.classList.add("orange");

						setRating(this.starValue);
					} else {
						star.classList.remove("orange");
					}
				}

				if (e.type === "mouseover") {
					if (index < this.starValue) {
						star.classList.add("yellow");
					} else {
						star.classList.remove("yellow");
					}
				}

				if (e.type === "mouseout") {
					star.classList.remove("yellow");
				}
			});
		}
	}

	const handleReview = () => {
		const formData = new FormData();

		formData.set("rating", rating);
		formData.set("comment", comment);
		formData.set("productId", id);

		dispatch(newReview(formData));

		setShow(false);
	};

	return (
		<div className="page-prodetails mt-5">
			<MetaData title="Product Details" />

			{loading ? (
				<Loader />
			) : (
				<Container>
					<div className="d-flex">
						{product?.images?.map((image, index) => (
							<div key={index} className="col-6 wrap-img">
								<img
									src={image.url}
									alt=""
									className="position-absolute"
								/>
							</div>
						))}

						<div className="col-6 ms-5">
							<section className="col-9 mt-2">
								<h2>{product?.name}</h2>
								<p className="id-product">
									Product # {product?._id}
								</p>
								<div className="d-flex">
									<div>
										{bintang.map((item, index) => {
											if (
												item.rate === product?.ratings
											) {
												return (
													<p key={index}>
														{item?.element}
													</p>
												);
											}
										})}
									</div>
									<p className="jml-review">
										({product?.numOfReviews} Reviews)
									</p>
								</div>

								<p
									style={{
										fontSize: 45,
										fontWeight: 600,
										marginTop: 15,
									}}>
									${product?.price}
								</p>

								<div className="d-flex">
									<div className="d-flex">
										<Button
											variant="danger"
											className="btn-minus"
											onClick={handleMinusQty}>
											-
										</Button>
										<input
											style={{ fontSize: "1.2rem" }}
											type="number"
											className="d-flex align-items-center count"
											readOnly
											value={quantity}
										/>

										<Button
											className="btn-plus"
											onClick={handlePlusQty}>
											+
										</Button>
									</div>

									<div>
										<button
											onClick={addToCart}
											className="btn-orange btn-add">
											Add to Cart
										</button>
									</div>
								</div>

								<p className="status-stock">
									Status:{" "}
									<span className="stock">
										{product?.stock > 0
											? "In Stock"
											: "Off Stock"}
									</span>
								</p>

								<p
									style={{
										fontSize: "1.75rem",
										marginTop: "-8px",
										fontWeight: 500,
									}}>
									Description:
								</p>
								<p
									style={{
										fontSize: "1.1rem",
										fontWeight: 500,
									}}>
									{product?.description}
								</p>

								<p className="sold">
									Sold by:
									<span className="fw-bolder">
										{" "}
										{product?.seller}
									</span>
								</p>

								<div>
									{user ? (
										<button
											id="review_btn"
											type="button"
											className="btn-orange btn-submit mt-4"
											data-toggle="modal"
											data-target="#ratingModal"
											onClick={HandleSetUserRatings}>
											Submit Your Review
										</button>
									) : (
										<div
											className="alert alert-danger mt-5"
											type="alert">
											Login to post your review.
										</div>
									)}
								</div>

								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>
											{" "}
											Submit Review
										</Modal.Title>
									</Modal.Header>

									<Modal.Body>
										<>
											<ul
												onMouseOver={
													HandleSetUserRatings
												}
												className="stars">
												<li className="star">
													<i className="fa fa-star"></i>
												</li>
												<li className="star">
													<i className="fa fa-star"></i>
												</li>
												<li className="star">
													<i className="fa fa-star"></i>
												</li>
												<li className="star">
													<i className="fa fa-star"></i>
												</li>
												<li className="star">
													<i className="fa fa-star"></i>
												</li>
											</ul>

											<textarea
												name="review"
												id="review"
												className="form-control mt-3"
												value={comment}
												onChange={(e) =>
													setComment(e.target.value)
												}></textarea>
										</>
									</Modal.Body>

									<Modal.Footer>
										<Button
											onClick={handleReview}
											className="btn-orange py-2 px-5">
											Submit
										</Button>
									</Modal.Footer>
								</Modal>
							</section>
						</div>
					</div>

					<div style={{ maxWidth: "56rem", marginTop: 150 }}>
						<p className="border-bottom pb-3 h2 fw-normal">
							Other's Review:
						</p>

						{product?.reviews?.map((itemReview, index) => {
							return bintang?.map((item) => {
								if (itemReview.rating === item.rate) {
									return (
										<article
											key={index}
											className="border-bottom pb-2 mt-4">
											<span>{item.element}</span>
											<div
												className="ps-1"
												style={{
													color: "rgba(0,0,0,0.5)",
													fontSize: "0.9rem",
													marginTop: -4,
												}}>
												by {itemReview.name}
											</div>

											<p className="h5 pt-2 ps-1 fw-normal">
												{itemReview.comment}
											</p>
										</article>
									);
								}
							});
						})}
					</div>
				</Container>
			)}
		</div>
	);
};

export default ProductDetails;
