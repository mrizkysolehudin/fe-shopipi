import "./Navbar.css";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const SNavbar = () => {
	return (
		<nav className="nav">
			<div className="nav-logo d-flex">
				<ShoppingCartIcon className="shop-icon" />
				<p>
					Shopi <span>pi</span>
				</p>
			</div>

			<div className="search-input">
				<input type="text" placeholder="Enter Product Name ..." />

				<Link to="/" className="btn-search">
					<SearchIcon className="search-icon" />
				</Link>
			</div>

			<div className="d-flex align-items-center">
				<Link to={1} className="d-flex cart-wrapper">
					<p className="cart-white">Cart</p>
					<p className="cart">0</p>
				</Link>

				<Link to="/login" className="ms-2 btn-login">
					Login
				</Link>
			</div>
		</nav>
	);
};

export default SNavbar;
