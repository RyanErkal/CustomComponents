import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ToastContent from "./ToastContent";

export default function Toast({ type, position, children }) {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				className={`toast-button ${type}-button`}
				onClick={() => setShowModal(true)}>
				{`Show ${type} toast`}
			</button>
			{showModal &&
				createPortal(
					<ToastContent
						type={type}
						text={children}
						position={position}
						onClose={() => setShowModal(false)}
					/>,
					document.body
				)}
		</>
	);
}
