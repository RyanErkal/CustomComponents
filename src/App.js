import React from "react";
import "./App.css";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";

function App() {
	return (
		<div className="App">
			<h1>Custom Components</h1>

			{/* Badges */}

			<Badge color="red" />
			<Badge color="yellow">Badge</Badge>
			<Badge color="green">Badge</Badge>
			<Badge color="blue">Badge</Badge>
			<Badge color="indigo">Badge</Badge>
			<Badge color="purple">Badge</Badge>
			<Badge color="pink">Badge</Badge>
			<br />
			<Badge color="red" rounded />
			<Badge color="yellow" rounded>
				Badge
			</Badge>
			<Badge color="green" rounded>
				Badge
			</Badge>
			<Badge color="blue" rounded>
				Badge
			</Badge>
			<Badge color="indigo" rounded>
				Badge
			</Badge>
			<Badge color="purple" rounded>
				Badge
			</Badge>
			<Badge color="pink" rounded>
				Badge
			</Badge>

			{/* Banners */}

			<Banner status="success">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				pariatur, ipsum similique veniam.
			</Banner>
			<Banner status="warning">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				pariatur, ipsum similique veniam.
			</Banner>
			<Banner status="error">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				pariatur, ipsum similique veniam.
			</Banner>
			<Banner status="default"></Banner>

			{/* Cards */}

			<Card title="Lorem ipsum">
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
				Et magna sit morbi lobortis.
			</Card>
			<Card title="Lorem ipsum" hover>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
				Et magna sit morbi lobortis.
			</Card>

			{/* Testimonial */}

			<Testimonial name="John Doe" title="Amazon CFO">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				pariatur, ipsum similique veniam.
			</Testimonial>
		</div>
	);
}

export default App;
