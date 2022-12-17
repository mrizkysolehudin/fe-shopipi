import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Button, Container } from "react-bootstrap";
import usb from "assets/usb.jpg";
import "./ProductDetails.css";
import { StarIcon } from "@heroicons/react/solid";

const ProductDetails = () => {
	return (
		<div className="page-prodetails mt-5">
			<MetaData title="Product Details" />

			<Container className="d-flex">
				<div className="col-6 wrap-img">
					<img src={usb} alt="" className="position-absolute" />
				</div>

				<div className="col-6 ms-5">
					<section className="col-9 mt-2">
						<h2>
							SanDisk Ultra 128GB SDXC UHS-I Memory Card up to
							80MB/s
						</h2>
						<p className="id-product">
							Product # 4639b121679889398238493
						</p>
						<div className="d-flex rating">
							<p>
								<StarIcon className="icon-star" />
								<StarIcon className="icon-star" />
								<StarIcon className="icon-star" />
								<StarIcon className="icon-star" />
								<StarIcon className="icon-star" />
							</p>
							<p className="jml-review">(0 Reviews)</p>
						</div>

						<p
							style={{
								fontSize: 45,
								fontWeight: 600,
								marginTop: 15,
							}}>
							$11
						</p>

						<div className="d-flex">
							<div className="d-flex">
								<Button variant="danger" className="btn-minus">
									-
								</Button>
								<div
									className="d-flex align-items-center"
									style={{ fontSize: "1.2rem" }}>
									22
								</div>
								<Button className="btn-plus">+</Button>
							</div>

							<div>
								<button className="btn-orange btn-add">
									Add to Cart
								</button>
							</div>
						</div>

						<p className="status-stock">
							Status: <span className="stock">In Stock</span>
						</p>

						<p
							style={{
								fontSize: "1.75rem",
								marginTop: "-8px",
								fontWeight: 500,
							}}>
							Description:
						</p>
						<p style={{ fontSize: "1.1rem", fontWeight: 500 }}>
							Monitor a CAN network, write a CAN program and
							communicate with industrial, medical, automotive or
							other CAN based device. Connect CAN FD and CAN
							networks to a computer via USB with the CAN USB FD
							adapter.
						</p>

						<p className="sold">
							Sold by:
							<span className="fw-bolder"> Ebay</span>
						</p>

						<div>
							<button className="btn-orange btn-submit">
								Submit Your Review
							</button>
						</div>
					</section>
				</div>
			</Container>
		</div>
	);
};

export default ProductDetails;
