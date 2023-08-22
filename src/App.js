import React from "react";
import "./App.css";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";
import Tooltip from "./components/Tooltip";
import Toast from "./components/Toast";

const colors = [
	"red",
	"yellow",
	"green",
	"blue",
	"indigo",
	"purple",
	"pink",
	"gray"
];

const placeHolderText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";

function App() {
	return (
		<div className="App">
			<h1>Custom Components</h1>

			{/* Badges */}

			{colors.map((color) => (
				<Badge color={color}>Badge</Badge>
			))}
			<br />
			{colors.map((color) => (
				<Badge color={color} rounded>
					Badge
				</Badge>
			))}

			{/* Banners */}

			<Banner status="success">{placeHolderText}</Banner>
			<Banner status="warning">{placeHolderText}</Banner>
			<Banner status="error">{placeHolderText}</Banner>
			<Banner status="default"></Banner>

			{/* Cards */}

			<Card title="Lorem ipsum">{placeHolderText}</Card>
			<Card title="Lorem ipsum" hover>
				{placeHolderText}
			</Card>

			{/* Testimonial */}

			<Testimonial name="John Doe" title="Amazon CFO">
				{placeHolderText}
			</Testimonial>
			<Testimonial name="John Doe" title="Amazon CFO" vertical>
				{placeHolderText}
			</Testimonial>

			{/* Tooltip */}

			{colors.map((color) => (
				<Tooltip color={color} size="sm" title="Archive Notes">
					Useful Information
				</Tooltip>
			))}
			<Tooltip color="gray" size="md" title="Archive Notes">
				Useful Information
			</Tooltip>
			<Tooltip color="gray" size="lg" title="Archive Notes">
				Useful Information
			</Tooltip>

			{/* Toast */}

			<Toast type="success">You have successfully logged in!</Toast>
			<Toast type="warning">A network error has been detected</Toast>
			<Toast type="info">Please read updated information</Toast>
			<Toast type="error">Error 420</Toast>
		</div>
	);
}

export default App;
