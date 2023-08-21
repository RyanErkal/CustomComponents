import React from "react";
import Cloud from "../media/cloud.svg";

export default function Card({
	title = "",
	children = "",
	hover = false,
	icon = Cloud
}) {
	return (
		<div className="card">
			<img className="card-image" src={icon} alt={icon} />
			<div className={`card-text ${hover ? "card-hover" : ""}`}>
				<h3>{title}</h3>
				<div className="card-paragraph">{children}</div>
			</div>
		</div>
	);
}
