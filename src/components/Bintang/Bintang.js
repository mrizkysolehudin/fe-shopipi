import { StarIcon } from "@heroicons/react/solid";
import StarIconOutline from "@heroicons/react/outline/StarIcon";
import React from "react";
import "./Bintang.css";

const bintang = [
	{
		element: (
			<div>
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
			</div>
		),
		rate: 5,
	},
	{
		element: (
			<div>
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIconOutline className="icon-star" />
			</div>
		),
		rate: 4,
	},
	{
		element: (
			<div>
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
			</div>
		),
		rate: 3,
	},
	{
		element: (
			<div>
				<StarIcon className="icon-star" />
				<StarIcon className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
			</div>
		),
		rate: 2,
	},
	{
		element: (
			<div>
				<StarIcon className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
			</div>
		),
		rate: 1,
	},
	{
		element: (
			<div>
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
				<StarIconOutline className="icon-star" />
			</div>
		),
		rate: 0,
	},
];

export default bintang;
