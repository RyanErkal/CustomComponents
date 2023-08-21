import React from "react";
import CloseButton from "./CloseButton";
import Inbox from "./Inbox";

export default function Tooltip({ color, styles, title, children }) {
	return (
		<div className={`tooltip ${color}`}>
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
