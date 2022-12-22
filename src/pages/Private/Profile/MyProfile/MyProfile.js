import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Button, Container } from "react-bootstrap";
import "./MyProfile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader } from "components/Loader/Loader";

const MyProfile = () => {
	const auth = useSelector((state) => state.auth);
	const { user, loading } = auth;

	return (
		<div className="mt-5">
			<MetaData title="My Profile" />

			{loading ? (
				<Loader />
			) : (
				<Container className="page-myprofile">
					<h1 className="ms-4">My Profile</h1>

					<div className="col-12 d-flex mt-5 ">
						<section className="col-6 left-profile">
							<img src={user?.avatar?.url} alt="" />

							<div>
								<Link to="/myprofile/update">
									<button className="btn-orange btn-edit">
										Edit Profile
									</button>
								</Link>
							</div>
						</section>

						<section
							className="col-6 right-profile"
							style={{ marginTop: -15 }}>
							<div className="col-9">
								<div>
									<h5>Full Name</h5>
									<p>{user?.name}</p>
								</div>

								<div style={{ marginTop: 25 }}>
									<h5>Email Address</h5>
									<p>{user?.email}</p>
								</div>

								<div style={{ marginTop: 25 }}>
									<h5>Joined On</h5>
									<p>
										{String(user?.createdAt).substring(
											0,
											10
										)}
									</p>
								</div>

								{user?.role === "admin" ? (
									<Link to="/my-order">
										<Button
											style={{ marginTop: 40 }}
											variant="danger">
											My Orders
										</Button>
									</Link>
								) : null}
								<Link to="/password/change">
									<Button>Change Password</Button>
								</Link>
							</div>
						</section>
					</div>
				</Container>
			)}
		</div>
	);
};

export default MyProfile;
