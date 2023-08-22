import React from "react";
import "./App.css";
import Section from "./components/Section";
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
			<Section title="">
				<h1>Custom Components</h1>
				{/* Badges */}
				<Section title="Badges">
					{colors.map((color) => (
						<Badge color={color}>Badge</Badge>
					))}
					<br />
					{colors.map((color) => (
						<Badge color={color} rounded>
							Badge
						</Badge>
					))}
				</Section>

				{/* Banners */}

				<Section title="Banners">
					<Banner status="success">{placeHolderText}</Banner>
					<Banner status="warning">{placeHolderText}</Banner>
					<Banner status="error">{placeHolderText}</Banner>
					<Banner status="default"></Banner>
				</Section>
				{/* Cards */}

				<Section title="Cards">
					<Card title="Lorem ipsum">{placeHolderText}</Card>
					<Card title="Lorem ipsum" hover>
						{placeHolderText}
					</Card>
				</Section>

				{/* Testimonial */}

				<Section title="Testimonials">
					<Testimonial name="John Doe" title="Amazon CFO">
						{placeHolderText}
					</Testimonial>
					<Testimonial name="John Doe" title="Amazon CFO" vertical>
						{placeHolderText}
					</Testimonial>
				</Section>

				{/* Tooltip */}

				<Section title="Tooltips">
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
				</Section>

				{/* Toast */}

				<Section title="Toasts">
					<Toast type="success">
						You have successfully logged in!
					</Toast>
					<Toast type="warning" position="top-right">
						A network error has been detected
					</Toast>
					<Toast type="info" position="bottom-left">
						Please read updated information
					</Toast>
					<Toast type="error" position="center">
						Error 420
					</Toast>
				</Section>
			</Section>
		</div>
	);
}

export default App;
