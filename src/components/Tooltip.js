import React from "react";
import CloseButton from "./CloseButton";
import Inbox from "./Inbox";

export default function Tooltip({ color, size = "lg", title, children }) {
	return (
		<div
			className={`tooltip ${color} ${
				size === "sm"
					? "tooltip-sm"
					: size === "md"
					? "tooltip-md"
					: "tooltip=lg"
			}`}>
			<div className="tooltip-icon">
				<Inbox stroke={color} />
			</div>
			<div className="tooltip-text">
				<h3>{title}</h3>
				<div className="tooltip-paragraph">{children}</div>
			</div>
			<div className="tooltip-x">
				<CloseButton stroke={color} />
			</div>
		</div>
	);
}
