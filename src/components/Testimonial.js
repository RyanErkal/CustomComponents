import React from "react";
import Quote from "../media/quote.svg";
import DefaultImg from "../media/testimage.png";

export default function Testimonial({
	img = "default",
	name,
	title,
	children
}) {
	return (
		<div className="testimonial">
			{img ? (
				<img
					className="testimonial-image"
					src={DefaultImg}
					alt="failed to load"
				/>
			) : null}
			<div className="testimonial-text">
				<img src={Quote} alt="quote" />
				<p className="testimonial-quote">{children}</p>
				<p className="testimonial-name">
					<strong>{name}</strong> / {title}
				</p>
			</div>
		</div>
	);
}
