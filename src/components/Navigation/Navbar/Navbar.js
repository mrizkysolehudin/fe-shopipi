import "./Navbar.css";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { logout } from "redux/actions/userActions";
import { useAlert } from "react-alert";
import Search from "components/Search/Search";

const SNavbar = () => {
	const dispatch = useDispatch();

	const auth = useSelector((state) => state.auth);
	const { isAuthenticated, user } = auth;

	const alert = useAlert();

	const handleLogout = () => {
		dispatch(logout());
		alert.success("Logged out successfully");
	};

	return (
		<nav className="nav">
			<Link to="/" className="nav-logo d-flex">
				<ShoppingCartIcon className="shop-icon" />
				<p>
					Shopi <span>pi</span>
				</p>
			</Link>

			<Search />

			<div className="d-flex align-items-center">
				<Link to="/cart" className="d-flex cart-wrapper">
					<p className="cart-white">Cart</p>
					<p className="cart">0</p>
				</Link>

				{isAuthenticated ? (
					<Link className="wrapper-avatar">
						<Dropdown>
							<Dropdown.Toggle
								variant="black"
								className="text-white fw-bolder">
								<img
									src={user?.avatar?.url}
									alt=""
									className="img-avatar"
								/>
								{user?.name}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{user?.role === "admin" && (
									<Link to="/dashboard">
										<Dropdown.Item href="/dashboard">
											Dashboard
										</Dropdown.Item>
									</Link>
								)}
								<Link to="/my-order">
									<Dropdown.Item href="/my-orders">
										Orders
									</Dropdown.Item>
								</Link>

								<Link to="/myprofile">
									<Dropdown.Item href="/myprofile">
										Profile
									</Dropdown.Item>
								</Link>

								<Dropdown.Item
									onClick={handleLogout}
									href=""
									className="btn-logout">
									Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Link>
				) : (
					<Link to="/login" className="ms-2 btn-login">
						Login
					</Link>
				)}
			</div>
		</nav>
	);
};

export default SNavbar;
