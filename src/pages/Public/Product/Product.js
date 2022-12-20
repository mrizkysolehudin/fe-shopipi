import React from "react";
import { Link } from "react-router-dom";
import StarIconOutline from "@heroicons/react/outline/StarIcon";

const Product = ({ item }) => {
	return (
		<article key={item._id} className="card-product col-3 me-2">
			<div className="d-flex flex-column justify-content-between">
				<img src={item.images[0].url} alt="" />
				<Link
					to={`/product/${item._id}`}
					className="h5 product-name"
					style={{ fontWeight: 500 }}>
					{item.name}
				</Link>
			</div>

			<div>
				<div className="d-flex">
					<span>
						<StarIconOutline className="icon-star" />
						<StarIconOutline className="icon-star" />
						<StarIconOutline className="icon-star" />
						<StarIconOutline className="icon-star" />
						<StarIconOutline className="icon-star" />
					</span>
					<p className="reviews">({item.reviews.length} reviews)</p>
				</div>

				<p className="h4" style={{ marginTop: "-10px" }}>
					${item.price}
				</p>

				<Link to={`/product/${item._id}`}>
					<button className="btn-orange btn-details">
						View Details
					</button>
				</Link>
			</div>
		</article>
	);
};

export default Product;
