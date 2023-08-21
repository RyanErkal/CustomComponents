import React from "react";

const colors = {
	red: "#991b1b",
	yellow: "#92400e",
	green: "#065f46",
	blue: "#1e40af",
	indigo: "#3730a3",
	purple: "#3730a3",
	pink: "#9d174d",
	gray: "gray"
};

export default function CloseButton({ stroke }) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			stroke={colors[stroke]}
			xmlns="http://www.w3.org/2000/svg">
			<g id="X">
				<path
					id="Icon"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
					fill={colors[stroke]}
				/>
			</g>
		</svg>
	);
}
