import React from "react";
import Check from "../media/check.svg";
import Exclamation from "../media/exclamation.svg";
import Error from "../media/xcircle.svg";
import Info from "../media/icon.svg";

export default function Banner({ status = "default", children = "" }) {
	let color;
	let title;
	let svg;
	switch (status) {
		case "success":
			color = "green";
			title = "Success";
			svg = Check;
			break;
		case "warning":
			color = "yellow";
			title = "Warning";
			svg = Exclamation;
			break;
		case "error":
			color = "red";
			title = "Error";
			svg = Error;
			break;
		default:
			color = "blue";
			title = "Info";
			svg = Info;
	}

	return (
		<div className={`banner ${color}`}>
			<img src={svg} alt={title} />
			<div className="banner-text">
				<h3>{title}</h3>
				{children}
			</div>
		</div>
	);
}
