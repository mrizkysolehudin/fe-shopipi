import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
	const navigate = useNavigate();

	const [keyword, setKeyword] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();

		if (keyword.trim()) {
			navigate(`/search/${keyword}`);
		} else {
			navigate("/");
		}
	};

	useEffect(() => {}, [navigate, keyword]);

	return (
		<form onSubmit={handleSearch} className="search-input">
			<input
				onChange={(e) => setKeyword(e.target.value)}
				type="text"
				placeholder="Enter Product Name ..."
			/>

			<button type="submit" className="btn-search">
				<SearchIcon className="search-icon" />
			</button>
		</form>
	);
};

export default Search;
