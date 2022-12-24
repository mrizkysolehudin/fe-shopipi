import React from "react";

import {
	ClipboardListIcon,
	FolderIcon,
	GlobeAltIcon,
	PlusIcon,
	StarIcon,
	UserGroupIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { NavDropdown } from "react-bootstrap";

const SideBar = () => {
	return (
		<nav className="menu">
			<Link to="/dashboard" className="d-flex">
				<GlobeAltIcon className="icon-dashboard" />
				Dashboard
			</Link>

			<Link to="" className="d-flex toogle-">
				<FolderIcon className="icon-dashboard" />
				<NavDropdown
					id="nav-dropdown-dark-example"
					title="Products"
					menuVariant="dark"
					className="h5">
					<div className="d-grid px-2">
						<Link to="/admin/products" className="text-dark">
							<FolderIcon className="icon-dashboard text-dark" />{" "}
							All
						</Link>
						<Link to="/admin/product" className="text-dark">
							<PlusIcon className="icon-dashboard text-dark" />
							Create
						</Link>
					</div>
				</NavDropdown>
			</Link>

			<Link to="/dashboard" className="d-flex">
				<ClipboardListIcon className="icon-dashboard" />
				Orders
			</Link>

			<Link to="/dashboard" className="d-flex">
				<UserGroupIcon className="icon-dashboard" />
				Users
			</Link>

			<Link to="/admin/reviews" className="d-flex">
				<StarIcon className="icon-dashboard" />
				Reviews
			</Link>
		</nav>
	);
};

export default SideBar;
