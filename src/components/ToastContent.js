import React from "react";
import Banner from "./Banner";

export default function ToastContent({ type, text, onClose }) {
	return (
		<div className="toast">
			<Banner status={type}>
				{text}
				<button className="toast-button" onClick={onClose}>
					Close
				</button>
			</Banner>
		</div>
	);
}
