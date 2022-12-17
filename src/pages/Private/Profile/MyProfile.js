import MetaData from "components/MetaData/MetaData";
import React from "react";
import { Button, Container } from "react-bootstrap";
import gon from "assets/gon.jpg";
import "./MyProfile.css";

const MyProfile = () => {
	return (
		<div className="mt-5">
			<MetaData title="My Profile" />

			<Container className="page-myprofile">
				<h1 className="ms-4">My Profile</h1>

				<div className="col-12 d-flex mt-5 ">
					<section className="col-6 left-profile">
						<img src={gon} alt="" />

						<div>
							<button className="btn-orange btn-edit">
								Edit Profile
							</button>
						</div>
					</section>

					<section
						className="col-6 right-profile"
						style={{ marginTop: 30 }}>
						<div className="col-9">
							<div>
								<h5>Full Name</h5>
								<p>Zeus nolimit</p>
							</div>

							<div style={{ marginTop: 25 }}>
								<h5>Email Address</h5>
								<p>zeus</p>
							</div>

							<div style={{ marginTop: 25 }}>
								<h5>Joined On</h5>
								<p>2022-12-15</p>
							</div>

							<Button style={{ marginTop: 40 }} variant="danger">
								My Orders
							</Button>
							<Button>Change Password</Button>
						</div>
					</section>
				</div>
			</Container>
		</div>
	);
};

export default MyProfile;
