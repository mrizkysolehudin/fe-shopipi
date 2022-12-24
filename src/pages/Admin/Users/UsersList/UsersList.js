import { Loader } from "components/Loader/Loader";
import MetaData from "components/MetaData/MetaData";
import { MDBDataTable } from "mdbreact";
import SideBar from "pages/Admin/SideBar/SideBar";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { allUsers, clearErrors, deleteUser } from "redux/actions/userActions";
import { DELETE_USER_RESET } from "redux/constants/userConstants";
import "./UsersList.css";

const UsersList = () => {
	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { users, error, loading } = useSelector((state) => state.allUsers);
	const { isDeleted } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(allUsers());

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (isDeleted) {
			alert.success("Deleted user successfully");
			navigate("/admin/users");
			dispatch({ type: DELETE_USER_RESET });
		}
	}, [dispatch, alert, error, isDeleted]);

	const handleDeleteUser = (id) => {
		dispatch(deleteUser(id));
	};

	const setUsers = () => {
		const data = {
			columns: [
				{
					label: "User ID",
					field: "id",
					sort: "asc",
				},
				{
					label: "Name",
					field: "name",
					sort: "asc",
				},
				{
					label: "Email",
					field: "email",
					sort: "asc",
				},
				{
					label: "Role",
					field: "role",
					sort: "asc",
				},
				{
					label: "Actions",
					field: "actions",
				},
			],
			rows: [],
		};

		users.forEach((user) => {
			data.rows.push({
				id: user?._id,
				name: user?.name,
				email: user?.email,
				role: user?.role,

				actions: (
					<div className="d-flex gap-2">
						<Link
							to={`/admin/user/${user._id}`}
							className="btn btn-primary py-1 px-2">
							<i className="fa fa-pencil"></i>
						</Link>
						<button
							className="btn btn-danger py-1 px-2 ml-2"
							onClick={() => handleDeleteUser(user._id)}>
							<i className="fa fa-trash"></i>
						</button>
					</div>
				),
			});
		});

		return data;
	};

	return (
		<div className="page-users-list d-flex">
			<MetaData title="Users List" />
			<div>
				<SideBar />
			</div>

			<main className="p-5">
				<h1>All users</h1>

				{loading ? (
					<Loader />
				) : (
					<MDBDataTable
						data={setUsers()}
						className="px-3 d-grid gap-3 data-table"
						bordered
						striped
						hover
					/>
				)}
			</main>
		</div>
	);
};

export default UsersList;
