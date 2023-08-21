import React from "react";

export default function Badge({ color, rounded = false, children = "Badge" }) {
	return (
		<div className={`badge ${color} ${rounded ? "rounded" : ""}`}>
			{children}
		</div>
	);
}
