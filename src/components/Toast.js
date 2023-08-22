import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ToastContent from "./ToastContent";

export default function Toast({ type, children }) {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button className="toast-button" onClick={() => setShowModal(true)}>
				{`Show ${type} Toast`}
			</button>
			{showModal &&
				createPortal(
					<ToastContent
						type={type}
						text={children}
						onClose={() => setShowModal(false)}
					/>,
					document.body
				)}
		</>
	);
}
