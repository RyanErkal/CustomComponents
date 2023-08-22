import React from "react";
import Banner from "./Banner";

export default function ToastContent({
	type,
	text,
	position = "bottom-right",
	onClose
}) {
	return (
		<div className={`toast  ${position}`}>
			<Banner status={type}>
				{text}
				<button
					className={`toast-button ${type}-button`}
					onClick={onClose}>
					Close
				</button>
			</Banner>
		</div>
	);
}
