import MetaData from "components/MetaData/MetaData";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Home.css";
import { StarIcon } from "@heroicons/react/solid";
import StarIconOutline from "@heroicons/react/outline/StarIcon";
import usb from "assets/usb.jpg";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = () => {
	const [price, setPrice] = useState([1, 1000]);

	useEffect(() => {}, [price]);

	return (
		<div>
			<MetaData title="Home" />

			<Container className="mt-4 page-home">
				<main className="col-12">
					<h1>Latest Products</h1>

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
										tipFormatter={(value) => `$${value}`}
										tipProps={{
											placement: "top",
											visible: true,
										}}
										value={price}
										onChange={(price) => setPrice(price)}
									/>
								</div>

								<div className="mx-5 mt-5 categories">
									<p className="h4">Categories</p>
									<div
										className="grid row"
										style={{ fontWeight: 500 }}>
										<span>Elcetronics</span>
										<span>Elcetronics</span>
										<span>Elcetronics</span>
										<span>Elcetronics</span>
										<span>Elcetronics</span>
										<span>Elcetronics</span>
										<span>Elcetronics</span>
									</div>
								</div>

								<div className="mx-5">
									<p className="ratings">Ratings</p>
									<div>
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
									</div>{" "}
									<div>
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIconOutline className="icon-star" />
									</div>
									<div>
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIconOutline className="icon-star" />
										<StarIconOutline className="icon-star" />
									</div>
									<div>
										<StarIcon className="icon-star" />
										<StarIcon className="icon-star" />
										<StarIconOutline className="icon-star" />
										<StarIconOutline className="icon-star" />
										<StarIconOutline className="icon-star" />
									</div>
									<div>
										<StarIcon className="icon-star" />
										<StarIconOutline className="icon-star" />
										<StarIconOutline className="icon-star" />
										<StarIconOutline className="icon-star" />
										<StarIconOutline className="icon-star" />
									</div>
								</div>
							</section>
						</div>

						<div
							className="col-10 grid row gap-4 mt-5"
							style={{ marginLeft: 120 }}>
							<article className="card-product col-3 me-2">
								<div className="d-flex justify-content-center">
									<img src={usb} alt="" />
								</div>

								<div>
									<p
										className="h5"
										style={{ fontWeight: 500 }}>
										SanDisk Ultra 128GB SDXC UHS-I Memory
										Card up to 80MB/s
									</p>
									<div className="d-flex">
										<span>
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
										</span>
										<p className="reviews">(0 reviews)</p>
									</div>

									<p
										className="h4"
										style={{ marginTop: "-10px" }}>
										$11
									</p>

									<button className="btn-orange btn-details">
										View Details
									</button>
								</div>
							</article>

							<article className="card-product col-3">
								<div className="d-flex justify-content-center">
									<img src={usb} alt="" />
								</div>

								<div>
									<p
										className="h5"
										style={{ fontWeight: 500 }}>
										SanDisk Ultra 128GB SDXC UHS-I Memory
										Card up to 80MB/s
									</p>
									<div className="d-flex">
										<span>
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
										</span>
										<p className="reviews">(0 reviews)</p>
									</div>

									<p
										className="h4"
										style={{ marginTop: "-10px" }}>
										$11
									</p>

									<button className="btn-orange btn-details">
										View Details
									</button>
								</div>
							</article>
							<article className="card-product col-3">
								<div className="d-flex justify-content-center">
									<img src={usb} alt="" />
								</div>

								<div>
									<p
										className="h5"
										style={{ fontWeight: 500 }}>
										SanDisk Ultra 128GB SDXC UHS-I Memory
										Card up to 80MB/s
									</p>
									<div className="d-flex">
										<span>
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
										</span>
										<p className="reviews">(0 reviews)</p>
									</div>

									<p
										className="h4"
										style={{ marginTop: "-10px" }}>
										$11
									</p>

									<button className="btn-orange btn-details">
										View Details
									</button>
								</div>
							</article>
							<article className="card-product col-3">
								<div className="d-flex justify-content-center">
									<img src={usb} alt="" />
								</div>

								<div>
									<p
										className="h5"
										style={{ fontWeight: 500 }}>
										SanDisk Ultra 128GB SDXC UHS-I Memory
										Card up to 80MB/s
									</p>
									<div className="d-flex">
										<span>
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
											<StarIconOutline className="icon-star" />
										</span>
										<p className="reviews">(0 reviews)</p>
									</div>

									<p
										className="h4"
										style={{ marginTop: "-10px" }}>
										$11
									</p>

									<button className="btn-orange btn-details">
										View Details
									</button>
								</div>
							</article>
						</div>
					</div>
				</main>
			</Container>
		</div>
	);
};

export default Home;
