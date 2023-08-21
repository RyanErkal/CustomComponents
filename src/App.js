import React from "react";
import "./App.css";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";
import Tooltip from "./components/Tooltip";

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
				<Tooltip color={color} styles="bold" title="Archive Notes">
					Useful Information
				</Tooltip>
			))}
		</div>
	);
}

export default App;
