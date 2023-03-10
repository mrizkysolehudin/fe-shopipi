import { ChevronRightIcon } from "@heroicons/react/solid";
import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div>
			<MetaData title="Dashboard" />

			<main className="page-dashboard col-12">
				<div>
					<SideBar />
				</div>

				<div className="content">
					<h1>Dashboard</h1>

					<section className="bg-primary text-center text-white total">
						<p>
							Total Amount <br />{" "}
							<span className="fw-bolder">$10</span>
						</p>
					</section>

					<section className="content-2">
						<div className="bg-success col-3">
							<p>
								Products <br />{" "}
								<span className="fw-bold">9</span>
							</p>
							<div>
								<Link to="/admin/products">
									View Details{" "}
									<span>
										<ChevronRightIcon className="icon-dashboard-xs" />
									</span>
								</Link>
							</div>
						</div>

						<div className="bg-danger col-3">
							<p>
								Orders <br />
								<span className="fw-bold">9</span>
							</p>
							<div>
								<Link to="/admin/orders">
									View Details{" "}
									<span>
										<ChevronRightIcon className="icon-dashboard-xs" />
									</span>
								</Link>
							</div>
						</div>

						<div className="bg-info col-3">
							<p>
								Users <br />
								<span className="fw-bold">9</span>
							</p>
							<div>
								<Link to="/admin/users">
									View Details{" "}
									<span>
										<ChevronRightIcon className="icon-dashboard-xs" />
									</span>
								</Link>
							</div>
						</div>

						<div className="bg-warning col-3 d-flex justify-content-center">
							<p>
								Out of Stock <br />
								<span className="fw-bold">9</span>
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
