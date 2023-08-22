import React from "react";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import ToastContent from "./ToastContent";

export default function Toast({ type, position, children }) {
	const intervalRef = useRef(null);
	const [showModal, setShowModal] = useState(false);

	function handleClick() {
		setShowModal(true);
		intervalRef.current = setTimeout(() => {
			setShowModal(false);
		}, 3000);
	}
	return (
		<>
			<button
				className={`toast-button ${type}-button`}
				onClick={handleClick}>
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
